'use client';

import { useTranslation } from 'react-i18next';
import { Monitor, Zap, Server, HardDrive, Cloud } from 'lucide-react';
import { Section, SectionHeading } from '@/components/ui/section';
import { SpotlightCard } from '@/components/ui/spotlight-card';

const FLOW_ICONS = [Monitor, Zap, Server, HardDrive, Cloud];

export default function ArchitectureSection() {
  const { t } = useTranslation();

  const rawNodes = t('arch.nodes', { returnObjects: true });
  const nodes: { label: string; sublabel: string; tech: string }[] = Array.isArray(rawNodes) ? rawNodes : [];

  const rawPrinciples = t('arch.principles', { returnObjects: true });
  const principles: { title: string; desc: string }[] = Array.isArray(rawPrinciples) ? rawPrinciples : [];

  return (
    <Section id="architecture" origin="right">
      <SectionHeading eyebrow={t('arch.eyebrow')} title={t('arch.title')} subtitle={t('arch.subtitle')} />

      {/* Request flow: dashes travel from the client towards the cloud */}
      <ol className="mb-12 flex flex-col items-center sm:flex-row sm:flex-wrap sm:items-stretch sm:justify-center sm:gap-y-4">
        {nodes.map((node, i) => {
          const Icon = FLOW_ICONS[i] ?? Server;
          return (
            <li key={i} className="flex w-full max-w-[16rem] flex-col items-center sm:w-auto sm:max-w-none sm:flex-row">
              <SpotlightCard className="flex h-full w-full flex-col items-center p-4 text-center sm:w-36">
                <div
                  className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg"
                  style={{
                    backgroundColor: 'color-mix(in srgb, var(--accent) 14%, transparent)',
                    boxShadow: '0 0 18px color-mix(in srgb, var(--accent) 28%, transparent)',
                  }}
                >
                  <Icon size={18} className="text-blue-500" strokeWidth={1.5} />
                </div>
                <span className="mb-0.5 text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                  {node.label}
                </span>
                <span className="mb-1.5 text-xs leading-tight" style={{ color: 'var(--text-muted)' }}>
                  {node.sublabel}
                </span>
                <span className="mt-auto text-xs font-medium text-blue-500">{node.tech}</span>
              </SpotlightCard>

              {i < nodes.length - 1 && (
                <>
                  {/* Vertical on phones, horizontal from sm up */}
                  <span
                    aria-hidden="true"
                    className="flow-line my-1 h-8 w-px sm:hidden"
                    style={{
                      backgroundImage: 'linear-gradient(180deg, var(--accent) 50%, transparent 50%)',
                      backgroundSize: '1px 12px',
                      animation: 'flow-y 0.8s linear infinite',
                    }}
                  />
                  <span
                    aria-hidden="true"
                    className="flow-line mx-1 hidden h-px w-8 sm:block lg:w-12"
                    style={{
                      backgroundImage: 'linear-gradient(90deg, var(--accent) 50%, transparent 50%)',
                      backgroundSize: '12px 1px',
                      animation: 'flow 0.8s linear infinite',
                    }}
                  />
                </>
              )}
            </li>
          );
        })}
      </ol>

      {/* Principles */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {principles.map((p, i) => (
          <SpotlightCard key={i} className="p-6">
            <h3 className="mb-2 text-base font-semibold" style={{ color: 'var(--text-primary)' }}>
              {p.title}
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {p.desc}
            </p>
          </SpotlightCard>
        ))}
      </div>
    </Section>
  );
}
