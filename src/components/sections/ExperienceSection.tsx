'use client';

import { useTranslation } from 'react-i18next';
import { Building2, CalendarDays } from 'lucide-react';
import Image from 'next/image';
import tmcLogo from '@/assets/images/logo-tmc.png';
import tttLogo from '@/assets/images/logo-ttt.png';
import evtLogo from '@/assets/images/logo-evt.png';
import adiLogo from '@/assets/images/logo-adi.png';

const LOGOS = { adi: adiLogo, ttt: tttLogo, evt: evtLogo } as const;
const CLIENT_LOGOS = { tmc: tmcLogo } as const;

interface ExperienceItem {
  company: string;
  logo: string;
  client?: string;
  clientLogo?: string;
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
                    <div className="flex items-start gap-3.5">
                      <div className="relative shrink-0">
                        <div
                          className="w-12 h-12 shrink-0 rounded-lg bg-white flex items-center justify-center overflow-hidden"
                          style={{ border: '1px solid var(--border)' }}
                        >
                          {item.logo in LOGOS ? (
                            <Image
                              src={LOGOS[item.logo as keyof typeof LOGOS]}
                              alt={item.company}
                              width={48}
                              height={48}
                              className="w-full h-full object-contain p-1"
                            />
                          ) : (
                            <Building2 size={18} className="text-slate-400" aria-label={item.company} />
                          )}
                        </div>
                        {item.client && item.clientLogo && item.clientLogo in CLIENT_LOGOS && (
                          <div
                            className="absolute -bottom-2 -right-2 w-7 h-7 rounded-md bg-white flex items-center justify-center overflow-hidden"
                            style={{ border: '1px solid var(--border)' }}
                          >
                            <Image
                              src={CLIENT_LOGOS[item.clientLogo as keyof typeof CLIENT_LOGOS]}
                              alt={item.client}
                              width={28}
                              height={28}
                              className="w-full h-full object-contain p-0.5"
                            />
                          </div>
                        )}
                      </div>
                      <div>
                        <h3
                          className="text-base font-semibold mb-1"
                          style={{ color: 'var(--text-primary)' }}
                        >
                          {item.role}
                        </h3>
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                            {item.company}
                          </span>
                          {item.client && (
                            <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
                              {t('workExp.clientLabel')}{' '}
                              <span className="font-medium" style={{ color: 'var(--text-primary)' }}>{item.client}</span>
                            </span>
                          )}
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
