import { useAuth } from '@/contexts/AuthContext';
import { StatCard } from '@/components/dashboard/StatCard';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  GraduationCap, 
  UserCheck, 
  BookOpen,
  Plus,
  ArrowRight,
  TrendingUp,
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Mock data for the dashboard
const mockStats = {
  totalTeachers: 24,
  totalLearners: 456,
  totalParents: 312,
  activeClasses: 18,
  recentAssessments: 89,
};

const recentActivities = [
  { id: 1, action: 'New learner enrolled', name: 'Jane Muthoni', time: '2 hours ago' },
  { id: 2, action: 'Assessment submitted', name: 'Mr. Ochieng - Grade 4', time: '3 hours ago' },
  { id: 3, action: 'Parent account created', name: 'Mrs. Wanjiku', time: '5 hours ago' },
  { id: 4, action: 'Report generated', name: 'Term 1 Summary', time: '1 day ago' },
];

export default function SchoolDashboard() {
  const { user } = useAuth();

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
          value={mockStats.totalTeachers}
          icon={<Users className="w-5 h-5 text-primary" />}
          trend={{ value: 8, isPositive: true }}
        />
        <StatCard
          title="Total Learners"
          value={mockStats.totalLearners}
          icon={<GraduationCap className="w-5 h-5 text-primary" />}
          trend={{ value: 12, isPositive: true }}
        />
        <StatCard
          title="Parents Registered"
          value={mockStats.totalParents}
          icon={<UserCheck className="w-5 h-5 text-primary" />}
          description="68% of learners"
        />
        <StatCard
          title="Active Classes"
          value={mockStats.activeClasses}
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
            <div className="space-y-4">
              {recentActivities.map((activity) => (
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
            {['PP1', 'PP2', 'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4'].map((grade, idx) => (
              <div key={grade} className="text-center p-4 rounded-lg bg-muted/50">
                <p className="text-sm text-muted-foreground">{grade}</p>
                <p className="text-2xl font-bold text-foreground mt-1">
                  {85 + idx * 2}%
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
