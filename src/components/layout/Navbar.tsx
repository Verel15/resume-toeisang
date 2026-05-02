'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/components/providers/ThemeProvider';
import { Sun, Moon, Menu, X, Globe } from 'lucide-react';

const NAV_LINKS = [
  { labelKey: 'nav.home', href: '#home' },
  { labelKey: 'nav.expertise', href: '#expertise' },
  { labelKey: 'nav.experience', href: '#experience' },
  { labelKey: 'nav.projects', href: '#projects' },
  { labelKey: 'nav.contact', href: '#contact' },
];

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = ['home', 'expertise', 'experience', 'projects', 'architecture', 'contact'];
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id); });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'th' : 'en');
  };

  const navBg = scrolled
    ? 'backdrop-blur-md border-b'
    : 'border-b border-transparent';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${navBg}`}
      style={{
        backgroundColor: scrolled ? 'color-mix(in srgb, var(--bg) 85%, transparent)' : 'transparent',
        borderColor: scrolled ? 'var(--border)' : 'transparent',
      }}
    >
      <nav className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="text-sm font-semibold tracking-tight"
          style={{ color: 'var(--text-primary)' }}
        >
          WL<span className="text-blue-500">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(link => {
            const id = link.href.replace('#', '');
            const isActive = activeSection === id;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`px-3 py-1.5 text-sm rounded-md transition-colors duration-150 ${
                    isActive
                      ? 'text-blue-500 font-medium'
                      : 'hover:opacity-70'
                  }`}
                  style={{ color: isActive ? undefined : 'var(--text-secondary)' }}
                >
                  {t(link.labelKey)}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Controls */}
        <div className="flex items-center gap-2">
          {/* Language toggle */}
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-colors duration-150 hover:opacity-70"
            style={{
              backgroundColor: 'var(--bg-elevated)',
              border: '1px solid var(--border)',
              color: 'var(--text-secondary)',
            }}
            aria-label="Toggle language"
          >
            <Globe size={13} />
            {i18n.language === 'en' ? 'TH' : 'EN'}
          </button>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded-md transition-colors duration-150 hover:opacity-70"
            style={{
              backgroundColor: 'var(--bg-elevated)',
              border: '1px solid var(--border)',
              color: 'var(--text-secondary)',
            }}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
          </button>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-1.5 rounded-md"
            style={{ color: 'var(--text-secondary)' }}
            onClick={() => setMobileOpen(v => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden border-b"
          style={{
            backgroundColor: 'var(--bg)',
            borderColor: 'var(--border)',
          }}
        >
          <ul className="px-6 py-4 flex flex-col gap-1">
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2 text-sm rounded-md hover:opacity-70 transition-colors"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {t(link.labelKey)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
