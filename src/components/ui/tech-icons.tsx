import type { ComponentType } from 'react';
import {
  siJavascript,
  siTypescript,
  siReact,
  siNextdotjs,
  siAngular,
  siRedux,
  siTailwindcss,
  siNodedotjs,
  siNestjs,
  siGo,
  siPostgresql,
  siMongodb,
  siMysql,
  siDocker,
  siKubernetes,
  siArgo,
  siGit,
} from 'simple-icons';
import { Cloud, Code, Container, Database, Monitor, Server, Users, type LucideProps } from 'lucide-react';

interface BrandIcon {
  path: string;
  hex: string;
}

// Matched against the lower-cased item text, so "JavaScript (ES6+)" and "React.js" both resolve.
const BRAND_ICONS: [RegExp, BrandIcon][] = [
  [/javascript/, siJavascript],
  [/typescript/, siTypescript],
  [/react/, siReact],
  [/next/, siNextdotjs],
  [/angular/, siAngular],
  [/redux/, siRedux],
  [/tailwind/, siTailwindcss],
  [/node/, siNodedotjs],
  [/nest/, siNestjs],
  [/golang|^go$/, siGo],
  [/postgres/, siPostgresql],
  [/mongo/, siMongodb],
  [/mysql/, siMysql],
  [/docker/, siDocker],
  [/kubernetes/, siKubernetes],
  [/argo/, siArgo],
  [/^git$/, siGit],
];

// Items with no brand mark in simple-icons (AWS was removed from it) or that are not a brand.
const FALLBACK_ICONS: [RegExp, ComponentType<LucideProps>][] = [
  [/aws/, Cloud],
  [/sql/, Database],
];

/** Near-black brand colours disappear on the dark theme, so they follow the text colour instead. */
function isTooDark(hex: string) {
  const [r, g, b] = [0, 2, 4].map(i => parseInt(hex.slice(i, i + 2), 16));
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255 < 0.2;
}

export function TechIcon({ name, size = 16 }: { name: string; size?: number }) {
  const key = name.toLowerCase();
  const brand = BRAND_ICONS.find(([re]) => re.test(key))?.[1];

  if (brand) {
    return (
      <svg
        aria-hidden="true"
        role="img"
        viewBox="0 0 24 24"
        width={size}
        height={size}
        className="shrink-0"
        fill={isTooDark(brand.hex) ? 'currentColor' : `#${brand.hex}`}
      >
        <path d={brand.path} />
      </svg>
    );
  }

  const Fallback = FALLBACK_ICONS.find(([re]) => re.test(key))?.[1];
  if (Fallback) return <Fallback aria-hidden="true" size={size} className="shrink-0" strokeWidth={1.75} />;

  return null;
}

// Keyed by the glyph stored in translation.json, which is the same in every language.
const CATEGORY_ICONS: Record<string, ComponentType<LucideProps>> = {
  '</>': Code,
  '[ ]': Monitor,
  '{ }': Server,
  DB: Database,
  '//': Container,
  '~~': Users,
};

export function CategoryIcon({ glyph, size = 18 }: { glyph: string; size?: number }) {
  const Icon = CATEGORY_ICONS[glyph] ?? Code;
  return <Icon aria-hidden="true" size={size} strokeWidth={1.5} />;
}
