import { Moon, Sun } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/context';
import { LogoCompact } from '@/components/common/Logo';
import { LanguageSwitcher } from '@/components/common/LanguageSwitcher';

const NAV_SECTIONS = ['home', 'about', 'experience', 'projects', 'contact'] as const;

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const { t } = useTranslation();
  const { isDark, toggleTheme, theme } = useTheme();

  return (
    <nav className={`fixed top-0 w-full ${theme.navBg} backdrop-blur-md ${theme.border} border-b z-50`}>
      <div className="max-w-6xl mx-auto px-8 py-4 flex items-center justify-between">
        <button
          onClick={() => onNavigate('home')}
          className="transition-transform hover:scale-105"
        >
          <LogoCompact />
        </button>

        <div className="flex items-center gap-6">
          {NAV_SECTIONS.map((section) => (
            <button
              key={section}
              onClick={() => onNavigate(section)}
              className={`relative text-sm uppercase tracking-wider transition-all duration-300 ${
                activeSection === section
                  ? `${theme.text} font-medium`
                  : `${theme.textTertiary} ${isDark ? 'hover:text-white' : 'hover:text-black'}`
              }`}
            >
              {t(`nav.${section}`)}
              {activeSection === section && (
                <span className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full" />
              )}
            </button>
          ))}

          {/* Language Switcher */}
          <LanguageSwitcher />

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`p-2.5 ${theme.border} border rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/20 ${theme.buttonHoverBg}`}
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </nav>
  );
}
