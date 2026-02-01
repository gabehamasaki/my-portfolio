import { useTranslation } from 'react-i18next';
import { useTheme } from '@/context';
import { Globe } from 'lucide-react';
import { useState } from 'react';

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'pt-BR', label: 'PT' },
  { code: 'es', label: 'ES' },
];

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const { theme, isDark } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const currentLang = languages.find(l => l.code === i18n.language) || languages[0];

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-1.5 px-3 py-2 ${theme.border} border rounded-full transition-all duration-300 hover:border-purple-500/50 ${theme.textSecondary} hover:text-purple-400`}
        aria-label="Change language"
      >
        <Globe className="w-4 h-4" />
        <span className="text-xs font-medium">{currentLang.label}</span>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className={`absolute right-0 mt-2 py-2 w-24 ${isDark ? 'bg-black/95' : 'bg-white/95'} backdrop-blur-md ${theme.border} border rounded-lg shadow-xl z-50`}>
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`w-full px-4 py-2 text-left text-sm transition-colors ${
                  i18n.language === lang.code
                    ? 'text-purple-400'
                    : `${theme.textSecondary} hover:text-purple-400`
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
