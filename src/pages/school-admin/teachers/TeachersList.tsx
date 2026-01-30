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
  Mail,
  Phone,
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

// Mock data for teachers
const mockTeachers = [
  {
    id: '1',
    firstName: 'James',
    lastName: 'Ochieng',
    email: 'j.ochieng@school.edu',
    phoneNumber: '+254 712 345 678',
    employeeNumber: 'TCH001',
    subjects: ['Mathematics', 'Science'],
    isActive: true,
  },
  {
    id: '2',
    firstName: 'Mary',
    lastName: 'Wanjiku',
    email: 'm.wanjiku@school.edu',
    phoneNumber: '+254 723 456 789',
    employeeNumber: 'TCH002',
    subjects: ['English', 'Social Studies'],
    isActive: true,
  },
  {
    id: '3',
    firstName: 'Peter',
    lastName: 'Kamau',
    email: 'p.kamau@school.edu',
    phoneNumber: '+254 734 567 890',
    employeeNumber: 'TCH003',
    subjects: ['Kiswahili', 'Religious Education'],
    isActive: true,
  },
  {
    id: '4',
    firstName: 'Grace',
    lastName: 'Muthoni',
    email: 'g.muthoni@school.edu',
    phoneNumber: '+254 745 678 901',
    employeeNumber: 'TCH004',
    subjects: ['Creative Arts', 'Music'],
    isActive: false,
  },
];

export default function TeachersListPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTeachers = mockTeachers.filter(teacher => 
    `${teacher.firstName} ${teacher.lastName}`.toLowerCase().includes(searchQuery.toLowerCase()) ||
    teacher.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    teacher.employeeNumber.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Teachers</h1>
          <p className="text-muted-foreground mt-1">
            Manage your school's teaching staff
          </p>
        </div>
        <Button asChild>
          <Link to="/school-admin/teachers/add">
            <Plus className="w-4 h-4 mr-2" />
            Add Teacher
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
                placeholder="Search by name, email, or employee number..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Teachers Table */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">All Teachers</CardTitle>
          <CardDescription>
            {filteredTeachers.length} teacher{filteredTeachers.length !== 1 ? 's' : ''} found
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Employee No.</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead>Subjects</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="w-[50px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredTeachers.map((teacher) => (
                  <TableRow key={teacher.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-sm font-medium text-primary">
                            {teacher.firstName[0]}{teacher.lastName[0]}
                          </span>
                        </div>
                        <div>
                          <p className="font-medium">{teacher.firstName} {teacher.lastName}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="font-mono text-sm">
                      {teacher.employeeNumber}
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="flex items-center gap-1.5 text-sm">
                          <Mail className="w-3.5 h-3.5 text-muted-foreground" />
                          {teacher.email}
                        </div>
                        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                          <Phone className="w-3.5 h-3.5" />
                          {teacher.phoneNumber}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {teacher.subjects.map((subject) => (
                          <Badge key={subject} variant="secondary" className="text-xs">
                            {subject}
                          </Badge>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={teacher.isActive ? 'default' : 'secondary'}>
                        {teacher.isActive ? 'Active' : 'Inactive'}
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
                          <DropdownMenuItem>Assign Classes</DropdownMenuItem>
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
