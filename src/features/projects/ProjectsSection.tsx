import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/context';
import { ProjectCard } from './ProjectCard';

const PROJECT_KEYS = ['customerHub', 'esg', 'warehouse', 'betting'] as const;

const PROJECT_TECH: Record<string, string[]> = {
    customerHub: ['Go', 'Laravel', 'PostgreSQL', 'Redis', 'Azure'],
    esg: ['Vue.js', 'Laravel', 'MariaDB', 'Azure'],
    warehouse: ['Laravel', 'Vue.js', 'MySQL', 'WebSockets'],
    betting: ['PHP', 'Vue.js', 'MySQL', 'Redis'],
};

export function ProjectsSection() {
    const { t } = useTranslation();
    const { theme } = useTheme();

    return (
        <section id="projects" className={`px-8 py-20 ${theme.sectionBg}`}>
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex items-center gap-8 mb-12">
                        <h2 className="text-4xl md:text-5xl font-serif tracking-tight">{t('projects.title')}</h2>
                        <div className={`flex-1 h-px ${theme.lineColor}`} />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {PROJECT_KEYS.map((key, index) => (
                            <ProjectCard
                                key={key}
                                title={t(`projects.items.${key}.title`)}
                                description={t(`projects.items.${key}.description`)}
                                tech={PROJECT_TECH[key]}
                                index={index}
                            />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
