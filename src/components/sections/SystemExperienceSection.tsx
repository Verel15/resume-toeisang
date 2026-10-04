'use client';

import { useTranslation } from 'react-i18next';
import { CheckCircle2 } from 'lucide-react';
import { Section, SectionHeading } from '@/components/ui/section';
import { CountUp } from '@/components/ui/count-up';

export default function SystemExperienceSection() {
  const { t } = useTranslation();

  const rawHighlights = t('sysExp.highlights', { returnObjects: true });
  const highlights: { label: string; value: string }[] = Array.isArray(rawHighlights) ? rawHighlights : [];

  const rawBullets = t('sysExp.bullets', { returnObjects: true });
  const bullets: string[] = Array.isArray(rawBullets) ? rawBullets : [];

  return (
    <Section id="system" origin="left">
      <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-2">
        {/* Left: text */}
        <div>
          <SectionHeading
            className="mb-8"
            eyebrow={t('sysExp.eyebrow')}
            title={t('sysExp.title')}
            subtitle={t('sysExp.desc')}
          />

          <ul className="space-y-3">
            {bullets.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-blue-500" strokeWidth={2} />
                <span className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: the numbers carry the section */}
        <dl className="grid grid-cols-2 gap-x-6 gap-y-10 lg:pt-24">
          {highlights.map((h, i) => (
            <div key={i} className="flex flex-col-reverse border-t pt-5" style={{ borderColor: 'var(--border)' }}>
              <dt className="mt-3 text-sm" style={{ color: 'var(--text-secondary)' }}>
                {h.label}
              </dt>
              <dd className="bg-linear-to-br from-blue-400 to-blue-600 bg-clip-text text-6xl font-semibold leading-none tracking-tight text-transparent sm:text-7xl">
                <CountUp value={h.value} delay={i * 0.12} />
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
