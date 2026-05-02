'use client';

import { useTranslation } from 'react-i18next';
import { GraduationCap } from 'lucide-react';

export default function EducationSection() {
  const { t } = useTranslation();

  return (
    <section id="education" className="section-padding" style={{ backgroundColor: 'var(--bg)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12" data-aos="fade-up">
          <p className="text-xs font-medium text-blue-500 uppercase tracking-widest mb-3">
            {t('education.eyebrow')}
          </p>
          <h2
            className="text-2xl sm:text-3xl font-semibold tracking-tight"
            style={{ color: 'var(--text-primary)' }}
          >
            {t('education.title')}
          </h2>
        </div>

        <div className="card p-6 max-w-2xl hover:border-blue-500/30 transition-colors duration-200" data-aos="fade-up" data-aos-delay={100}>
          <div className="flex items-start gap-4">
            <div
              className="p-2.5 rounded-lg shrink-0"
              style={{ backgroundColor: 'var(--bg-elevated)', border: '1px solid var(--border)' }}
            >
              <GraduationCap size={18} className="text-blue-500" />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                <h3 className="text-base font-semibold" style={{ color: 'var(--text-primary)' }}>
                  {t('education.degree')}
                </h3>
                <span className="text-xs shrink-0" style={{ color: 'var(--text-muted)' }}>
                  {t('education.period')}
                </span>
              </div>
              <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
                {t('education.university')}
              </p>
              <span
                className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full"
                style={{
                  backgroundColor: 'var(--bg-elevated)',
                  border: '1px solid var(--border)',
                  color: 'var(--text-secondary)',
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                {t('education.gpa')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
