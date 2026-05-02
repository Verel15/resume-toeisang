'use client';

import { useTranslation } from 'react-i18next';
import { Layers, Server, Network, Database, Cloud } from 'lucide-react';

const ICONS = [Layers, Server, Network, Database, Cloud];

const ACCENT_COLORS = [
  'text-blue-400',
  'text-violet-400',
  'text-emerald-400',
  'text-amber-400',
  'text-sky-400',
];

export default function ExpertiseSection() {
  const { t } = useTranslation();

  const raw = t('expertise.items', { returnObjects: true });
  const items: { title: string; desc: string; tags: string[] }[] = Array.isArray(raw) ? raw : [];

  return (
    <section id="expertise" className="section-padding" style={{ backgroundColor: 'var(--bg-surface)' }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12" data-aos="fade-up">
          <p className="text-xs font-medium text-blue-500 uppercase tracking-widest mb-3">
            {t('expertise.eyebrow')}
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-3" style={{ color: 'var(--text-primary)' }}>
            {t('expertise.title')}
          </h2>
          <p className="text-sm max-w-lg" style={{ color: 'var(--text-secondary)' }}>
            {t('expertise.subtitle')}
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item, i) => {
            const Icon = ICONS[i] ?? Layers;
            return (
              <div
                key={i}
                className="card p-6 hover:border-blue-500/30 transition-colors duration-200"
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                <div className={`mb-4 ${ACCENT_COLORS[i]}`}>
                  <Icon size={20} strokeWidth={1.5} />
                </div>
                <h3 className="text-sm font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                  {item.title}
                </h3>
                <p className="text-xs leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                  {item.desc}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map(tag => (
                    <span key={tag} className="badge text-xs">{tag}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
