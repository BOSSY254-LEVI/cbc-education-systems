import { useAuth } from '../../../contexts/AuthContext';
import { StatCard } from '../../../components/dashboard/StatCard';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { 
  Users, 
  GraduationCap, 
  UserCheck, 
  BookOpen,
  Plus,
  ArrowRight,
  TrendingUp,
  Loader2,
  AlertCircle,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

interface SchoolStats {
  totalTeachers: number;
  totalLearners: number;
  totalParents: number;
  activeClasses: number;
  recentAssessments: number;
}

interface Activity {
  id: number;
  action: string;
  name: string;
  time: string;
}

interface PerformanceData {
  grade: string;
  completionRate: number;
}

export default function SchoolDashboard() {
  const { user } = useAuth();
  const [stats, setStats] = useState<SchoolStats | null>(null);
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchDashboardData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      // Fetch school stats
      const { data: statsData, error: statsError } = await supabase
        .from('school_stats')
        .select('*')
        .eq('school_id', user?.schoolId)
        .single();

      if (statsError && statsError.code !== 'PGRST116') {
        throw statsError;
      }

      // Fetch recent activities
      const { data: activitiesData, error: activitiesError } = await supabase
        .from('school_activities')
        .select('*')
        .eq('school_id', user?.schoolId)
        .order('created_at', { ascending: false })
        .limit(10);

      if (activitiesError) {
        throw activitiesError;
      }

      setStats(statsData || {
        totalTeachers: 0,
        totalLearners: 0,
        totalParents: 0,
        activeClasses: 0,
        recentAssessments: 0
      });
      setActivities(activitiesData || []);
    } catch (err) {
      console.error('Error fetching dashboard data:', err);
      setError('Failed to load dashboard data. Please try again.');
    } finally {
      setLoading(false);
    }
  }, [user?.schoolId]);

  useEffect(() => {
    void fetchDashboardData();
  }, [fetchDashboardData]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin mx-auto text-primary" />
          <p className="mt-4 text-muted-foreground">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <AlertCircle className="w-8 h-8 mx-auto text-red-500" />
          <p className="mt-4 text-red-600">{error}</p>
          <Button onClick={fetchDashboardData} className="mt-4">
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">
            Welcome back, {user?.firstName}!
          </h1>
          <p className="text-muted-foreground mt-1">
            Here's what's happening at your school today.
          </p>
        </div>
        <div className="flex gap-2">
          <Button asChild>
            <Link to="/school-admin/learners/add">
              <Plus className="w-4 h-4 mr-2" />
              Add Learner
            </Link>
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Teachers"
          value={stats?.totalTeachers || 0}
          icon={<Users className="w-5 h-5 text-primary" />}
          trend={{ value: 0, isPositive: true }}
        />
        <StatCard
          title="Total Learners"
          value={stats?.totalLearners || 0}
          icon={<GraduationCap className="w-5 h-5 text-primary" />}
          trend={{ value: 0, isPositive: true }}
        />
        <StatCard
          title="Parents Registered"
          value={stats?.totalParents || 0}
          icon={<UserCheck className="w-5 h-5 text-primary" />}
          description={`${stats && stats.totalLearners > 0 ? Math.round((stats.totalParents / stats.totalLearners) * 100) : 0}% of learners`}
        />
        <StatCard
          title="Active Classes"
          value={stats?.activeClasses || 0}
          icon={<BookOpen className="w-5 h-5 text-primary" />}
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Quick Actions */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="text-lg">Quick Actions</CardTitle>
            <CardDescription>Common tasks and shortcuts</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button variant="outline" className="w-full justify-start" asChild>
              <Link to="/school-admin/teachers/add">
                <Plus className="w-4 h-4 mr-2" />
                Add New Teacher
              </Link>
            </Button>
            <Button variant="outline" className="w-full justify-start" asChild>
              <Link to="/school-admin/learners/add">
                <Plus className="w-4 h-4 mr-2" />
                Enroll New Learner
              </Link>
            </Button>
            <Button variant="outline" className="w-full justify-start" asChild>
              <Link to="/school-admin/reports">
                <TrendingUp className="w-4 h-4 mr-2" />
                Generate Reports
              </Link>
            </Button>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-lg">Recent Activity</CardTitle>
              <CardDescription>Latest updates from your school</CardDescription>
            </div>
            <Button variant="ghost" size="sm">
              View all
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </CardHeader>
          <CardContent>
            {activities.length > 0 ? (
              <div className="space-y-4">
                {activities.map((activity) => (
                  <div 
                    key={activity.id}
                    className="flex items-center justify-between py-3 border-b last:border-0"
                  >
                    <div>
                      <p className="font-medium text-foreground">{activity.action}</p>
                      <p className="text-sm text-muted-foreground">{activity.name}</p>
                    </div>
                    <span className="text-xs text-muted-foreground whitespace-nowrap">
                      {activity.time}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                No recent activity yet. Start by adding teachers and learners to your school.
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Performance Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Performance Overview</CardTitle>
          <CardDescription>Assessment completion rates by grade level</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {['PP1', 'PP2', 'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4'].map((grade) => (
              <div key={grade} className="text-center p-4 rounded-lg bg-muted/50">
                <p className="text-sm text-muted-foreground">{grade}</p>
                <p className="text-2xl font-bold text-foreground mt-1">
                  0%
                </p>
                <p className="text-xs text-muted-foreground mt-1">completed</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
