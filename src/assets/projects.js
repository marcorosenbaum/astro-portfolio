import PhotoVtg from './images/projects/vtg/photo-vtg.png';
import PhotoVtg400w from './images/projects/vtg/photo-vtg-400w.avif';
import PhotoVtg600w from './images/projects/vtg/photo-vtg-600w.avif';
import PhotoVtg800w from './images/projects/vtg/photo-vtg-800w.avif';
import PhotoVtg1000w from './images/projects/vtg/photo-vtg-1000w.avif';
import PhotoVtg1200w from './images/projects/vtg/photo-vtg-1200w.avif';
import PhotoVtg1600w from './images/projects/vtg/photo-vtg-1600w.avif';
import PhotoVtg2000w from './images/projects/vtg/photo-vtg-2000w.avif';

import PhotoMusic from './images/projects/music/photo-music.png';
import PhotoMusic400w from './images/projects/music/photo-music-400w.avif';
import PhotoMusic600w from './images/projects/music/photo-music-600w.avif';
import PhotoMusic800w from './images/projects/music/photo-music-800w.avif';
import PhotoMusic1000w from './images/projects/music/photo-music-1000w.avif';
import PhotoMusic1200w from './images/projects/music/photo-music-1200w.avif';
import PhotoMusic1600w from './images/projects/music/photo-music-1600w.avif';
import PhotoMusic2000w from './images/projects/music/photo-music-2000w.avif';

import PhotoFlashcards from './images/projects/flashcards/photo-flashcards.png';
import PhotoFlashcards400w from './images/projects/flashcards/photo-flashcards-400w.avif';
import PhotoFlashcards600w from './images/projects/flashcards/photo-flashcards-600w.avif';
import PhotoFlashcards800w from './images/projects/flashcards/photo-flashcards-800w.avif';
import PhotoFlashcards1000w from './images/projects/flashcards/photo-flashcards-1000w.avif';
import PhotoFlashcards1200w from './images/projects/flashcards/photo-flashcards-1200w.avif';
import PhotoFlashcards1600w from './images/projects/flashcards/photo-flashcards-1600w.avif';
import PhotoFlashcards2000w from './images/projects/flashcards/photo-flashcards-2000w.avif';

import PhotoOgPreview from './images/projects/og-preview/photo-og-preview.png';
import PhotoOgPreview400w from './images/projects/og-preview/photo-og-preview-400w.avif';
import PhotoOgPreview600w from './images/projects/og-preview/photo-og-preview-600w.avif';
import PhotoOgPreview800w from './images/projects/og-preview/photo-og-preview-800w.avif';
import PhotoOgPreview1000w from './images/projects/og-preview/photo-og-preview-1000w.avif';
import PhotoOgPreview1200w from './images/projects/og-preview/photo-og-preview-1200w.avif';
import PhotoOgPreview1600w from './images/projects/og-preview/photo-og-preview-1600w.avif';
import PhotoOgPreview2000w from './images/projects/og-preview/photo-og-preview-2000w.avif';

import PhotoPortfolioV1 from './images/projects/portfolio-v1/photo-portfolio-v1.png';
import PhotoPortfolioV1400w from './images/projects/portfolio-v1/photo-portfolio-v1-400w.avif';
import PhotoPortfolioV1600w from './images/projects/portfolio-v1/photo-portfolio-v1-600w.avif';
import PhotoPortfolioV1800w from './images/projects/portfolio-v1/photo-portfolio-v1-800w.avif';
import PhotoPortfolioV11000w from './images/projects/portfolio-v1/photo-portfolio-v1-1000w.avif';
import PhotoPortfolioV11200w from './images/projects/portfolio-v1/photo-portfolio-v1-1200w.avif';
import PhotoPortfolioV11600w from './images/projects/portfolio-v1/photo-portfolio-v1-1600w.avif';
import PhotoPortfolioV12000w from './images/projects/portfolio-v1/photo-portfolio-v1-2000w.avif';

import PhotoPortfolioAdvanced from './images/projects/portfolio-advanced/photo-portfolio-advanced.png';
import PhotoPortfolioAdvanced400w from './images/projects/portfolio-advanced/photo-portfolio-advanced-400w.avif';
import PhotoPortfolioAdvanced600w from './images/projects/portfolio-advanced/photo-portfolio-advanced-600w.avif';
import PhotoPortfolioAdvanced800w from './images/projects/portfolio-advanced/photo-portfolio-advanced-800w.avif';
import PhotoPortfolioAdvanced1000w from './images/projects/portfolio-advanced/photo-portfolio-advanced-1000w.avif';
import PhotoPortfolioAdvanced1200w from './images/projects/portfolio-advanced/photo-portfolio-advanced-1200w.avif';
import PhotoPortfolioAdvanced1600w from './images/projects/portfolio-advanced/photo-portfolio-advanced-1600w.avif';
import PhotoPortfolioAdvanced2000w from './images/projects/portfolio-advanced/photo-portfolio-advanced-2000w.avif';

const PROJECTS = [
  {
    id: '1',
    title: 'og-preview',
    image: {
      width400: PhotoOgPreview400w,
      width600: PhotoOgPreview600w,
      width800: PhotoOgPreview800w,
      width1000: PhotoOgPreview1000w,
      width1200: PhotoOgPreview1200w,
      width1600: PhotoOgPreview1600w,
      width2000: PhotoOgPreview2000w,
    },
    description:
      'A npm-package that generates a preview of how all links appear when shared on social media. Simply execute a CLI command.',
    descriptionLong:
      'OG-preview is a CLI tool to preview all available Open Graph meta data from the local development server. This allows the developer to check how the links of the website will appear when shared on social media platforms without deploying your project or checking every URL manually. You simply need to execute a single CLI command.',
    skills: ['Node', 'Express', 'TypeScript'],
    githubLink: 'https://github.com/marcorosenbaum/og-preview',
    websiteLink: 'https://www.npmjs.com/package/og-preview',
    learnings: [
      'Setting up a CLI tool',
      'Using Express to serve static files',
      'Building a Web Scraper',
      'Publishing and managing a npm package',
    ],
  },
  {
    id: '2',
    title: 'VTG-Musli',
    image: {
      width400: PhotoVtg400w,
      width600: PhotoVtg600w,
      width800: PhotoVtg800w,
      width1000: PhotoVtg1000w,
      width1200: PhotoVtg1200w,
      width1600: PhotoVtg1600w,
      width2000: PhotoVtg2000w,
    },
    description: 'The website of a local car dealer in Germany.',
    descriptionLong:
      'VTG-Musli is a local car dealer in northern Germany. The goal was to create a simple and clean website that showcases the services and partners of the company. ',
    skills: ['JavaScript', 'Vue', 'Tailwind'],
    githubLink: 'https://github.com/marcorosenbaum/vtg-musli',
    websiteLink: 'https://vtg-musli.de',
    learnings: [
      'Creating a website from scratch',
      'Fully responsive design',
      'Deploying a website via FileZilla (File Transfer Protocol)',
    ],
  },
  {
    id: '3',
    title: 'Portfolio-V1',
    image: {
      width400: PhotoPortfolioV1400w,
      width600: PhotoPortfolioV1600w,
      width800: PhotoPortfolioV1800w,
      width1000: PhotoPortfolioV11000w,
      width1200: PhotoPortfolioV11200w,
      width1600: PhotoPortfolioV11600w,
      width2000: PhotoPortfolioV12000w,
    },
    description: 'The first version of my portfolio website.',
    descriptionLong:
      'This is the first version of my personal portfolio website. I focused on creating a clean and simple portfolio that showcases my projects and skills. ',
    skills: ['JavaScript', 'Vue', 'Tailwind'],
    githubLink: 'https://github.com/marcorosenbaum/portfolio',
    websiteLink: 'https://marcorosenbaum-v1.netlify.app/',
    learnings: [
      'Creating a personal portfolio',
      'Building reusable components',
      'Working with Figma designs',
    ],
  },
  {
    id: '4',
    title: 'Flashcards',
    image: {
      width400: PhotoFlashcards400w,
      width600: PhotoFlashcards600w,
      width800: PhotoFlashcards800w,
      width1000: PhotoFlashcards1000w,
      width1200: PhotoFlashcards1200w,
      width1600: PhotoFlashcards1600w,
      width2000: PhotoFlashcards2000w,
    },
    description:
      'Flashcards is a web application where you can create flashcards and keep track of your learning progress.',
    descriptionLong:
      'Flashcards is a web application where you can create flashcards and keep track of your learning progress. The goal was to create a simple and clean application that helps people to memorize information while getting a visual feedback of their learning progress.',
    skills: [
      'Vue',
      'Tailwind',
      'Firebase',
      'Firestore',
      'Pinia',
      'Chart.js',
      'TipTap',
    ],
    githubLink: 'https://github.com/marcorosenbaum/flashcards',
    websiteLink: 'https://marco-flashcards.netlify.app/',
    learnings: [
      'Working with Firebase',
      'User authentication',
      'Storing data in Firestore',
      'Creating a responsive design',
      'Implemanting tools like Chart.js and TipTap',
      'Using Pinia for state management',
      'Form validation',
    ],
  },
  {
    id: '5',
    title: 'Music Prototype',
    image: {
      width400: PhotoMusic400w,
      width600: PhotoMusic600w,
      width800: PhotoMusic800w,
      width1000: PhotoMusic1000w,
      width1200: PhotoMusic1200w,
      width1600: PhotoMusic1600w,
      width2000: PhotoMusic2000w,
    },
    description: 'The Prototype of a music player web application.',
    descriptionLong:
      "This is the project that I built during the course 'Vue - The complete guide by Zero to Mastery'. It is a music player web application with user authentication. Users can upload their own songs and comment on other songs.",
    skills: ['Vue', 'Tailwind', 'Firebase', 'Firestore', 'Pinia'],
    githubLink: 'https://github.com/marcorosenbaum/music-example',
    websiteLink: '',
    learnings: [
      'User authentication',
      'Storing data in Firebase',
      'Translating content with vue-i18n',
      'Testing with Vitest',
    ],
  },
  {
    id: '6',
    title: 'Portfolio-Advanced',
    image: {
      width400: PhotoPortfolioAdvanced400w,
      width600: PhotoPortfolioAdvanced600w,
      width800: PhotoPortfolioAdvanced800w,
      width1000: PhotoPortfolioAdvanced1000w,
      width1200: PhotoPortfolioAdvanced1200w,
      width1600: PhotoPortfolioAdvanced1600w,
      width2000: PhotoPortfolioAdvanced2000w,
    },
    description:
      'The second Version of my portfolio website. Implemented netlify functions to create costum website analytics in MongoDB.',
    descriptionLong:
      'This is the second version of my personal portfolio website. I focused on creating a clean and simple portfolio that showcases my projects and skills. I implemented netlify functions to create costum website analytics, like tracking clicks, on MongoDB.',
    skills: ['TypeScript', 'React', 'MongoDB', 'Tailwind', 'Netlify'],
    githubLink: 'https://github.com/marcorosenbaum/portfolio-advanced',
    websiteLink: 'https://marcorosenbaum.netlify.app/',
    learnings: [
      'Working with MongoDB',
      'Creating netlify functions',
      'Tracking clicks on the website',
      'Using React Hooks',
      'Implementing a dark-mode',
    ],
  },
];

export default PROJECTS;
