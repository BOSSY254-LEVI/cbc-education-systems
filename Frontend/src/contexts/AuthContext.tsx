import { useState, createContext, useContext, ReactNode, useEffect, useCallback } from 'react';
import type { User as SupabaseAuthUser } from '@supabase/supabase-js';
import { User, UserRole } from '@/types';
import { supabase } from '@/lib/supabase';

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AUTH_REQUEST_TIMEOUT_MS = 10000;
const SESSION_REQUEST_TIMEOUT_MS = 5000;
const PROFILE_REQUEST_TIMEOUT_MS = 3000;

// Cache for user profiles to avoid redundant database calls
const userCache = new Map<string, User>();

const withTimeout = async <T,>(
  promise: Promise<T>,
  timeoutMs: number,
  errorMessage: string
): Promise<T> => {
  let timeoutId: ReturnType<typeof setTimeout> | undefined;

  const timeoutPromise = new Promise<never>((_, reject) => {
    timeoutId = setTimeout(() => reject(new Error(errorMessage)), timeoutMs);
  });

  try {
    return await Promise.race([promise, timeoutPromise]);
  } finally {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  }
};

const mapAuthUserToAppUser = (authUser: SupabaseAuthUser): User => {
  const metadata = (authUser.user_metadata ?? {}) as Record<string, unknown>;
  const email = authUser.email ?? '';
  const emailLocalPart = email.includes('@') ? email.split('@')[0] : email;

  const firstNameCandidate = metadata.first_name ?? metadata.firstName;
  const lastNameCandidate = metadata.last_name ?? metadata.lastName;
  const phoneNumberCandidate = metadata.phone_number ?? metadata.phoneNumber;
  const avatarUrlCandidate = metadata.avatar_url ?? metadata.avatarUrl;
  const schoolIdCandidate = metadata.school_id ?? metadata.schoolId;
  const isActiveCandidate = metadata.is_active ?? metadata.isActive;
  const roleCandidate = metadata.role;

  const role =
    typeof roleCandidate === 'string' && Object.values(UserRole).includes(roleCandidate as UserRole)
      ? (roleCandidate as UserRole)
      : UserRole.SCHOOL_ADMIN;

  const firstName =
    typeof firstNameCandidate === 'string' && firstNameCandidate.trim()
      ? firstNameCandidate
      : emailLocalPart || 'User';

  const lastName =
    typeof lastNameCandidate === 'string'
      ? lastNameCandidate
      : '';

  const phoneNumber =
    typeof phoneNumberCandidate === 'string'
      ? phoneNumberCandidate
      : undefined;

  const avatarUrl =
    typeof avatarUrlCandidate === 'string'
      ? avatarUrlCandidate
      : undefined;

  const schoolId =
    typeof schoolIdCandidate === 'string'
      ? schoolIdCandidate
      : undefined;

  const isActive =
    typeof isActiveCandidate === 'boolean'
      ? isActiveCandidate
      : true;

  const createdAt = authUser.created_at ?? new Date().toISOString();
  const updatedAt = authUser.updated_at ?? createdAt;

  return {
    id: authUser.id,
    email,
    role,
    firstName,
    lastName,
    phoneNumber,
    avatarUrl,
    schoolId,
    isActive,
    createdAt,
    updatedAt,
  };
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchUserProfile = useCallback(async (userId: string): Promise<User | null> => {
    // Check cache first
    if (userCache.has(userId)) {
      return userCache.get(userId) || null;
    }

    try {
      // Optimized query with only necessary fields
      const { data: profileData, error } = await supabase
        .from('users')
        .select('id, email, role, first_name, last_name, phone_number, avatar_url, school_id, is_active, created_at, updated_at')
        .eq('id', userId)
        .maybeSingle();

      if (error) {
        throw error;
      }

      if (profileData) {
        const userProfile: User = {
          id: profileData.id,
          email: profileData.email,
          role: profileData.role,
          firstName: profileData.first_name,
          lastName: profileData.last_name,
          phoneNumber: profileData.phone_number,
          avatarUrl: profileData.avatar_url,
          schoolId: profileData.school_id,
          isActive: profileData.is_active,
          createdAt: profileData.created_at,
          updatedAt: profileData.updated_at,
        };

        // Cache the user profile
        userCache.set(userId, userProfile);
        return userProfile;
      }
    } catch (error) {
      console.error('Profile fetch error:', error);
    }
    
    return null;
  }, []);

  const hydrateUser = useCallback((authUser: SupabaseAuthUser) => {
    setUser(mapAuthUserToAppUser(authUser));

    void withTimeout(
      fetchUserProfile(authUser.id),
      PROFILE_REQUEST_TIMEOUT_MS,
      'Profile lookup timed out.'
    )
      .then((profile) => {
        if (profile) {
          setUser(profile);
        }
      })
      .catch((error) => {
        console.warn('Using fallback auth profile:', error);
      });
  }, [fetchUserProfile]);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // Input validation
      if (!email || !password) {
        throw new Error('Email and password are required');
      }

      if (!email.includes('@')) {
        throw new Error('Please enter a valid email address');
      }

      if (password.length < 6) {
        throw new Error('Password must be at least 6 characters long');
      }

      // Use Supabase authentication with optimized settings
      const { data, error } = await withTimeout(
        supabase.auth.signInWithPassword({
          email,
          password,
        }),
        AUTH_REQUEST_TIMEOUT_MS,
        'Sign in timed out. Please try again.'
      );

      if (error) {
        throw error;
      }

      if (data.user) {
        // Authenticate immediately, then enrich profile asynchronously.
        hydrateUser(data.user);
        
        // Wait a brief moment for user data to be hydrated before resolving
        await new Promise(resolve => setTimeout(resolve, 100));
      } else {
        throw new Error('Authentication failed. Please try again.');
      }
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    } finally {
      // Always reset loading state
      setIsLoading(false);
    }
  };

  const logout = async () => {
    setIsLoading(true);
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        throw error;
      }
      setUser(null);
      // Clear cache on logout
      userCache.clear();
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Check for existing session on mount with optimized performance
  useEffect(() => {
    const checkSession = async () => {
      try {
        const { data: { session }, error } = await withTimeout(
          supabase.auth.getSession(),
          SESSION_REQUEST_TIMEOUT_MS,
          'Session check timed out.'
        );
        
        if (error) {
          throw error;
        }

        if (session?.user) {
          hydrateUser(session.user);
        }
      } catch (error) {
        console.error('Session check error:', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkSession();

    // Listen for auth changes with optimized subscription
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === 'SIGNED_IN' && session?.user) {
          hydrateUser(session.user);
          setIsLoading(false);
        } else if (event === 'SIGNED_OUT') {
          setUser(null);
          // Clear cache on logout
          userCache.clear();
          setIsLoading(false);
        }
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, [hydrateUser]);

  return (
    <AuthContext.Provider value={{
      user,
      isLoading,
      isAuthenticated: !!user,
      login,
      logout,
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
