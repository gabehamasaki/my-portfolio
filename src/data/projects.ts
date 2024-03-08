export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Atena",
    techs: ["Turbo Repo", "ReactJS (NextJS)", "trpc", "react-query", "zod", "next-auth", "drizzle", "tailwindcss"],
    link: "https://github.com/gabehamasaki/Atena",
  },
  {
    title: "Polls API",
    techs: ["Fastify", "TypeScript", "Drizzle", "Websocket", "redis", "zod"],
    link: "https://github.com/gabehamasaki/polls",
  },
];

export default projects;
