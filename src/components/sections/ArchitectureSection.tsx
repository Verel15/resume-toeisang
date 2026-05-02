'use client';

import { useTranslation } from 'react-i18next';
import { Monitor, Zap, Server, HardDrive, Cloud, ArrowRight } from 'lucide-react';

const FLOW_ICONS = [Monitor, Zap, Server, HardDrive, Cloud];

export default function ArchitectureSection() {
  const { t } = useTranslation();

  const rawNodes = t('arch.nodes', { returnObjects: true });
  const nodes: { label: string; sublabel: string; tech: string }[] = Array.isArray(rawNodes) ? rawNodes : [];

  return (
    <section id="architecture" className="section-padding" style={{ backgroundColor: 'var(--bg)' }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12" data-aos="fade-up">
          <p className="text-xs font-medium text-blue-500 uppercase tracking-widest mb-3">
            {t('arch.eyebrow')}
          </p>
          <h2
            className="text-2xl sm:text-3xl font-semibold tracking-tight mb-3"
            style={{ color: 'var(--text-primary)' }}
          >
            {t('arch.title')}
          </h2>
          <p className="text-sm max-w-lg" style={{ color: 'var(--text-secondary)' }}>
            {t('arch.subtitle')}
          </p>
        </div>

        {/* Flow diagram */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12" data-aos="fade-up" data-aos-delay={100}>
          {nodes.map((node, i) => {
            const Icon = FLOW_ICONS[i] ?? Server;
            return (
              <div key={i} className="flex items-center gap-2 sm:gap-3">
                {/* Node card */}
                <div className="card p-4 flex flex-col items-center text-center w-28 sm:w-32 hover:border-blue-500/30 transition-colors duration-200">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center mb-2"
                    style={{ backgroundColor: 'var(--bg-elevated)' }}
                  >
                    <Icon size={16} className="text-blue-500" strokeWidth={1.5} />
                  </div>
                  <span className="text-xs font-semibold mb-0.5" style={{ color: 'var(--text-primary)' }}>
                    {node.label}
                  </span>
                  <span className="text-[10px] leading-tight mb-1" style={{ color: 'var(--text-muted)' }}>
                    {node.sublabel}
                  </span>
                  <span className="text-[10px] text-blue-400 font-medium">{node.tech}</span>
                </div>

                {/* Arrow (not after last) */}
                {i < nodes.length - 1 && (
                  <ArrowRight size={14} style={{ color: 'var(--text-muted)' }} />
                )}
              </div>
            );
          })}
        </div>

        {/* Principles */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {(Array.isArray(t('arch.principles', { returnObjects: true }))
          ? (t('arch.principles', { returnObjects: true }) as { title: string; desc: string }[])
          : []
        ).map(
            (p, i) => (
              <div
                key={i}
                className="card p-5 hover:border-blue-500/30 transition-colors duration-200"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <h4 className="text-sm font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                  {p.title}
                </h4>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {p.desc}
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
