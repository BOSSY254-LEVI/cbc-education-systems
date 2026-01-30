import { Users, TrendingUp, GraduationCap, Clock } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: '150+',
    label: 'PARTNER SCHOOLS',
  },
  {
    icon: TrendingUp,
    value: '92%',
    label: 'MASTERY GROWTH RATE',
  },
  {
    icon: GraduationCap,
    value: '1.2M',
    label: 'SUBMISSIONS EVALUATED',
  },
  {
    icon: Clock,
    value: '4h',
    label: 'AVG. FEEDBACK TIME',
  },
];

export default function StatsSection() {
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <Icon className="w-8 h-8 text-primary-foreground/80 mx-auto mb-3" />
                <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-primary-foreground/70 tracking-wide">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
