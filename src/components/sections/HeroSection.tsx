'use client';

import { useTranslation } from 'react-i18next';
import { ArrowDown, Github, Linkedin, Download, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import toeiImg from '@/assets/images/toei-img.png';

export default function HeroSection() {
  const { t } = useTranslation();
 
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center pt-14"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      <div className="max-w-6xl mx-auto px-6 w-full py-20">
        <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-12">

          {/* Left: Text content */}
          <div className="flex-1 min-w-0">
            {/* Available badge */}
            <div className="flex items-center gap-2 mb-8" data-aos="fade-down">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs font-medium" style={{ color: 'var(--text-secondary)' }}>
                {t('hero.available')}
              </span>
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight mb-4 leading-tight" style={{ color: 'var(--text-primary)' }} data-aos="fade-up" data-aos-delay={50}>
              {t('hero.name')}
            </h1>

            {/* Title */}
            <div className="flex items-center gap-3 mb-6" data-aos="fade-up" data-aos-delay={120}>
              <span className="text-xl sm:text-2xl font-medium" style={{ color: 'var(--text-secondary)' }}>
                {t('hero.title')}
              </span>
            </div>

            {/* Tagline */}
            <p
              className="text-base sm:text-lg max-w-xl mb-10 leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
              data-aos="fade-up" data-aos-delay={180}
            >
              {t('hero.tagline')}
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 mb-12" data-aos="fade-up" data-aos-delay={240}>
              {[
                { value: '1+', label: t('hero.stats.years') },
                { value: '7+', label: t('hero.stats.projects') },
                { value: '20+', label: t('hero.stats.services') },
              ].map(stat => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-2xl font-semibold text-blue-500">{stat.value}</span>
                  <span className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>{stat.label}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3" data-aos="fade-up" data-aos-delay={300}>
              <a href="#projects" className="btn-primary">
                {t('hero.cta.projects')}
                <ChevronRight size={14} />
              </a>
              <a href="#experience" className="btn-secondary">
                {t('hero.cta.experience')}
              </a>
              <a
                href="/file/resume/Resume-Wichayut-Laorod.pdf"
                download
                className="btn-secondary"
              >
                <Download size={14} />
                {t('hero.cta.resume')}
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4 mt-10" data-aos="fade-up" data-aos-delay={360}>
              <a
                href="https://github.com/Wichayut1503"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm transition-colors hover:text-blue-500"
                style={{ color: 'var(--text-muted)' }}
              >
                <Github size={16} />
                GitHub
              </a>
              <span style={{ color: 'var(--border)' }}>|</span>
              <a
                href="https://linkedin.com/in/wichayut-laorod"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm transition-colors hover:text-blue-500"
                style={{ color: 'var(--text-muted)' }}
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right: Profile photo */}
          <div className="flex justify-center md:justify-end flex-shrink-0" data-aos="fade-left" data-aos-delay={100}>
            <div className="relative w-52 h-64 sm:w-60 sm:h-72 md:w-72 md:h-96 rounded-2xl overflow-hidden">
              <Image
                src={toeiImg}
                alt="Wichayut Laorod"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>

        </div>

        {/* Scroll indicator */}
        <div className="mt-16 hidden md:flex items-center gap-2" style={{ color: 'var(--text-muted)' }}>
          <ArrowDown size={14} className="animate-bounce" />
          <span className="text-xs">{t('hero.scroll')}</span>
        </div>
      </div>
    </section>
  );
}
