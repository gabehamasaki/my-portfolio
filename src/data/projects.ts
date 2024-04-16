export type Project = {
  title: string;
  name: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
  description?: string;
};

const projects: Project[] = [
  {
    title: "Atena",
    name: "atena",
    techs: ["ReactJS (NextJS)", "Trpc", "ReactQuery", "Zod", "NextAuth", "Drizzle", "Tailwindcss", "Mono repo"],
    link: "https://github.com/gabehamasaki/Atena",
    isComingSoon: true,
  },
  {
    title: "Polls API",
    name: "polls",
    techs: ["Fastify", "TypeScript", "Drizzle", "Websocket", "Redis", "Zod"],
    link: "https://github.com/gabehamasaki/polls",
  },
];

export default projects;
