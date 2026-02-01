import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/context';
import { Logo } from '@/components/common/Logo';

interface HeroSectionProps {
  onContactClick: () => void;
}

export function HeroSection({ onContactClick }: HeroSectionProps) {
  const { t } = useTranslation();
  const { theme } = useTheme();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 md:px-8 pt-24 md:pt-20 relative">
      <div className="max-w-6xl w-full">
        <motion.div
          className="flex flex-col items-center gap-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Logo />

          <motion.div
            className="text-center space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h1 className={`text-lg md:text-2xl tracking-[0.2em] md:tracking-[0.3em] uppercase ${theme.textSecondary}`}>
              {t('hero.title')}
            </h1>
            <p className={`text-lg md:text-xl ${theme.textTertiary} max-w-2xl leading-relaxed`}>
              {t('hero.subtitle')}
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.button
              onClick={onContactClick}
              className={`group relative border-2 ${theme.buttonBorder} px-8 py-4 overflow-hidden transition-all duration-300`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className={`relative text-sm tracking-wider uppercase transition-colors duration-300 group-hover:text-white`}>
                {t('hero.cta')}
              </span>
            </motion.button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{
              opacity: { delay: 1, duration: 0.5 },
              y: { delay: 1.5, duration: 1.5, repeat: Infinity }
            }}
          >
            <ArrowDown className={`w-6 h-6 ${theme.textTertiary}`} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
