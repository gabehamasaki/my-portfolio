import { motion } from 'motion/react';
import { useTheme } from '@/context';
import { Theme } from '@/types';

interface SkillCategoryProps {
  title: string;
  skills: string[];
  index: number;
}

export function SkillCategory({ title, skills, index }: SkillCategoryProps) {
  const { theme, isDark } = useTheme();

  return (
    <motion.div
      className={`space-y-4 p-6 rounded-lg ${isDark ? 'bg-white/5' : 'bg-black/5'} backdrop-blur-sm border ${theme.border} hover:border-purple-500/30 transition-all duration-300`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      whileHover={{ y: -4 }}
    >
      <h3 className={`text-sm uppercase tracking-wider text-purple-400 ${theme.border} border-b pb-3`}>
        {title}
      </h3>
      <ul className="space-y-2">
        {skills.map((skill, skillIndex) => (
          <motion.li
            key={skill}
            className={`${theme.textSecondary} flex items-center gap-2`}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.05 * skillIndex }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500/50" />
            {skill}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}
