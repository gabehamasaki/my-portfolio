import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/context';
import { ExperienceItem } from './ExperienceItem';

const JOB_KEYS = ['exata', 'freelance', 'setebit'] as const;

export function ExperienceSection() {
  const { t } = useTranslation();
  const { theme } = useTheme();

  return (
    <section id="experience" className={`min-h-screen flex items-center justify-center px-8 py-20 ${theme.border} border-t`}>
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-8 mb-16">
            <h2 className="text-4xl md:text-5xl font-serif tracking-tight">{t('experience.title')}</h2>
            <div className={`flex-1 h-px ${theme.lineColor}`} />
          </div>

          <div className="relative">
            {JOB_KEYS.map((jobKey, index) => (
              <ExperienceItem
                key={jobKey}
                title={t(`experience.jobs.${jobKey}.title`)}
                company={t(`experience.jobs.${jobKey}.company`)}
                period={t(`experience.jobs.${jobKey}.period`)}
                description={t(`experience.jobs.${jobKey}.description`)}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
