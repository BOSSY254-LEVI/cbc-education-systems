import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Nonea has completely transformed how we track student growth. The heatmaps give us a level of insight we never had with traditional grading.",
    author: 'Sarah Jenkins',
    role: 'Principal, Oakwood Academy',
    avatar: 'SJ',
  },
  {
    quote: "As a parent, I finally understand exactly what my child is learning. The clarity provided by the sub-strands and outcomes is incredible.",
    author: 'David Miller',
    role: 'Parent of 7th Grader',
    avatar: 'DM',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[hsl(222,47%,15%)] rounded-xl p-8 text-primary-foreground"
            >
              <Quote className="w-10 h-10 text-primary mb-6" />
              <p className="text-lg mb-8 text-primary-foreground/90">{testimonial.quote}</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-sm font-medium">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-primary-foreground/70">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
