import { motion } from 'motion/react';
import { useTheme } from '@/context';

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
  index: number;
}

export function ExperienceItem({ title, company, period, description, index }: ExperienceItemProps) {
  const { theme, isDark } = useTheme();

  return (
    <motion.div
      className="relative pl-8 pb-12 last:pb-0"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
    >
      {/* Timeline line */}
      <div className={`absolute left-0 top-2 bottom-0 w-px bg-gradient-to-b from-purple-500 via-violet-500/50 to-transparent`} />

      {/* Timeline dot */}
      <motion.div
        className="absolute left-0 top-2 w-2.5 h-2.5 -translate-x-1/2 rounded-full bg-gradient-to-r from-purple-500 to-violet-500 shadow-lg shadow-purple-500/30"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.2 + 0.1 * index }}
      />

      <div className="space-y-3">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
          <div>
            <h3 className="text-xl md:text-2xl font-serif">{title}</h3>
            <p className={`${theme.textSecondary} text-lg`}>{company}</p>
          </div>
          <span className={`text-sm ${theme.textTertiary} tracking-wider uppercase px-3 py-1 rounded-full ${isDark ? 'bg-white/5' : 'bg-black/5'}`}>
            {period}
          </span>
        </div>
        <p className={`${theme.textSecondary} leading-relaxed`}>{description}</p>
      </div>
    </motion.div>
  );
}
