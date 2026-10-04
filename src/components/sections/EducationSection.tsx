'use client';

import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import buuLogo from '@/assets/images/logo-buu.png';
import { Section, SectionHeading } from '@/components/ui/section';
import { SpotlightCard } from '@/components/ui/spotlight-card';

export default function EducationSection() {
  const { t } = useTranslation();

  return (
    <Section id="education" origin="right">
      <SectionHeading eyebrow={t('education.eyebrow')} title={t('education.title')} />

      <SpotlightCard className="max-w-2xl p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <div
              className="w-14 h-14 shrink-0 rounded-lg bg-white flex items-center justify-center overflow-hidden"
              style={{ border: '1px solid var(--border)' }}
            >
              <Image
                src={buuLogo}
                alt={t('education.university')}
                width={56}
                height={56}
                className="w-full h-full object-contain p-1"
              />
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
      </SpotlightCard>
    </Section>
  );
}
