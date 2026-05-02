'use client';

import { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle2, XCircle } from 'lucide-react';

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function ContactSection() {
  const { t } = useTranslation();
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus('sending');
    try {
      await emailjs.sendForm(
        'service_kjtdin9',
        'template_f5qn8wn',
        formRef.current,
        'UDX99LsqENv7MmIxY'
      );
      setStatus('success');
      formRef.current.reset();
    } catch {
      setStatus('error');
    }
  };

  const inputClass =
    'w-full px-3 py-2.5 text-sm rounded-lg outline-none transition-colors duration-150 focus:ring-1 focus:ring-blue-500';

  return (
    <section id="contact" className="section-padding" style={{ backgroundColor: 'var(--bg-surface)' }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12" data-aos="fade-up">
          <p className="text-xs font-medium text-blue-500 uppercase tracking-widest mb-3">
            {t('contact.eyebrow')}
          </p>
          <h2
            className="text-2xl sm:text-3xl font-semibold tracking-tight mb-3"
            style={{ color: 'var(--text-primary)' }}
          >
            {t('contact.headline')}
          </h2>
          <p className="text-sm max-w-lg" style={{ color: 'var(--text-secondary)' }}>
            {t('contact.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left: info */}
          <div className="lg:col-span-2 space-y-6" data-aos="fade-right" data-aos-delay={100}>
            {/* Availability */}
            <div
              className="flex items-start gap-3 p-4 rounded-xl"
              style={{ backgroundColor: 'rgba(59,130,246,0.06)', border: '1px solid rgba(59,130,246,0.15)' }}
            >
              <span className="flex h-2 w-2 mt-1 relative shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <div>
                <p className="text-sm font-medium text-emerald-500">{t('contact.availability.status')}</p>
                <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>
                  {t('contact.availability.note')}
                </p>
              </div>
            </div>

            {/* Contact info */}
            <div className="space-y-3">
              {[
                { icon: Mail, label: t('contact.info.email.label'), value: t('contact.info.email.value') },
                { icon: Phone, label: t('contact.info.phone.label'), value: t('contact.info.phone.value') },
                { icon: MapPin, label: t('contact.info.location.label'), value: t('contact.info.location.value') },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                    style={{ backgroundColor: 'var(--bg-elevated)' }}
                  >
                    <Icon size={14} className="text-blue-500" />
                  </div>
                  <div>
                    <p className="text-xs mb-0.5" style={{ color: 'var(--text-muted)' }}>{label}</p>
                    <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="flex gap-3">
              <a
                href="https://github.com/Wichayut1503"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-xs rounded-lg transition-colors hover:border-blue-500/50"
                style={{
                  backgroundColor: 'var(--bg-elevated)',
                  border: '1px solid var(--border)',
                  color: 'var(--text-secondary)',
                }}
              >
                <Github size={13} />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/wichayut-laorod"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-xs rounded-lg transition-colors hover:border-blue-500/50"
                style={{
                  backgroundColor: 'var(--bg-elevated)',
                  border: '1px solid var(--border)',
                  color: 'var(--text-secondary)',
                }}
              >
                <Linkedin size={13} />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-3 card p-6" data-aos="fade-left" data-aos-delay={100}>
            <h3 className="text-sm font-semibold mb-5" style={{ color: 'var(--text-primary)' }}>
              {t('contact.form.title')}
            </h3>

            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-12 gap-3">
                <CheckCircle2 size={40} className="text-emerald-500" strokeWidth={1.5} />
                <p className="text-sm font-medium text-emerald-500">{t('contact.form.success.title')}</p>
                <p className="text-xs text-center" style={{ color: 'var(--text-muted)' }}>
                  {t('contact.form.success.text')}
                </p>
                <button onClick={() => setStatus('idle')} className="btn-secondary mt-2 text-xs">
                  {t('contact.form.sendAnother')}
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs mb-1.5" style={{ color: 'var(--text-muted)' }}>
                      {t('contact.form.fields.name.label')}
                    </label>
                    <input
                      name="from_name"
                      required
                      placeholder={t('contact.form.fields.name.placeholder')}
                      className={inputClass}
                      style={{
                        backgroundColor: 'var(--bg-elevated)',
                        border: '1px solid var(--border)',
                        color: 'var(--text-primary)',
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-xs mb-1.5" style={{ color: 'var(--text-muted)' }}>
                      {t('contact.form.fields.email.label')}
                    </label>
                    <input
                      name="from_email"
                      type="email"
                      required
                      placeholder={t('contact.form.fields.email.placeholder')}
                      className={inputClass}
                      style={{
                        backgroundColor: 'var(--bg-elevated)',
                        border: '1px solid var(--border)',
                        color: 'var(--text-primary)',
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs mb-1.5" style={{ color: 'var(--text-muted)' }}>
                    {t('contact.form.fields.subject.label')}
                  </label>
                  <input
                    name="subject"
                    required
                    placeholder={t('contact.form.fields.subject.placeholder')}
                    className={inputClass}
                    style={{
                      backgroundColor: 'var(--bg-elevated)',
                      border: '1px solid var(--border)',
                      color: 'var(--text-primary)',
                    }}
                  />
                </div>

                <div>
                  <label className="block text-xs mb-1.5" style={{ color: 'var(--text-muted)' }}>
                    {t('contact.form.fields.message.label')}
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder={t('contact.form.fields.message.placeholder')}
                    className={`${inputClass} resize-none`}
                    style={{
                      backgroundColor: 'var(--bg-elevated)',
                      border: '1px solid var(--border)',
                      color: 'var(--text-primary)',
                    }}
                  />
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-xs text-red-400">
                    <XCircle size={14} />
                    {t('contact.form.error.text')}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-primary w-full justify-center disabled:opacity-50"
                >
                  <Send size={14} />
                  {status === 'sending' ? t('contact.form.button.sending') : t('contact.form.button.send')}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
