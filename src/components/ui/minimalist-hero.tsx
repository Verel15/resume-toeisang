'use client';

import React from 'react';
import Image, { type StaticImageData } from 'next/image';
import { MotionConfig, motion } from 'motion/react';
import type { ComponentType, SVGProps } from 'react';
import { cn } from '@/lib/utils';
import { PatternBackground } from '@/components/ui/elegant-dark-pattern';

type SocialIconComponent = ComponentType<SVGProps<SVGSVGElement> & { size?: number | string }>;

interface MinimalistHeroProps {
  /** Left column: intro copy, stats and calls to action. */
  children: React.ReactNode;
  image: StaticImageData;
  imageAlt: string;
  /** Two stacked lines shown large in the right column. */
  overlayText: {
    part1: string;
    part2: string;
  };
  /** Small line under the large text, e.g. a job title. */
  subtitle?: string;
  socialLinks: { icon: SocialIconComponent; href: string; label: string }[];
  footerText: string;
  className?: string;
}

const SocialIcon = ({ href, icon: Icon, label }: { href: string; icon: SocialIconComponent; label: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="transition-colors hover:text-blue-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
    style={{ color: 'var(--text-muted)' }}
  >
    <Icon size={20} />
  </a>
);

export const MinimalistHero = ({
  children,
  image,
  imageAlt,
  overlayText,
  subtitle,
  socialLinks,
  footerText,
  className,
}: MinimalistHeroProps) => {
  return (
    <MotionConfig reducedMotion="user">
      <section
        id="home"
        className={cn(
          'relative flex min-h-screen w-full flex-col items-center justify-between overflow-hidden bg-background px-6 pb-8 pt-24',
          className
        )}
      >
        <PatternBackground fade="bottom" />

        {/* Main content area */}
        <div className="relative grid w-full max-w-6xl grow grid-cols-1 items-center gap-10 md:grid-cols-3 md:gap-6">
          {/* Name: first on mobile, right column on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="z-20 order-1 text-center md:order-3 md:text-left"
          >
            <h1
              className="text-5xl font-semibold leading-[1.15] tracking-tight sm:text-6xl lg:text-7xl"
              style={{ color: 'var(--text-primary)' }}
            >
              {overlayText.part1}
              <br />
              {overlayText.part2}
            </h1>
            {subtitle && (
              <p className="mt-4 text-xl font-medium sm:text-2xl" style={{ color: 'var(--text-secondary)' }}>
                {subtitle}
              </p>
            )}
          </motion.div>

          {/* Portrait over accent circle */}
          <div className="relative order-2 flex items-end justify-center md:order-2">
            <div className="relative aspect-[1/1.1] w-[min(78vw,320px)] md:w-full md:max-w-[400px]">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                className="absolute inset-x-0 bottom-0 aspect-square rounded-full"
                style={{
                  backgroundColor: 'color-mix(in srgb, var(--accent) 20%, transparent)',
                  border: '1px solid color-mix(in srgb, var(--accent) 35%, transparent)',
                }}
              />
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                className="absolute inset-0"
              >
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  priority
                  sizes="(min-width: 768px) 400px, 320px"
                  className="origin-bottom scale-110 object-contain object-bottom"
                />
              </motion.div>
            </div>
          </div>

          {/* Intro copy: last on mobile, left column on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="z-20 order-3 text-center md:order-1 md:text-left"
          >
            {children}
          </motion.div>
        </div>

        {/* Footer */}
        <footer className="z-30 mt-12 flex w-full max-w-6xl items-center justify-between">
          <div className="flex items-center space-x-4">
            {socialLinks.map(link => (
              <SocialIcon key={link.href} {...link} />
            ))}
          </div>
          <div className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
            {footerText}
          </div>
        </footer>
      </section>
    </MotionConfig>
  );
};
