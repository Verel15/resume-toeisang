'use client';

import { useEffect, useRef, useState } from 'react';
import { animate, useInView, useReducedMotion } from 'motion/react';
import { cn } from '@/lib/utils';

interface CountUpProps {
  /** Text such as "20+" or "3.5k"; the digits count up and the rest stays as is. */
  value: string;
  /** Seconds to wait after the element enters view. */
  delay?: number;
  duration?: number;
  className?: string;
}

const PARTS = /^(\D*)(\d+(?:\.\d+)?)(.*)$/;

/** Counts from 0 to the number in `value` once the element scrolls into view. */
export function CountUp({ value, delay = 0, duration = 1.6, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -15% 0px' });
  const reduceMotion = useReducedMotion();

  const match = PARTS.exec(value);
  const [prefix, digits, suffix] = match ? [match[1], match[2], match[3]] : ['', '', ''];
  const target = Number(digits);
  const decimals = digits.includes('.') ? digits.split('.')[1].length : 0;

  // Server markup shows the final value, so the page stays correct without JS.
  const [current, setCurrent] = useState(target);

  useEffect(() => {
    if (!match || reduceMotion) return;
    // Below the fold at this point, so resetting to 0 is never seen.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCurrent(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!match || reduceMotion || !inView) return;
    const controls = animate(0, target, {
      duration,
      delay,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: v => setCurrent(v),
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, reduceMotion, target, duration, delay]);

  if (!match) return <span className={cn('[font-size:inherit]', className)}>{value}</span>;

  return (
    <span ref={ref} className={cn('[font-size:inherit]', className)} aria-label={value}>
      <span aria-hidden="true" className="tabular-nums [font-size:inherit]">
        {prefix}
        {current.toFixed(decimals)}
        {suffix}
      </span>
    </span>
  );
}
