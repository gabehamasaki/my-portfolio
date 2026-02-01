import { useState, useCallback } from 'react';

export function useScrollToSection() {
    const [activeSection, setActiveSection] = useState('home');

    const scrollToSection = useCallback((sectionId: string) => {
        setActiveSection(sectionId);
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
    }, []);

    return {
        activeSection,
        setActiveSection,
        scrollToSection,
    };
}
