import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/context';
import { Logo } from '@/components/common/Logo';
import { ContactForm } from './ContactForm';
import { ContactButton } from './ContactButton';

const CONTACT_LINKS = [
  { label: 'Email', href: 'mailto:gabrielhamasaki82@outlook.com' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/gabriel-hamasaki/' },
  { label: 'GitHub', href: 'https://github.com/gabehamasaki' },
];

export function ContactSection() {
  const { t } = useTranslation();
  const { theme } = useTheme();

  return (
    <section id="contact" className={`min-h-screen flex items-center justify-center px-8 py-20 ${theme.border} border-t`}>
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-8 mb-16">
            <h2 className="text-4xl md:text-5xl font-serif tracking-tight">{t('contact.title')}</h2>
            <div className={`flex-1 h-px ${theme.lineColor}`} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Left Side */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className={`${theme.textSecondary} text-lg leading-relaxed`}>
                {t('contact.subtitle')}
              </p>

              <div className="flex flex-wrap gap-4">
                {CONTACT_LINKS.map((link, index) => (
                  <ContactButton
                    key={link.label}
                    label={link.label}
                    href={link.href}
                    index={index}
                  />
                ))}
              </div>

              <div className="pt-8">
                <Logo className="w-48 h-24 opacity-50" />
              </div>
            </motion.div>

            {/* Right Side - Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
