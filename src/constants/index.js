import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    flag,
    spotify,
    restaurant,
    techover,
    basketball,
    developer,
    marvel
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },

  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Full Stack Developer",
      company_name: "Techover",
      icon: techover,
      iconBg: "#383E56",
      date: "March 2023 - September 2023",
      points: [
        "Started my full-stack education at Techover Academy.",
        "At first I had zero knowledge about coding.",
        "Went from learning basic HTML and CSS to be able to build projects on my own.",
        "In September I passed my final test and could proudly present myself as a full-stack developer.",
      ],
    },
    {
      title: "Professional Basketball Player",
      company_name: "Europe",
      icon: basketball,
      iconBg: "#E6DEDD",
      date: "August 2008 - Today",
      points: [
        "Started my professional career in Bologna, Italy in 2008.",
        "Besides Italy, I have played in Sweden, Germany and Romania",
        "During these years I have been a proud member of the Swedish senior national team, representing Sweden in roughly 40 games.",
        "Looking to start my career as a Software Developer while playing my last years as a professional athlete.",
      ],
    },
    {
      title: "Software Developer",
      company_name: "Learning",
      icon: developer,
      iconBg: "#383E56",
      date: "September 2023 - Today",
      points: [
        "Developing my skills on a daily basis.",
        "Building projects.",
        "Learning new techniques ",
        "Enjoying every step of my journey.",
      ],
    },

  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "The Worlds Countries",
      description:
        "Find information about all the worlds countries. Capital, spoken language, citizens and more",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "API",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: flag,
      source_code_link: "https://celebrated-crostata-fe54fa.netlify.app/",
    },
    {
      name: "Spotify Clone",
      description:
        "My very own spotify clone.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "API",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: spotify,
      source_code_link: "https://github.com/",
    },
    {
      name: "Restaurant Menu",
      description:
        "An example of how a website for your restaurant could look like.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: restaurant,
      source_code_link: "https://scintillating-llama-1bc685.netlify.app/",
    },
    {
      name: "Marvel Characters",
      description:
        "Dive in to the Marvel universe and find out all the details about your favourite character",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
        {
          name:"API",
          color:"green-text-gradient"
        }
      ],
      image: marvel,
      source_code_link: "https://sweet-narwhal-4b45b7.netlify.app/",
    },
  ];
  
  export  { services, technologies, experiences, testimonials, projects };