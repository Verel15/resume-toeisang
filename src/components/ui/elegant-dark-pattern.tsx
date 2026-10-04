import type React from 'react';
import { cn } from '@/lib/utils';

// Each streak is a vertical gradient revealed through a different horizontal mask, then skewed.
const STREAK_MASKS = [
  'linear-gradient(90deg, rgba(0,0,0,0) 0%, #000 20%, rgba(0,0,0,0) 36%, #000 55%, rgba(0,0,0,0.13) 67%, #000 78%, rgba(0,0,0,0) 97%)',
  'linear-gradient(90deg, rgba(0,0,0,0) 11%, #000 25%, rgba(0,0,0,0.55) 41%, rgba(0,0,0,0.13) 67%, #000 78%, rgba(0,0,0,0) 97%)',
  'linear-gradient(90deg, rgba(0,0,0,0) 9%, #000 20%, rgba(0,0,0,0.55) 28%, rgba(0,0,0,0.424) 40%, #000 48%, rgba(0,0,0,0.267) 54%, rgba(0,0,0,0.13) 78%, #000 88%, rgba(0,0,0,0) 97%)',
  'linear-gradient(90deg, rgba(0,0,0,0) 0%, #000 17%, rgba(0,0,0,0.55) 26%, #000 35%, rgba(0,0,0,0) 47%, rgba(0,0,0,0.13) 69%, #000 79%, rgba(0,0,0,0) 97%)',
  'linear-gradient(90deg, rgba(0,0,0,0) 0%, #000 20%, rgba(0,0,0,0.55) 27%, #000 42%, rgba(0,0,0,0) 48%, rgba(0,0,0,0.13) 67%, #000 74%, #000 82%, rgba(0,0,0,0.47) 88%, rgba(0,0,0,0) 97%)',
];

const GLOW_MASK = 'radial-gradient(125% 100% at 0% 0%, #000 0%, rgba(0,0,0,0.224) 88%, rgba(0,0,0,0) 100%)';

const FADE_MASKS = {
  top: 'linear-gradient(to bottom, transparent 0%, #000 30%)',
  bottom: 'linear-gradient(to bottom, #000 70%, transparent 100%)',
  both: 'linear-gradient(to bottom, transparent 0%, #000 22%, #000 78%, transparent 100%)',
  none: undefined,
} as const;

interface PatternBackgroundProps {
  /** Which edge dissolves into the neighbouring section. */
  fade?: keyof typeof FADE_MASKS;
  /** Side the light comes from. Alternating it between sections keeps a long page from looking tiled. */
  origin?: 'left' | 'right';
  /** Fewer streaks and a dimmer dot grid, for sections that carry a lot of text. */
  subtle?: boolean;
  className?: string;
}

/**
 * Decorative background layer. Place it as the first child of a `relative` section.
 * Colours come from the --pattern-* variables in globals.css, so it follows light/dark mode.
 */
export function PatternBackground({ fade = 'none', origin = 'left', subtle = false, className }: PatternBackgroundProps) {
  const fadeMask = FADE_MASKS[fade];
  const streaks = subtle ? STREAK_MASKS.slice(0, 3) : STREAK_MASKS;

  return (
    <div
      aria-hidden="true"
      className={cn('pointer-events-none absolute inset-0 z-0 overflow-hidden', className)}
      style={fadeMask ? { maskImage: fadeMask, WebkitMaskImage: fadeMask } : undefined}
    >
      {/* Corner glow with skewed streaks */}
      <div
        className="absolute inset-0"
        style={{
          transform: origin === 'right' ? 'scaleX(-1)' : undefined,
          opacity: subtle ? 0.75 : 1,
          background: 'radial-gradient(100% 100% at 0% 0%, var(--pattern-glow) 0%, transparent 100%)',
          maskImage: GLOW_MASK,
          WebkitMaskImage: GLOW_MASK,
        }}
      >
        {streaks.map((mask, i) => (
          <div
            key={i}
            className="absolute inset-0"
            style={{
              opacity: 'var(--pattern-streak-opacity)',
              background: 'linear-gradient(var(--pattern-streak) 0%, transparent 100%)',
              maskImage: mask,
              WebkitMaskImage: mask,
              transform: 'skewX(45deg)',
            }}
          />
        ))}
      </div>

      {/* Dot grid */}
      <div
        className="absolute inset-0"
        style={{
          opacity: subtle ? 'calc(var(--pattern-dot-opacity) * 0.6)' : 'var(--pattern-dot-opacity)',
          backgroundImage: 'radial-gradient(circle at 1px 1px, var(--pattern-dot) 1px, transparent 0)',
          backgroundSize: '20px 20px',
        }}
      />
    </div>
  );
}

interface DarkGradientBgProps extends PatternBackgroundProps {
  children?: React.ReactNode;
}

/** Wrapper form: pattern behind arbitrary content. */
export function DarkGradientBg({ children, className, fade }: DarkGradientBgProps) {
  return (
    <div className={cn('relative w-full overflow-hidden', className)} style={{ backgroundColor: 'var(--bg)' }}>
      <PatternBackground fade={fade} />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
