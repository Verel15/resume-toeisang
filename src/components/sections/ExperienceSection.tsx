'use client';

import { useTranslation } from 'react-i18next';
import { Building2, CalendarDays } from 'lucide-react';

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  type: string;
  bullets: string[];
  stack: string[];
}

export default function ExperienceSection() {
  const { t } = useTranslation();

  const rawItems = t('workExp.items', { returnObjects: true });
  const items: ExperienceItem[] = Array.isArray(rawItems) ? rawItems : [];

  return (
    <section id="experience" className="section-padding" style={{ backgroundColor: 'var(--bg)' }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12" data-aos="fade-up">
          <p className="text-xs font-medium text-blue-500 uppercase tracking-widest mb-3">
            {t('workExp.eyebrow')}
          </p>
          <h2
            className="text-2xl sm:text-3xl font-semibold tracking-tight mb-3"
            style={{ color: 'var(--text-primary)' }}
          >
            {t('workExp.title')}
          </h2>
          <p className="text-sm max-w-lg" style={{ color: 'var(--text-secondary)' }}>
            {t('workExp.subtitle')}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-[7px] top-2 bottom-2 w-px hidden sm:block"
            style={{ backgroundColor: 'var(--border)' }}
          />

          <div className="space-y-10">
            {items.map((item, i) => (
              <div key={i} className="relative sm:pl-10" data-aos="fade-up" data-aos-delay={Math.min(i * 100, 400)}>
                {/* Dot */}
                <div
                  className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-blue-500 hidden sm:block"
                  style={{ backgroundColor: 'var(--bg)' }}
                />

                <div className="card p-6 hover:border-blue-500/30 transition-colors duration-200">
                  {/* Top row */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3
                        className="text-base font-semibold mb-1"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {item.role}
                      </h3>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--text-secondary)' }}>
                          <Building2 size={12} />
                          {item.company}
                        </span>
                        <span
                          className="text-xs px-2 py-0.5 rounded-full"
                          style={{
                            backgroundColor: 'var(--bg-elevated)',
                            border: '1px solid var(--border)',
                            color: 'var(--text-muted)',
                          }}
                        >
                          {item.type}
                        </span>
                      </div>
                    </div>
                    <span className="flex items-center gap-1.5 text-xs shrink-0" style={{ color: 'var(--text-muted)' }}>
                      <CalendarDays size={12} />
                      {item.period}
                    </span>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-2 mb-5">
                    {item.bullets.map((b, bi) => (
                      <li key={bi} className="flex items-start gap-2.5">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-blue-500 shrink-0" />
                        <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>{b}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Stack badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {item.stack.map(tech => (
                      <span key={tech} className="badge">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
