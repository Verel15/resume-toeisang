'use client';

import type React from 'react';
import { cn } from '@/lib/utils';

type SpotlightCardProps = React.HTMLAttributes<HTMLDivElement>;

/** Frosted card whose hover light follows the pointer (see .spotlight-card in globals.css). */
export function SpotlightCard({ className, onPointerMove, children, ...props }: SpotlightCardProps) {
  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`);
    onPointerMove?.(e);
  };

  return (
    <div className={cn('card spotlight-card', className)} onPointerMove={handlePointerMove} {...props}>
      {children}
    </div>
  );
}
