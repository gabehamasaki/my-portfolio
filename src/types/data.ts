export interface Experience {
    title: string;
    company: string;
    period: string;
    description: string;
}

export interface Project {
    title: string;
    description: string;
    tech: string[];
    link?: string;
    github?: string;
}

export interface SkillCategory {
    title: string;
    skills: string[];
}

export interface ContactInfo {
    label: string;
    href: string;
    icon?: string;
}
