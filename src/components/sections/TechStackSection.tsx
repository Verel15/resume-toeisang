'use client';

import { useTranslation } from 'react-i18next';
import { Section, SectionHeading } from '@/components/ui/section';
import { CategoryIcon, TechIcon } from '@/components/ui/tech-icons';

interface TechGroup {
  category: string;
  icon: string;
  items: string[];
}

export default function TechStackSection() {
  const { t } = useTranslation();

  const rawGroups = t('techStack.groups', { returnObjects: true });
  const groups: TechGroup[] = Array.isArray(rawGroups) ? rawGroups : [];

  // The marquee is ornamental: soft skills stay in the grouped list only.
  const marqueeItems = groups.filter(g => g.icon !== '~~').flatMap(g => g.items);

  return (
    <Section id="techstack" origin="right">
      <SectionHeading
        eyebrow={t('techStack.eyebrow')}
        title={t('techStack.title')}
        subtitle={t('techStack.subtitle')}
      />

      {/* Slow strip of every tool; pauses on hover, stops for reduced motion */}
      <div
        aria-hidden="true"
        className="group relative -mx-6 mb-10 overflow-hidden py-2"
        style={{
          maskImage: 'linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent)',
        }}
      >
        <div
          className="marquee-track flex w-max gap-3 group-hover:[animation-play-state:paused]"
          style={{ animation: 'marquee 45s linear infinite' }}
        >
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-2 whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium"
              style={{
                backgroundColor: 'color-mix(in srgb, var(--bg-surface) 72%, transparent)',
                border: '1px solid var(--border)',
                color: 'var(--text-secondary)',
              }}
            >
              <TechIcon name={item} />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Grouped list */}
      <div className="card divide-y overflow-hidden" style={{ borderColor: 'var(--border)' }}>
        {groups.map((group, gi) => (
          <div
            key={gi}
            className="grid grid-cols-1 gap-3 p-5 sm:grid-cols-[13rem_1fr] sm:items-center sm:gap-6"
            style={{ borderColor: 'var(--border)' }}
          >
            <div className="flex items-center gap-3">
              <span
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-blue-500"
                style={{ backgroundColor: 'color-mix(in srgb, var(--accent) 14%, transparent)' }}
              >
                <CategoryIcon glyph={group.icon} />
              </span>
              <h3 className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                {group.category}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item, ti) => (
                <span key={ti} className="badge inline-flex items-center gap-1.5">
                  <TechIcon name={item} size={14} />
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
