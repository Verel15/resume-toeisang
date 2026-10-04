import type React from 'react';
import { cn } from '@/lib/utils';
import { PatternBackground } from '@/components/ui/elegant-dark-pattern';

interface SectionProps {
  id: string;
  /** Which side the background light comes from. */
  origin?: 'left' | 'right';
  children: React.ReactNode;
  className?: string;
}

/** Page section with the shared pattern background and content container. */
export function Section({ id, origin = 'left', children, className }: SectionProps) {
  return (
    <section id={id} className={cn('section-padding relative overflow-hidden', className)}>
      <PatternBackground fade="both" origin={origin} subtle />
      <div className="relative z-10 mx-auto max-w-6xl px-6">{children}</div>
    </section>
  );
}

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeading({ eyebrow, title, subtitle, className }: SectionHeadingProps) {
  return (
    <div className={cn('mb-12 max-w-2xl', className)}>
      <p className="mb-3 flex items-center gap-2.5 text-sm font-medium text-blue-500">
        <span aria-hidden="true" className="h-px w-8 bg-blue-500/60" />
        {eyebrow}
      </p>
      <h2
        className="mb-4 text-4xl font-semibold leading-[1.15] tracking-tight sm:text-5xl"
        style={{ color: 'var(--text-primary)' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-lg text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
