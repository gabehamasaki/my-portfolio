import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/context';

const SPECIALTY_KEYS = [
  'requirements',
  'fullstack',
  'api',
  'architecture',
  'sre',
  'cloud',
] as const;

export function AboutSection() {
  const { t } = useTranslation();
  const { theme } = useTheme();

  return (
    <section id="about" className={`min-h-screen flex items-center justify-center px-8 py-20 ${theme.border} border-t`}>
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-8 mb-16">
            <h2 className="text-4xl md:text-5xl font-serif tracking-tight">{t('about.title')}</h2>
            <div className={`flex-1 h-px bg-gradient-to-r ${theme.lineColor} from-current to-transparent`} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Bio */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className={`text-3xl font-serif ${theme.text} mb-2`}>Gabriel Hamasaki</h3>
              <p className={`${theme.textSecondary} leading-relaxed text-lg`}>
                {t('about.bio1')}
              </p>
              <p className={`${theme.textSecondary} leading-relaxed text-lg`}>
                {t('about.bio2')}
              </p>
            </motion.div>

            {/* Specialties */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className={`text-sm uppercase tracking-wider ${theme.textTertiary} mb-4`}>
                {t('about.specialties')}
              </h3>
              <ul className="space-y-3">
                {SPECIALTY_KEYS.map((key, index) => (
                  <motion.li
                    key={key}
                    className={`${theme.textSecondary} flex items-center gap-3`}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                  >
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-violet-500" />
                    {t(`specialties.${key}`)}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
