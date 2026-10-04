'use client';

import { useTranslation } from 'react-i18next';
import { Layers, Server, Network, Database, Cloud } from 'lucide-react';
import { Section, SectionHeading } from '@/components/ui/section';
import { SpotlightCard } from '@/components/ui/spotlight-card';
import { cn } from '@/lib/utils';

const ICONS = [Layers, Server, Network, Database, Cloud];

const ACCENT_COLORS = [
  'text-blue-400',
  'text-violet-400',
  'text-emerald-400',
  'text-amber-400',
  'text-sky-400',
];

// Bento placement on the 3-column desktop grid. The first card is the featured one.
const BENTO = [
  'sm:col-span-2 lg:row-span-2',
  '',
  '',
  '',
  'sm:col-span-2',
];

export default function ExpertiseSection() {
  const { t } = useTranslation();

  const raw = t('expertise.items', { returnObjects: true });
  const items: { title: string; desc: string; tags: string[] }[] = Array.isArray(raw) ? raw : [];

  return (
    <Section id="expertise" origin="right">
      <SectionHeading
        eyebrow={t('expertise.eyebrow')}
        title={t('expertise.title')}
        subtitle={t('expertise.subtitle')}
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => {
          const Icon = ICONS[i] ?? Layers;
          const featured = i === 0;
          return (
            <SpotlightCard
              key={i}
              className={cn('flex flex-col overflow-hidden p-6', featured && 'lg:p-8', BENTO[i])}
            >
              {featured && (
                <Icon
                  aria-hidden="true"
                  strokeWidth={1}
                  className={cn('pointer-events-none absolute -bottom-8 -right-6 h-56 w-56 opacity-[0.07]', ACCENT_COLORS[i])}
                />
              )}
              <div className={cn('mb-4', ACCENT_COLORS[i])}>
                <Icon size={featured ? 28 : 20} strokeWidth={1.5} />
              </div>
              <h3
                className={cn('mb-2 font-semibold', featured ? 'text-2xl' : 'text-base')}
                style={{ color: 'var(--text-primary)' }}
              >
                {item.title}
              </h3>
              <p
                className={cn('mb-5 leading-relaxed', featured ? 'max-w-md text-base' : 'text-sm')}
                style={{ color: 'var(--text-secondary)' }}
              >
                {item.desc}
              </p>
              <div className="mt-auto flex flex-wrap gap-1.5">
                {item.tags.map(tag => (
                  <span key={tag} className="badge text-xs">{tag}</span>
                ))}
              </div>
            </SpotlightCard>
          );
        })}
      </div>
    </Section>
  );
}
