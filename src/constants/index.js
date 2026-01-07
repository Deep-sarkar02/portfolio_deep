// Array of objects defining the links in the upper navigation bar
export const navLinks = [
  {
    id: 1, // Unique identifier for the list item
    name: 'Home', // Text that users see
    href: '#home', // ID of the section to scroll to
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Skills',
    href: '#skills',
  },
  {
    id: 5,
    name: 'Contact',
    href: '#contact',
  },
  {
    id: 6,
    name: 'Resume',
    href: 'https://drive.google.com/file/d/10TXAaP3hNCYnRjeJnCxDEvwhbN1MOX31/view?usp=drive_link', // Direct link to your Google Drive resume
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'WanderLust - Property Management',
    desc: 'WanderLust is a full-stack web application for property management, designed to allow users to add, view, edit, and delete properties, as well as leave reviews and ratings. The platform integrates Google Maps API for property location visualization and Cloudinary for secure image storage.',
    subdesc:
      'Features secure authentication with Passport.js, robust data validation with Joi, and an interactive UI built with EJS and Bootstrap. Demonstrates expert-level backend integration with Node.js and MongoDB.',
    href: 'https://github.com/Deep-sarkar02/wanderlust-property-management',
    texture: '/assets/grid3.png', // Using a placeholder image since no video is provided
    logo: 'https://cdn-icons-png.flaticon.com/512/2163/2163350.png', // Professional Building/Property Icon
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'Node.js',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      },
      {
        id: 2,
        name: 'MongoDB',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      },
      {
        id: 3,
        name: 'Express',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
      },
      {
        id: 4,
        name: 'JavaScript',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      },
    ],
  },

  {
    title: 'ImaGeen - AI Image Generation Platform',
    desc: 'ImaGeen is a powerful full-stack AI image generation platform that transforms imagination into stunning visual art. Users can generate high-quality images from text prompts, manage accounts, and purchase credits.',
    subdesc:
      'Built with React, Node.js, MongoDB, and Express. Integrates ClipDrop API for AI generations and Razorpay for secure payments. Features JWT authentication and a sophisticated credit system.',
    href: 'https://ima-geen-text-to-image-generation-a.vercel.app/',
    texture: '/assets/grid2.png', // Placeholder texture
    logo: 'https://cdn-icons-png.flaticon.com/512/3421/3421111.png', // Professional AI/Image Icon
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'Node.js',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      },
      {
        id: 3,
        name: 'MongoDB',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      },
      {
        id: 4,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-20, 18, 0] : isTablet ? [-12, 10, 0] : [-36, 23, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'UrbanPro',
    pos: 'Computer Science Instructor',
    duration: 'Jun 2023 - Present',
    title: 'Mentored 55+ students in Python, Java, and DSA; improved student performance by 60%. Delivered customized lesson plans and hands-on coding exercises.',
    icon: '/assets/urbanpro.png',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Talentrise Technokrate',
    pos: 'Backend Node.js Intern',
    duration: 'May 2025 - Aug 2025',
    title: 'Engineered secure backend routes with Joi validation and client-side validation for robust data accuracy. Implemented Passport.js authentication with cookies, strengthening security for hospital management system. Optimized MongoDB schemas and API integrations, improving backend performance and reliability.',
    icon: '/assets/talentrise.png',
    animation: 'salute',
  },
];