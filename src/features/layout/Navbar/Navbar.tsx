import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/context';
import { LogoCompact } from '@/components/common/Logo';
import { LanguageSwitcher } from '@/components/common/LanguageSwitcher';
import { AnimatePresence, motion } from 'motion/react';

const NAV_SECTIONS = ['home', 'about', 'experience', 'projects', 'contact'] as const;

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const { t } = useTranslation();
  const { isDark, toggleTheme, theme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (section: string) => {
    onNavigate(section);
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled || isMenuOpen
            ? `${theme.navBg} backdrop-blur-md border-b ${theme.border}`
            : 'bg-transparent border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => handleNavigate('home')}
            className="transition-transform hover:scale-105 z-50 relative"
          >
            <LogoCompact className="w-[140px] h-[40px] md:w-[180px] md:h-[50px]" />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_SECTIONS.map((section) => (
              <button
                key={section}
                onClick={() => handleNavigate(section)}
                className={`relative text-sm uppercase tracking-wider transition-all duration-300 font-medium ${
                  activeSection === section
                    ? `${theme.text}`
                    : `${theme.textTertiary} hover:text-purple-400`
                }`}
              >
                {t(`nav.${section}`)}
                {activeSection === section && (
                  <motion.span
                    layoutId="activeSection"
                    className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full"
                  />
                )}
              </button>
            ))}

            <div className="flex items-center gap-4 pl-4 border-l border-white/10">
              <LanguageSwitcher />

              <button
                onClick={toggleTheme}
                className={`p-2.5 ${theme.border} border rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/20 ${theme.buttonHoverBg} ${theme.textSecondary}`}
                aria-label="Toggle dark mode"
              >
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-4">
             <LanguageSwitcher />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 ${theme.text} hover:bg-white/5 rounded-lg transition-colors z-50`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className={`fixed inset-0 z-40 md:hidden pt-24 px-6 ${theme.navBg} backdrop-blur-xl`}
          >
            <div className="flex flex-col gap-6">
              {NAV_SECTIONS.map((section) => (
                <button
                  key={section}
                  onClick={() => handleNavigate(section)}
                  className={`text-2xl font-serif text-left py-4 border-b ${theme.border} ${
                    activeSection === section ? 'text-purple-400' : theme.textSecondary
                  }`}
                >
                  {t(`nav.${section}`)}
                </button>
              ))}

              <div className="flex justify-between items-center py-4">
                <span className={`text-sm uppercase tracking-wider ${theme.textTertiary}`}>Theme</span>
                <button
                  onClick={toggleTheme}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full ${theme.border} border ${theme.textSecondary}`}
                >
                  {isDark ? (
                    <>
                      <Sun className="w-4 h-4" /> Light
                    </>
                  ) : (
                    <>
                      <Moon className="w-4 h-4" /> Dark
                    </>
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
