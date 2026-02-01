import { Project } from '@/types';

export const projects: Project[] = [
    {
        title: 'Customer Experience Data Hub',
        description: 'Plataforma robusta que atua como hub centralizado para processamento, consolidação e compartilhamento seguro de dados de vendas e serviços com organizações terceirizadas.',
        tech: ['Go', 'Laravel', 'PostgreSQL', 'Kafka', 'Azure'],
    },
    {
        title: 'ESG Engagement Platform',
        description: 'Solução dinâmica para engajar equipes na conquista de metas ESG, alinhada com os Objetivos de Desenvolvimento Sustentável (ODS) da ONU.',
        tech: ['React.js', 'Node.js', 'PostgreSQL', 'AWS'],
    },
    {
        title: 'Warehouse & Logistics Portal',
        description: 'Portal completo para otimização do gerenciamento de armazenamento, transporte e entrega, coordenando múltiplos provedores de transporte.',
        tech: ['Laravel', 'Vue.js', 'MySQL', 'Kubernetes'],
    },
    {
        title: 'Sports Betting Platform',
        description: 'Sistema de apostas esportivas com alta performance e processamento de transações em tempo real.',
        tech: ['PHP', 'Vue.js', 'MySQL', 'Redis'],
    },
];
