import { LayoutGrid, BookOpen, ClipboardCheck, Upload } from 'lucide-react';

const tools = [
  {
    icon: LayoutGrid,
    title: 'Personal Dashboard',
    description: 'Get a high-level overview of your current goals, notifications, and immediate tasks.',
  },
  {
    icon: BookOpen,
    title: 'Curriculum Explorer',
    description: 'Navigate through strands and sub-strands to understand learning outcomes and mastery requirements.',
  },
  {
    icon: ClipboardCheck,
    title: 'Assessments',
    description: 'Review detailed rubrics, complete assignments, and receive actionable feedback from teachers.',
  },
  {
    icon: Upload,
    title: 'Evidence Upload',
    description: 'Easily submit projects, videos, and documents to prove your mastery of specific competencies.',
  },
];

export default function QuickAccessSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Quick Access Tools
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to manage and monitor learning outcomes in one place.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {tools.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <div
                key={index}
                className="bg-muted/50 rounded-xl p-8 hover:shadow-lg transition-shadow border border-border/50"
              >
                <div className="w-14 h-14 rounded-lg bg-primary flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{tool.title}</h3>
                <p className="text-muted-foreground">{tool.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
