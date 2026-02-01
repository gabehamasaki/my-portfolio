import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/context';
import { SkillCategory } from './SkillCategory';

const SKILL_CATEGORIES = [
    {
        titleKey: 'Languages & Frameworks',
        skills: ['PHP', 'Golang', 'Laravel', 'Gin & Fiber', 'Node.js'],
    },
    {
        titleKey: 'Frontend',
        skills: ['React.js', 'Vue.js', 'React Native'],
    },
    {
        titleKey: 'Architecture',
        skills: ['Design Patterns', 'SOLID', 'Hexagonal', 'Clean Architecture', 'Microservices'],
    },
    {
        titleKey: 'Database',
        skills: ['MySQL', 'PostgreSQL', 'Redis'],
    },
    {
        titleKey: 'Cloud & Infra',
        skills: ['Azure', 'AWS', 'Kubernetes', 'Docker', 'DevOps'],
    },
    {
        titleKey: 'Integration',
        skills: ['REST APIs', 'Kafka', 'Event Hub', 'Event-Driven'],
    },
];

export function SkillsSection() {
    const { t } = useTranslation();
    const { theme } = useTheme();

    return (
        <section className={`px-4 md:px-8 py-16 md:py-20 ${theme.sectionBg}`}>
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex items-center gap-4 md:gap-8 mb-12">
                        <h2 className="text-3xl md:text-5xl font-serif tracking-tight">{t('skills.title')}</h2>
                        <div className={`flex-1 h-px ${theme.lineColor}`} />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                        {SKILL_CATEGORIES.map((category, index) => (
                            <SkillCategory
                                key={category.titleKey}
                                title={category.titleKey}
                                skills={category.skills}
                                index={index}
                            />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
