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

const exata = "<a href='https://www.exata.it/en/' target='_blank' class='hover:underline'>*Exata Technology*</a>"

const presentation: Presentation = {
  mail: "gabrielhamasaki82@outlook.com",
  title: "Hi, I’m Gabriel Hamasaki 👋",
  // profile: "/profile.webp",
  description:
    `Welcome! I'm a *Brazilian Software Engineer* with over *2 years* of experience in *web development*. Currently, I'm working with *Laravel* and *Vue.js* at ${exata}. Outside of work, I'm enhancing my skills by learning *Next.js* with *TypeScript* and *Tailwind CSS*. In my free time, I enjoy *anime* (as an otaku) and *video games*. I'm always eager to take on new *challenges* and *opportunities* that will foster *my growth*.`,
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
