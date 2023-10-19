import {
    backend,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    flag,
    spotify,
    restaurant,
    techover,
    basketball,
    developer,
    marvel,
    marcus,
    insta,
    linkedin,
    github
  } from "../assets";

  export const socialmedia = [
    {
      name: 'Instagram',
      image: insta,
      source_code_link: 'https://www.instagram.com/jpeerson/'
    },
    { 
      name: 'LinkedIn',
      image: linkedin,
      source_code_link: 'https://www.linkedin.com/in/jonathan-person-1a3a65242/'
    },
    {
      name: 'Github',
      image: github,
      source_code_link: 'https://github.com/Jaypee93'
    }
  
  ]
  
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
        "Jonathan is an exceptional student in web development. His energy and independent nature is truly impressive. Jonathan is extremely goal-targeted and shows a strong desire to master the subject put in front of him. He demostrates this by being able to finish the education in the same speed as other students despite being a professional basketball player in Romania. Jonathan is without a doubt an upcoming star in web development and a role model for other students.",
      name: "Marcus Pousette ",
      designation: "CFO",
      company: "Techover",
      image: marcus,
    },

  ];
  
  const projects = [
    {
      name: "The Worlds Countries",
      description:
        "Find information about all the worlds countries. Capital, spoken language, citizens and more.",
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
        "My very own spotify clone. The most challenging project for me so far, but the one im the most proud of. Link to Live demo coming soon.",
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
      source_code_link: "https://github.com/Jaypee93",
    },
    {
      name: "Restaurant Menu",
      description:
        "An example of how a website for your restaurant could look like. Simple but beutiful layout.",
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
        "Take a dive into the Marvel universe and find out all the details about your favourite character. ",
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