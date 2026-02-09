import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import useCountUp from '@/hooks/useCountUp';

type Metric = {
  label: string;
  end: number;
  format?: 'compact' | 'raw' | 'percent';
  suffix?: string;
  Icon?: any;
};

export default function Stats({ metrics }: { metrics: Metric[] }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div className="relative -mt-10 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref as any}
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 bg-white rounded-2xl shadow-xl border border-slate-100 p-6 md:p-8"
        >
          {metrics.map((m, i) => {
            const count = useCountUp({ end: m.end, duration: 1400, start: inView });

            const display = (() => {
              if (m.format === 'percent') return `${Math.round(count)}%` + (m.suffix || '');
              if (m.format === 'compact') {
                const val = (count / 1000);
                return `${val >= 1 ? val.toFixed(1) : count}${val >= 1 ? 'K' : ''}${m.suffix || ''}`;
              }
              return `${count}${m.suffix || ''}`;
            })();

            return (
              <div key={i} className="text-center group">
                <div className="flex justify-center mb-2 transform group-hover:scale-110 transition-transform">
                  {m.Icon ? <m.Icon className="w-6 h-6 text-indigo-600" /> : null}
                </div>
                <div className="text-3xl md:text-4xl font-extrabold text-slate-900">{display}</div>
                <div className="text-sm font-medium text-slate-500 uppercase tracking-wider mt-1">{m.label}</div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
