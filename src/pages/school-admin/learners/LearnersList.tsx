import { useState } from 'react';
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
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { GradeLevel, Gender } from '@/types';

// Mock data for learners
const mockLearners = [
  {
    id: '1',
    admissionNumber: 'ADM2024001',
    firstName: 'Jane',
    lastName: 'Muthoni',
    gender: Gender.FEMALE,
    gradeLevel: GradeLevel.GRADE_4,
    streamName: 'East',
    parent: { name: 'Mrs. Wanjiku', phone: '+254 712 345 678' },
    isActive: true,
  },
  {
    id: '2',
    admissionNumber: 'ADM2024002',
    firstName: 'Brian',
    lastName: 'Omondi',
    gender: Gender.MALE,
    gradeLevel: GradeLevel.GRADE_4,
    streamName: 'East',
    parent: { name: 'Mr. Omondi', phone: '+254 723 456 789' },
    isActive: true,
  },
  {
    id: '3',
    admissionNumber: 'ADM2024003',
    firstName: 'Faith',
    lastName: 'Njeri',
    gender: Gender.FEMALE,
    gradeLevel: GradeLevel.GRADE_3,
    streamName: 'West',
    parent: { name: 'Mrs. Njeri', phone: '+254 734 567 890' },
    isActive: true,
  },
  {
    id: '4',
    admissionNumber: 'ADM2024004',
    firstName: 'Kevin',
    lastName: 'Kipchoge',
    gender: Gender.MALE,
    gradeLevel: GradeLevel.GRADE_5,
    streamName: 'North',
    parent: { name: 'Mr. Kipchoge', phone: '+254 745 678 901' },
    isActive: true,
  },
  {
    id: '5',
    admissionNumber: 'ADM2024005',
    firstName: 'Mercy',
    lastName: 'Achieng',
    gender: Gender.FEMALE,
    gradeLevel: GradeLevel.PP2,
    streamName: null,
    parent: { name: 'Mrs. Achieng', phone: '+254 756 789 012' },
    isActive: false,
  },
];

export default function LearnersListPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredLearners = mockLearners.filter(learner => 
    `${learner.firstName} ${learner.lastName}`.toLowerCase().includes(searchQuery.toLowerCase()) ||
    learner.admissionNumber.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
                {filteredLearners.map((learner) => (
                  <TableRow key={learner.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                          <span className="text-sm font-medium text-accent-foreground">
                            {learner.firstName[0]}{learner.lastName[0]}
                          </span>
                        </div>
                        <div>
                          <p className="font-medium">{learner.firstName} {learner.lastName}</p>
                          <p className="text-sm text-muted-foreground capitalize">
                            {learner.gender}
                          </p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="font-mono text-sm">
                      {learner.admissionNumber}
                    </TableCell>
                    <TableCell>
                      <div>
                        <p className="font-medium">{learner.gradeLevel}</p>
                        {learner.streamName && (
                          <p className="text-sm text-muted-foreground">{learner.streamName}</p>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-muted-foreground" />
                        <div>
                          <p className="text-sm">{learner.parent.name}</p>
                          <p className="text-xs text-muted-foreground">{learner.parent.phone}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={learner.isActive ? 'default' : 'secondary'}>
                        {learner.isActive ? 'Active' : 'Inactive'}
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
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
