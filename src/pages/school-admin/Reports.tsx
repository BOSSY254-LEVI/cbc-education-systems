import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText } from 'lucide-react';

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Reports</h1>
        <p className="text-muted-foreground mt-1">
          Generate and manage CBC assessment reports
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="w-5 h-5" />
            Report Generation
          </CardTitle>
          <CardDescription>
            Generate formative and summative assessment reports
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12 text-muted-foreground">
            <FileText className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p>Report generation features coming soon.</p>
            <p className="text-sm mt-2">
              This will include CBC-format reports with competency-based assessments.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
