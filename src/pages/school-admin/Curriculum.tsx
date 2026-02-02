import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import {
  BookOpen,
  Plus,
  Search,
  Filter,
  ChevronDown,
  ChevronRight,
  Edit,
  Trash2,
  Target,
  GraduationCap,
  Users,
  Lightbulb
} from 'lucide-react';

// Mock data for CBC curriculum structure
const learningAreas = [
  {
    id: '1',
    name: 'Language Activities',
    code: 'LANG',
    description: 'Communication and language development',
    strands: [
      {
        id: '1-1',
        name: 'Listening and Speaking',
        subStrands: [
          { id: '1-1-1', name: 'Listening Skills', competencies: ['Identify sounds', 'Follow instructions', 'Comprehend spoken language'] },
          { id: '1-1-2', name: 'Speaking Skills', competencies: ['Express ideas clearly', 'Use appropriate vocabulary', 'Participate in conversations'] }
        ]
      },
      {
        id: '1-2',
        name: 'Reading',
        subStrands: [
          { id: '1-2-1', name: 'Phonics and Word Recognition', competencies: ['Recognize letter sounds', 'Read simple words', 'Build vocabulary'] },
          { id: '1-2-2', name: 'Reading Comprehension', competencies: ['Understand main ideas', 'Make predictions', 'Draw conclusions'] }
        ]
      }
    ]
  },
  {
    id: '2',
    name: 'Mathematics Activities',
    code: 'MATH',
    description: 'Numerical and logical thinking development',
    strands: [
      {
        id: '2-1',
        name: 'Number',
        subStrands: [
          { id: '2-1-1', name: 'Counting and Number Recognition', competencies: ['Count to 100', 'Recognize numbers', 'Understand place value'] },
          { id: '2-1-2', name: 'Basic Operations', competencies: ['Add and subtract', 'Solve simple problems', 'Use number lines'] }
        ]
      }
    ]
  },
  {
    id: '3',
    name: 'Environmental Activities',
    code: 'ENV',
    description: 'Understanding and interacting with the environment',
    strands: [
      {
        id: '3-1',
        name: 'Environmental Awareness',
        subStrands: [
          { id: '3-1-1', name: 'Natural Environment', competencies: ['Identify plants and animals', 'Understand weather', 'Care for environment'] },
          { id: '3-1-2', name: 'Social Environment', competencies: ['Understand community', 'Respect diversity', 'Follow rules'] }
        ]
      }
    ]
  }
];

export default function CurriculumPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGrade, setSelectedGrade] = useState('all');
  const [expandedAreas, setExpandedAreas] = useState<Set<string>>(new Set());
  const [expandedStrands, setExpandedStrands] = useState<Set<string>>(new Set());
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  const toggleArea = (areaId: string) => {
    const newExpanded = new Set(expandedAreas);
    if (newExpanded.has(areaId)) {
      newExpanded.delete(areaId);
    } else {
      newExpanded.add(areaId);
    }
    setExpandedAreas(newExpanded);
  };

  const toggleStrand = (strandId: string) => {
    const newExpanded = new Set(expandedStrands);
    if (newExpanded.has(strandId)) {
      newExpanded.delete(strandId);
    } else {
      newExpanded.add(strandId);
    }
    setExpandedStrands(newExpanded);
  };

  const filteredAreas = learningAreas.filter(area =>
    area.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    area.strands.some(strand =>
      strand.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      strand.subStrands.some(subStrand =>
        subStrand.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        subStrand.competencies.some(comp => comp.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    )
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Curriculum Management</h1>
          <p className="text-muted-foreground mt-1">
            Manage CBC learning areas, strands, and competencies
          </p>
        </div>
        <div className="flex gap-2">
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Add Learning Area
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle>Add New Learning Area</DialogTitle>
                <DialogDescription>
                  Create a new learning area for the CBC curriculum.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="area-name">Learning Area Name</Label>
                  <Input id="area-name" placeholder="e.g., Creative Activities" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="area-code">Code</Label>
                  <Input id="area-code" placeholder="e.g., CREA" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="area-description">Description</Label>
                  <Textarea id="area-description" placeholder="Describe the learning area..." />
                </div>
                <div className="flex justify-end gap-2">
                  <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button onClick={() => setIsAddDialogOpen(false)}>
                    Create Area
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Filters and Search */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search learning areas, strands, or competencies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9"
                />
              </div>
            </div>
            <Select value={selectedGrade} onValueChange={setSelectedGrade}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Select grade" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Grades</SelectItem>
                <SelectItem value="pp1">PP1</SelectItem>
                <SelectItem value="pp2">PP2</SelectItem>
                <SelectItem value="grade1">Grade 1</SelectItem>
                <SelectItem value="grade2">Grade 2</SelectItem>
                <SelectItem value="grade3">Grade 3</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Curriculum Structure */}
      <div className="space-y-4">
        {filteredAreas.map((area) => (
          <Card key={area.id}>
            <CardHeader
              className="cursor-pointer hover:bg-muted/50 transition-colors"
              onClick={() => toggleArea(area.id)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {expandedAreas.has(area.id) ? (
                    <ChevronDown className="w-5 h-5 text-muted-foreground" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-muted-foreground" />
                  )}
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-primary" />
                    <div>
                      <CardTitle className="text-lg">{area.name}</CardTitle>
                      <CardDescription>{area.description}</CardDescription>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">{area.code}</Badge>
                  <Badge variant="outline">{area.strands.length} strands</Badge>
                </div>
              </div>
            </CardHeader>

            {expandedAreas.has(area.id) && (
              <CardContent className="pt-0">
                <div className="space-y-3">
                  {area.strands.map((strand) => (
                    <div key={strand.id} className="border-l-2 border-muted pl-4">
                      <div
                        className="flex items-center justify-between py-2 cursor-pointer hover:bg-muted/30 rounded px-2 -mx-2"
                        onClick={() => toggleStrand(strand.id)}
                      >
                        <div className="flex items-center gap-2">
                          {expandedStrands.has(strand.id) ? (
                            <ChevronDown className="w-4 h-4 text-muted-foreground" />
                          ) : (
                            <ChevronRight className="w-4 h-4 text-muted-foreground" />
                          )}
                          <Target className="w-4 h-4 text-blue-600" />
                          <span className="font-medium">{strand.name}</span>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {strand.subStrands.length} sub-strands
                        </Badge>
                      </div>

                      {expandedStrands.has(strand.id) && (
                        <div className="ml-6 space-y-2 mt-2">
                          {strand.subStrands.map((subStrand) => (
                            <div key={subStrand.id} className="border-l border-muted-foreground/30 pl-4">
                              <div className="flex items-center justify-between py-1">
                                <div className="flex items-center gap-2">
                                  <Lightbulb className="w-3 h-3 text-yellow-600" />
                                  <span className="text-sm font-medium">{subStrand.name}</span>
                                </div>
                                <div className="flex gap-1">
                                  <Button variant="ghost" size="sm">
                                    <Edit className="w-3 h-3" />
                                  </Button>
                                  <Button variant="ghost" size="sm">
                                    <Trash2 className="w-3 h-3" />
                                  </Button>
                                </div>
                              </div>
                              <div className="ml-5 mt-2 space-y-1">
                                {subStrand.competencies.map((competency, idx) => (
                                  <div key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
                                    <div className="w-1 h-1 bg-muted-foreground rounded-full" />
                                    <span>{competency}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            )}
          </Card>
        ))}
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-primary" />
              <div>
                <p className="text-2xl font-bold">{learningAreas.length}</p>
                <p className="text-xs text-muted-foreground">Learning Areas</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2">
              <Target className="w-5 h-5 text-blue-600" />
              <div>
                <p className="text-2xl font-bold">
                  {learningAreas.reduce((acc, area) => acc + area.strands.length, 0)}
                </p>
                <p className="text-xs text-muted-foreground">Strands</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-yellow-600" />
              <div>
                <p className="text-2xl font-bold">
                  {learningAreas.reduce((acc, area) =>
                    acc + area.strands.reduce((acc2, strand) => acc2 + strand.subStrands.length, 0), 0
                  )}
                </p>
                <p className="text-xs text-muted-foreground">Sub-strands</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-green-600" />
              <div>
                <p className="text-2xl font-bold">
                  {learningAreas.reduce((acc, area) =>
                    acc + area.strands.reduce((acc2, strand) =>
                      acc2 + strand.subStrands.reduce((acc3, subStrand) => acc3 + subStrand.competencies.length, 0), 0
                    ), 0
                  )}
                </p>
                <p className="text-xs text-muted-foreground">Competencies</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
