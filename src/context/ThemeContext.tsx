'use client';

import { createContext, useContext, useState, ReactNode, useMemo } from 'react';
import { Theme, ThemeContextType } from '@/types';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState(true);

  const theme: Theme = useMemo(() => ({
    bg: isDark ? 'bg-black' : 'bg-white',
    text: isDark ? 'text-white' : 'text-black',
    textSecondary: isDark ? 'text-gray-400' : 'text-gray-600',
    textTertiary: isDark ? 'text-gray-500' : 'text-gray-500',
    border: isDark ? 'border-white/10' : 'border-black/10',
    borderHover: isDark ? 'border-white/30' : 'border-black/30',
    navBg: isDark ? 'bg-black/80' : 'bg-white/80',
    sectionBg: isDark ? 'bg-white/[0.02]' : 'bg-black/[0.02]',
    cardBg: isDark ? 'bg-white/5' : 'bg-white',
    lineColor: isDark ? 'bg-white/20' : 'bg-black/20',
    dividerColor: isDark ? 'white' : 'black',
    buttonBorder: isDark ? 'border-white' : 'border-black',
    buttonHoverBg: isDark ? 'hover:bg-white hover:text-black' : 'hover:bg-black hover:text-white',
  }), [isDark]);

  const toggleTheme = () => setIsDark(prev => !prev);

  const value = useMemo(() => ({
    isDark,
    setIsDark,
    toggleTheme,
    theme,
  }), [isDark, theme]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

export { ThemeContext };
