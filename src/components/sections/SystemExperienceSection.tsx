'use client';

import { useTranslation } from 'react-i18next';
import { CheckCircle2 } from 'lucide-react';

export default function SystemExperienceSection() {
  const { t } = useTranslation();

  const rawHighlights = t('sysExp.highlights', { returnObjects: true });
  const highlights: { label: string; value: string }[] = Array.isArray(rawHighlights) ? rawHighlights : [];

  const rawBullets = t('sysExp.bullets', { returnObjects: true });
  const bullets: string[] = Array.isArray(rawBullets) ? rawBullets : [];

  return (
    <section id="system" className="section-padding" style={{ backgroundColor: 'var(--bg)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: text */}
          <div data-aos="fade-right">
            <p className="text-xs font-medium text-blue-500 uppercase tracking-widest mb-3">
              {t('sysExp.eyebrow')}
            </p>
            <h2
              className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              {t('sysExp.title')}
            </h2>
            <p className="text-sm leading-relaxed mb-8" style={{ color: 'var(--text-secondary)' }}>
              {t('sysExp.desc')}
            </p>

            {/* Bullet list */}
            <ul className="space-y-3">
              {bullets.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2
                    size={15}
                    className="text-blue-500 mt-0.5 shrink-0"
                    strokeWidth={2}
                  />
                  <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: highlights */}
          <div className="grid grid-cols-2 gap-4" data-aos="fade-left" data-aos-delay={100}>
            {highlights.map((h, i) => (
              <div
                key={i}
                className="card p-5 hover:border-blue-500/30 transition-colors duration-200"
              >
                <div className="text-2xl font-semibold text-blue-500 mb-1">{h.value}</div>
                <div className="text-xs" style={{ color: 'var(--text-muted)' }}>{h.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
