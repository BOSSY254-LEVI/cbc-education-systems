import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen } from 'lucide-react';

export default function CurriculumPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Curriculum</h1>
        <p className="text-muted-foreground mt-1">
          Manage CBC learning areas, strands, and competencies
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="w-5 h-5" />
            Curriculum Management
          </CardTitle>
          <CardDescription>
            This section will allow you to manage the KICD-aligned curriculum structure
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12 text-muted-foreground">
            <BookOpen className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p>Curriculum management features coming soon.</p>
            <p className="text-sm mt-2">
              This will include learning areas, strands, sub-strands, and competency indicators.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
