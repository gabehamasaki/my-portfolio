import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/context';
import { LogoCompact } from '@/components/common/Logo';

export function Footer() {
  const { t } = useTranslation();
  const { theme, isDark } = useTheme();

  return (
    <footer className={`${theme.border} border-t relative overflow-hidden`}>
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-500/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-8 py-12 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div
            className="flex flex-col items-center md:items-start gap-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <LogoCompact />
            <p className={`${theme.textTertiary} text-sm`}>
              © {new Date().getFullYear()} Hamasakis. {t('footer.rights')}
            </p>
          </motion.div>

          <motion.div
            className="flex gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <a
              href="#"
              className={`${theme.textTertiary} text-sm hover:text-purple-400 transition-colors`}
            >
              {t('footer.privacy')}
            </a>
            <a
              href="#"
              className={`${theme.textTertiary} text-sm hover:text-purple-400 transition-colors`}
            >
              {t('footer.terms')}
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
