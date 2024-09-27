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
    title: "Polls API",
    name: "polls",
    techs: ["Fastify", "TypeScript", "Drizzle", "Websocket", "Redis", "Zod"],
    link: "https://github.com/gabehamasaki/polls",
    isComingSoon: false,
  },
];

export default projects;
