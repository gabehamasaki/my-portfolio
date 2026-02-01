import { motion } from 'motion/react';
import { useTheme } from '@/context';

interface ContactButtonProps {
  label: string;
  href: string;
  index: number;
}

export function ContactButton({ label, href, index }: ContactButtonProps) {
  const { theme, isDark } = useTheme();

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative ${theme.border} border px-6 py-3 overflow-hidden transition-all duration-300 hover:border-purple-500/50`}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: 0.1 * index }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-purple-500/0 group-hover:bg-purple-500/10 transition-colors duration-300" />

      <span className={`relative ${theme.textSecondary} text-sm tracking-wider uppercase transition-colors group-hover:text-purple-400`}>
        {label}
      </span>
    </motion.a>
  );
}
