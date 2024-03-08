type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const exata = "<a href='https://www.exata.it/en/' target='_blank' class='hover:underline'>*Exata Tech*</a>"

const presentation: Presentation = {
  mail: "gabrielhamasaki82@outlook.com",
  title: "Hi, I’m Gabriel Hamasaki 👋",
  // profile: "/profile.webp",
  description:
    `Welcome, i'm a *Brazilian Software Engineer* with over *2 years* of web experience. I am currently working with *Laravel* and *Vuejs* in ${exata} Outside of work i am learning *nextjs* with *typescript* and *tailwindcss* to improve my skills. I am also a *otaku* and *gamer* in my free time. I am always looking for new challenges and opportunities to grow.`,
  socials: [
    {
      label: "LinkedIn",
      link: "https://linkedin.com/in/gabriel-hamasaki/",
    },
    {
      label: "Github",
      link: "https://github.com/gabehamasaki",
    },
    {
      label: 'Repository',
      link: "https://github.com/gabehamasaki/my-portfolio"
    }
  ],
};

export default presentation;
