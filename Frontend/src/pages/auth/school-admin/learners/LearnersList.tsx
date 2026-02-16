import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { 
  Plus, 
  Search, 
  MoreHorizontal,
  Users,
  Loader2,
  AlertCircle,
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/lib/supabase';

interface ParentInfo {
  first_name: string;
  last_name: string;
  phone_number: string;
}

interface Learner {
  id: string;
  first_name: string;
  last_name: string;
  admission_number: string;
  grade_level: string;
  stream_name: string | null;
  gender: string;
  is_active: boolean;
  parents: ParentInfo | ParentInfo[] | null;
}

const getPrimaryParent = (parents: Learner['parents']) => {
  if (!parents) return null;
  return Array.isArray(parents) ? (parents[0] ?? null) : parents;
};

export default function LearnersListPage() {
  const { user } = useAuth();
  const [learners, setLearners] = useState<Learner[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchLearners = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const { data, error } = await supabase
        .from('learners')
        .select(`
          *,
          parents (
            first_name,
            last_name,
            phone_number
          )
        `)
        .eq('school_id', user?.schoolId)
        .order('created_at', { ascending: false });

      if (error) {
        throw error;
      }

      setLearners(data || []);
    } catch (err) {
      console.error('Error fetching learners:', err);
      setError('Failed to load learners. Please try again.');
    } finally {
      setLoading(false);
    }
  }, [user?.schoolId]);

  useEffect(() => {
    void fetchLearners();
  }, [fetchLearners]);

  const filteredLearners = learners.filter(learner => 
    `${learner.first_name} ${learner.last_name}`.toLowerCase().includes(searchQuery.toLowerCase()) ||
    learner.admission_number.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin mx-auto text-primary" />
          <p className="mt-4 text-muted-foreground">Loading learners...</p>
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
          <Button onClick={fetchLearners} className="mt-4">
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Learners</h1>
          <p className="text-muted-foreground mt-1">
            Manage enrolled students and their parent information
          </p>
        </div>
        <Button asChild>
          <Link to="/school-admin/learners/add">
            <Plus className="w-4 h-4 mr-2" />
            Enroll Learner
          </Link>
        </Button>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search by name or admission number..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Learners Table */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">All Learners</CardTitle>
          <CardDescription>
            {filteredLearners.length} learner{filteredLearners.length !== 1 ? 's' : ''} found
          </CardDescription>
        </CardHeader>
        <CardContent>
          {filteredLearners.length > 0 ? (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Learner</TableHead>
                    <TableHead>Admission No.</TableHead>
                    <TableHead>Grade</TableHead>
                    <TableHead>Parent/Guardian</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="w-[50px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredLearners.map((learner) => {
                    const parent = getPrimaryParent(learner.parents);

                    return (
                    <TableRow key={learner.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                            <span className="text-sm font-medium text-accent-foreground">
                              {learner.first_name[0]}{learner.last_name[0]}
                            </span>
                          </div>
                          <div>
                            <p className="font-medium">{learner.first_name} {learner.last_name}</p>
                            <p className="text-sm text-muted-foreground capitalize">
                              {learner.gender}
                            </p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="font-mono text-sm">
                        {learner.admission_number}
                      </TableCell>
                      <TableCell>
                        <div>
                          <p className="font-medium">{learner.grade_level}</p>
                          {learner.stream_name && (
                            <p className="text-sm text-muted-foreground">{learner.stream_name}</p>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-muted-foreground" />
                          <div>
                            <p className="text-sm">
                              {parent ? `${parent.first_name} ${parent.last_name}` : 'Not assigned'}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {parent?.phone_number || '-'}
                            </p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant={learner.is_active ? 'default' : 'secondary'}>
                          {learner.is_active ? 'Active' : 'Inactive'}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="w-4 h-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>View Profile</DropdownMenuItem>
                            <DropdownMenuItem>Edit Details</DropdownMenuItem>
                            <DropdownMenuItem>View Assessments</DropdownMenuItem>
                            <DropdownMenuItem>Parent Info</DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive">
                              Deactivate
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-muted-foreground mb-4">
                {searchQuery ? 'No learners found matching your search.' : 'No learners enrolled yet.'}
              </div>
              {!searchQuery && (
                <Button asChild>
                  <Link to="/school-admin/learners/add">
                    <Plus className="w-4 h-4 mr-2" />
                    Enroll First Learner
                  </Link>
                </Button>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
