type Social = {
  label: string;
  link: string;
};

type Presentation = {
  name: string;
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const exata =
  "<a href='https://www.exata.it/en/' target='_blank' class='hover:underline'>*Exata Technology*</a>";
const yearsOfExperience = new Date().getFullYear() - 2019;
const presentation: Presentation = {
  name: "Gabriel Hamasaki",
  mail: "gabrielhamasaki82@outlook.com",
  title: "Hi, I’m Gabriel Hamasaki 👋",
  // profile: "/profile.webp",
  description: `I'm a *Brazilian Software Engineer* with over *${yearsOfExperience} years* of experience in *web development*. Currently, I'm working with *Laravel* and *Vue.js* at ${exata}. Outside of work, I'm enhancing my skills by learning *GoLang* and *Machine Learning*. I'm always eager to take on new *challenges* and *opportunities* that will foster *my growth*.`,
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
      label: "Repository",
      link: "https://github.com/gabehamasaki/my-portfolio",
    },
  ],
};

export default presentation;
