'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowUpRight, GitBranch } from 'lucide-react';

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
    <section id="projects" className="section-padding" style={{ backgroundColor: 'var(--bg-surface)' }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-10" data-aos="fade-up">
          <p className="text-xs font-medium text-blue-500 uppercase tracking-widest mb-3">
            {t('projects.eyebrow')}
          </p>
          <h2
            className="text-2xl sm:text-3xl font-semibold tracking-tight mb-3"
            style={{ color: 'var(--text-primary)' }}
          >
            {t('projects.title')}
          </h2>
          <p className="text-sm max-w-lg" style={{ color: 'var(--text-secondary)' }}>
            {t('projects.subtitle')}
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-8" data-aos="fade-up" data-aos-delay={100}>
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5" data-aos="fade-up" data-aos-delay={150}>
          {filtered.map((proj, i) => (
            <div
              key={i}
              className="card p-6 flex flex-col hover:border-blue-500/30 transition-colors duration-200 cursor-pointer"
              onClick={() => setActive(active === i ? null : i)}
            >
              {/* Top */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <GitBranch size={14} className="text-blue-500 shrink-0" />
                  <h3 className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
