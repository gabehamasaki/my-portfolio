export interface Theme {
    bg: string;
    text: string;
    textSecondary: string;
    textTertiary: string;
    border: string;
    borderHover: string;
    navBg: string;
    sectionBg: string;
    cardBg: string;
    lineColor: string;
    dividerColor: string;
    buttonBorder: string;
    buttonHoverBg: string;
}

export interface ThemeContextType {
    isDark: boolean;
    setIsDark: (value: boolean) => void;
    toggleTheme: () => void;
    theme: Theme;
}
