export const PROJECT_KEYS = [
    'scheduleVisits',
    'smartSale',
    'customerHub',
    'esg',
    'warehouse',
    'betting',
] as const;

export type ProjectKey = (typeof PROJECT_KEYS)[number];

export type ProjectMeta = {
    tech: string[];
    link?: string;
    github?: string;
    images?: string[];
};

export function isShowcaseProject(meta: ProjectMeta): boolean {
    return Boolean(meta.link && meta.images && meta.images.length > 0);
}

export function getDisplayProjectKeys(): ProjectKey[] {
    const showcase = PROJECT_KEYS.filter((key) => isShowcaseProject(PROJECT_META[key]));
    const rest = PROJECT_KEYS.filter((key) => !isShowcaseProject(PROJECT_META[key]));
    return [...showcase, ...rest];
}

export const PROJECT_META: Record<ProjectKey, ProjectMeta> = {
    scheduleVisits: {
        tech: ['PHP', 'React', 'PostgreSQL', 'Docker', 'hinfra'],
        link: 'https://schedule-visits.hamasakis.dev',
        github: 'https://github.com/gabehamasaki/schedule-visits',
        images: [
            '/projects/schedule-visits/01-vehicles.png',
            '/projects/schedule-visits/02-schedule.png',
        ],
    },
    smartSale: {
        tech: ['Laravel', 'Inertia', 'Vue.js', 'PostgreSQL', 'SQL Server', 'AI'],
        link: 'https://smart.sale/',
        images: ['/projects/smart-sale/01-home.png'],
    },
    customerHub: {
        tech: ['Go', 'Laravel', 'PostgreSQL', 'Redis', 'Azure'],
    },
    esg: {
        tech: ['Laravel', 'Vue.js', 'Inertia', 'MariaDB', 'Azure'],
        link: 'https://baase.app/',
        images: [
            '/projects/esg-baase/01-landing.png',
            '/projects/esg-baase/02-landing-section.png',
        ],
    },
    warehouse: {
        tech: ['Laravel', 'Vue.js', 'MySQL', 'WebSockets'],
    },
    betting: {
        tech: ['PHP', 'Vue.js', 'MySQL', 'Redis'],
    },
};
