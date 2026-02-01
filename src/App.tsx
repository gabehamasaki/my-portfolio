import { ThemeProvider, useTheme } from '@/context';
import { useScrollToSection } from '@/hooks';
import { GlowCircle } from '@/components';
import {
  Navbar,
  Footer,
  HeroSection,
  AboutSection,
  SkillsSection,
  ExperienceSection,
  ProjectsSection,
  ContactSection,
} from '@/features';

function AppContent() {
  const { theme } = useTheme();
  const { activeSection, scrollToSection } = useScrollToSection();

  return (
    <div className={`min-h-screen ${theme.bg} ${theme.text} transition-colors duration-300 relative overflow-hidden`}>
      {/* Background glow effects */}
      <GlowCircle position="top" color="purple" />
      <GlowCircle position="bottom" color="violet" />

      {/* Navigation */}
      <Navbar activeSection={activeSection} onNavigate={scrollToSection} />

      {/* Main content */}
      <main>
        <HeroSection onContactClick={() => scrollToSection('contact')} />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
