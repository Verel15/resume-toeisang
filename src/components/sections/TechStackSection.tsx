'use client';

import { useTranslation } from 'react-i18next';

interface TechGroup {
  category: string;
  icon: string;
  items: string[];
}

export default function TechStackSection() {
  const { t } = useTranslation();

  const rawGroups = t('techStack.groups', { returnObjects: true });
  const groups: TechGroup[] = Array.isArray(rawGroups) ? rawGroups : [];

  return (
    <section id="techstack" className="section-padding" style={{ backgroundColor: 'var(--bg-surface)' }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12" data-aos="fade-up">
          <p className="text-xs font-medium text-blue-500 uppercase tracking-widest mb-3">
            {t('techStack.eyebrow')}
          </p>
          <h2
            className="text-2xl sm:text-3xl font-semibold tracking-tight mb-3"
            style={{ color: 'var(--text-primary)' }}
          >
            {t('techStack.title')}
          </h2>
          <p className="text-sm max-w-lg" style={{ color: 'var(--text-secondary)' }}>
            {t('techStack.subtitle')}
          </p>
        </div>

        {/* Groups */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {groups.map((group, gi) => (
            <div key={gi} className="card p-5" data-aos="fade-up" data-aos-delay={gi * 80}>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-sm font-mono text-blue-500">{group.icon}</span>
                <h3 className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                  {group.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item, ti) => (
                  <span key={ti} className="badge">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
