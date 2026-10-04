'use client';

import { useTranslation } from 'react-i18next';
import { Download, ChevronRight, Briefcase } from 'lucide-react';
import { Github, Linkedin } from '@/components/ui/brand-icons';
import toeiImg from '@/assets/images/toei-img.png';
import { MinimalistHero } from '@/components/ui/minimalist-hero';

const SOCIAL_LINKS = [
  { icon: Github, href: 'https://github.com/Verel15', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/wichayut-laorod-86aa8131a/', label: 'LinkedIn' },
];

export default function HeroSection() {
  const { t } = useTranslation();

  const [firstName, ...rest] = t('hero.name').split(' ');

  return (
    <MinimalistHero
      image={toeiImg}
      imageAlt="Wichayut Laorod"
      overlayText={{ part1: firstName, part2: rest.join(' ') }}
      subtitle={t('hero.title')}
      badge={
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span className="text-xs font-medium" style={{ color: 'var(--text-secondary)' }}>
            {t('hero.available')}
          </span>
        </div>
      }
      socialLinks={SOCIAL_LINKS}
      footerText={t('contact.info.location.value')}
    >
      <p
        className="mx-auto mb-8 max-w-sm text-sm leading-relaxed md:mx-0"
        style={{ color: 'var(--text-secondary)' }}
      >
        {t('hero.tagline')}
      </p>

      <p
        className="mx-auto mb-8 flex max-w-sm items-start justify-center gap-2.5 text-sm md:mx-0 md:justify-start"
        style={{ color: 'var(--text-primary)' }}
      >
        <Briefcase size={16} className="mt-0.5 shrink-0 text-blue-500" aria-hidden="true" />
        <span className="text-center md:text-left">{t('hero.current')}</span>
      </p>

      <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
        <a href="#projects" className="btn-primary">
          {t('hero.cta.projects')}
          <ChevronRight size={14} />
        </a>
        <a
          href="/file/resume/Wichayut_Laorod_FullStack_Developer_Resume_2026.pdf"
          download
          className="btn-secondary"
        >
          <Download size={14} />
          {t('hero.cta.resume')}
        </a>
      </div>
    </MinimalistHero>
  );
}
