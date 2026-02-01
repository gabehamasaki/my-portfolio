import { SkillCategory, ContactInfo } from '@/types';

export const skillCategories: SkillCategory[] = [
    {
        title: 'Languages & Frameworks',
        skills: ['PHP', 'Golang', 'Java', 'JavaScript', 'Laravel', 'Gin/Echo', 'Spring Boot', 'Node.js'],
    },
    {
        title: 'Frontend',
        skills: ['React.js', 'Vue.js', 'React Native', 'Inertia'],
    },
    {
        title: 'Architecture & Practices',
        skills: ['Design Patterns', 'SOLID', 'Hexagonal Architecture', 'Clean Architecture', 'Microservices'],
    },
    {
        title: 'Database',
        skills: ['MySQL', 'PostgreSQL', 'SQL', 'NoSQL', 'Redis'],
    },
    {
        title: 'Cloud & Infrastructure',
        skills: ['Azure', 'AWS', 'Kubernetes (AKS/EKS)', 'Docker', 'DevOps'],
    },
    {
        title: 'Integration & Events',
        skills: ['REST APIs', 'Kafka', 'Event Hub', 'Event-Driven Architecture'],
    },
];

export const contactLinks: ContactInfo[] = [
    { label: 'Email', href: 'mailto:gabrielhamasaki82@outlook.com' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/gabriel-hamasaki/' },
    { label: 'GitHub', href: 'https://github.com/gabehamasaki' },
];

export const specialties = [
    'Análise de Requisitos & Regras de Negócio',
    'Desenvolvimento Full-Stack',
    'Integração de APIs & Microserviços',
    'Arquitetura de Sistemas',
    'Site Reliability Engineering (SRE)',
    'Cloud Computing (Azure/AWS)',
];
