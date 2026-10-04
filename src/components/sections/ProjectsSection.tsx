'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowUpRight, GitBranch } from 'lucide-react';
import { Section, SectionHeading } from '@/components/ui/section';
import { SpotlightCard } from '@/components/ui/spotlight-card';
import { cn } from '@/lib/utils';

interface ProjectItem {
  name: string;
  problem: string;
  solution: string;
  architecture: string;
  features: string[];
  stack: string[];
  category: string;
}

export default function ProjectsSection() {
  const { t } = useTranslation();
  const [active, setActive] = useState<number | null>(null);

  const rawItems = t('projects.items', { returnObjects: true });
  const items: ProjectItem[] = Array.isArray(rawItems) ? rawItems : [];
  const categories: string[] = ['All', ...Array.from(new Set(items.map(p => p.category)))];
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All' ? items : items.filter(p => p.category === filter);

  return (
    <Section id="projects" origin="left">
      <SectionHeading
        className="mb-10"
        eyebrow={t('projects.eyebrow')}
        title={t('projects.title')}
        subtitle={t('projects.subtitle')}
      />

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className="text-xs px-3 py-1.5 rounded-md transition-colors duration-150"
              style={
                filter === cat
                  ? { backgroundColor: '#3b82f6', color: '#fff', border: '1px solid #3b82f6' }
                  : {
                      backgroundColor: 'var(--bg-elevated)',
                      border: '1px solid var(--border)',
                      color: 'var(--text-secondary)',
                    }
              }
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filtered.map((proj, i) => (
            <SpotlightCard
              key={i}
              className={cn(
                'flex cursor-pointer flex-col p-6',
                i === 0 && filtered.length >= 3 && 'md:col-span-2 md:p-8'
              )}
              onClick={() => setActive(active === i ? null : i)}
            >
              {/* Top */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <GitBranch size={14} className="text-blue-500 shrink-0" />
                  <h3
                    className={cn('font-semibold', i === 0 && filtered.length >= 3 ? 'text-lg' : 'text-sm')}
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {proj.name}
                  </h3>
                </div>
                <span
                  className="text-xs px-2 py-0.5 rounded-full ml-2 shrink-0"
                  style={{
                    backgroundColor: 'var(--bg-elevated)',
                    border: '1px solid var(--border)',
                    color: 'var(--text-muted)',
                  }}
                >
                  {proj.category}
                </span>
              </div>

              {/* Problem */}
              <div className="mb-2">
                <span className="text-xs font-medium text-blue-500 mr-1.5">{t('projects.labels.problem')}</span>
                <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>{proj.problem}</span>
              </div>

              {/* Solution */}
              <div className="mb-4">
                <span className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>
                  {t('projects.labels.solution')}&nbsp;
                </span>
                <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>{proj.solution}</span>
              </div>

              {/* Architecture badge */}
              <div
                className="text-xs px-3 py-1.5 rounded-md mb-4 flex items-center gap-2"
                style={{ backgroundColor: 'var(--bg-elevated)', color: 'var(--text-secondary)', border: '1px solid var(--border)' }}
              >
                <span className="font-medium text-xs" style={{ color: 'var(--text-muted)' }}>
                  {t('projects.labels.arch')}:
                </span>
                {proj.architecture}
              </div>

              {/* Expandable: features */}
              {active === i && (
                <div className="mb-4">
                  <p className="text-xs font-medium mb-2" style={{ color: 'var(--text-muted)' }}>
                    {t('projects.labels.features')}
                  </p>
                  <ul className="space-y-1.5">
                    {proj.features.map((f, fi) => (
                      <li key={fi} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-blue-500 shrink-0" />
                        <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Stack */}
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {proj.stack.map(t => (
                  <span key={t} className="badge">{t}</span>
                ))}
              </div>

              {/* Toggle hint */}
              <button
                className="mt-4 flex items-center gap-1 text-xs self-start transition-colors hover:text-blue-500"
                style={{ color: 'var(--text-muted)' }}
              >
                <ArrowUpRight size={12} />
                {active === i ? t('projects.collapse') : t('projects.expand')}
              </button>
            </SpotlightCard>
          ))}
        </div>
    </Section>
  );
}
