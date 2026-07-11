import type {
  SkillCategory,
  Project,
  TimelineItem,
  Achievement,
  Certificate,
  Repo,
  LanguageStat,
  Testimonial,
  Service,
  BlogPost,
} from "@/types";

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const COMMAND_ITEMS = [
  { label: "Home", href: "#home", icon: "home" },
  { label: "About", href: "#about", icon: "user" },
  { label: "Skills", href: "#skills", icon: "cpu" },
  { label: "Projects", href: "#projects", icon: "folder-git-2" },
  { label: "Experience", href: "#experience", icon: "history" },
  { label: "Achievements", href: "#achievements", icon: "trophy" },
  { label: "GitHub", href: "#github", icon: "github" },
  { label: "Contact", href: "#contact", icon: "mail" },
];

export const TYPING_PHRASES = [
  "Available for Internship",
  "Frontend Developer",
  "React Specialist",
  "Creative Developer",
];

export const SOCIAL_LINKS = {
  github: "https://github.com/",
  linkedin: "https://linkedin.com/",
  email: "khantausif9997@gmail.com",
};

export const SKILLS: SkillCategory[] = [
  {
    category: "Languages",
    items: [
      { name: "JavaScript", level: 92 },
      { name: "TypeScript", level: 85 },
      { name: "C++", level: 70 },
      { name: "SQL", level: 75 },
      { name: "Java", level: 80 }, 
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React", level: 93 },
      { name: "Next.js", level: 88 },
      { name: "HTML", level: 96 },
      { name: "CSS", level: 92 },
      { name: "Tailwind", level: 94 },
    ],
  },
  {
    category: "Libraries",
    items: [
      { name: "Three.js", level: 78 },
      { name: "Framer Motion", level: 84 },
      { name: "GSAP", level: 80 },
      { name: "React Three Fiber", level: 75 },
      { name: "Drei", level: 72 },
      { name: "Axios", level: 88 },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", level: 90 },
      { name: "GitHub", level: 90 },
      { name: "Postman", level: 82 },
      { name: "VS Code", level: 96 },
      { name: "Vercel", level: 88 },
      { name: "Cloudflare", level: 70 },
    ],
  },
];

export const TECH_SPHERE_ITEMS = [
  "React",
  "Next.js",
  "TypeScript",
  "Three.js",
  "Tailwind",
  "GSAP",
  "Framer",
  "Node",
  "Git",
  "Vercel",
  "SQL",
  "JS",
];

export const PROJECTS: Project[] = [
  {
    title: "GDFX — Landing Website",
    tag: "Marketing / Fintech",
    desc: "A conversion-first landing page for a trading-tools brand, built to make dense financial messaging feel calm and premium.",
    long: "GDFX needed a landing page that could explain a technical trading product to a non-technical audience without losing credibility. I structured the page around a single scroll narrative — problem, product, proof, pricing — with restrained motion so the data-heavy sections stay readable. Built with Next.js and Tailwind, animated with Framer Motion, deployed on Vercel with image optimization and route-level code splitting to keep Lighthouse scores above 95.",
    stack: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    gradient: "from-blue-600 to-sky-400",
    icon: "trending-up",
    demoUrl: "https://gdfx-landing-vnns.vercel.app/",
    githubUrl: "https://github.com/matlum2005/GDFX-LandingWeb",
  },
  {
    title: "FashionHero — Ecommerce",
    tag: "Retail / Storefront",
    desc: "A fashion storefront concept with filterable catalog, animated cart, and a checkout flow designed to reduce drop-off.",
    long: "FashionHero is a storefront build focused on perceived speed: optimistic UI on add-to-cart, skeleton states instead of spinners, and image-heavy product grids that stay smooth on scroll. Filtering and sorting run client-side against a cached catalog for instant feedback, while checkout uses form validation with clear inline errors instead of a single end-of-form failure. Built with React, Next.js App Router, and Zod for schema validation.",
    stack: ["React", "Next.js", "TypeScript", "Zod"],
    gradient: "from-sky-400 to-blue-600",
    icon: "shopping-bag",
    demoUrl: "https://fashion-hero-ecommerce-web.vercel.app/",
    githubUrl: "https://github.com/matlum2005/FashionHero-EcommerceWeb",
  },
];

export const TIMELINE: TimelineItem[] = [
  {
    year: "2023",
    title: "Started Computer Science Engneering",
    desc: "Began B.Tech, focused on core programming fundamentals — C++, DSA, and SQL.",
    icon: "graduation-cap",
  },
  {
    year: "2024",
    title: "First React Projects",
    desc: "Moved from static HTML/CSS sites to component-driven React applications.",
    icon: "code-2",
  },
  {
    year: "2025",
    title: "Smart India Hackathon",
    desc: "Built and shipped a working prototype in 36 hours as part of a national hackathon team.",
    icon: "flag",
  },
  {
    year: "2026",
    title: "Next.js & 3D Web",
    desc: "Shifted primary stack to Next.js, added Three.js and GSAP for immersive, motion-led interfaces.",
    icon: "box",
  },
  {
    year: "Next,React, TypeScript",
    title: "Looking for an Internship Role and job",
    desc: "Seeking a frontend or React-focused role where I can ship production interfaces at scale.",
    icon: "rocket",
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  { title: "Smart India Hackathon", desc: "Delivered a functioning prototype under a 36-hour build constraint.", icon: "flag" },
  { title: "Responsive Design", desc: "Every project ships tested across desktop, tablet, and mobile breakpoints.", icon: "smartphone" },
  { title: "Clean Code", desc: "Component-first architecture with reusable, typed building blocks.", icon: "file-code-2" },
  { title: "Problem Solving", desc: "Comfortable breaking ambiguous briefs into shippable, scoped tasks.", icon: "puzzle" },
];

export const CERTIFICATES: Certificate[] = [
  { title: "React — Advanced Patterns", org: "Self-directed / Course", year: "2025" },
  { title: "Modern JavaScript (ES2023+)", org: "Self-directed / Course", year: "2024" },
  { title: "Responsive Web Design", org: "freeCodeCamp", year: "2023" },
  { title: "SQL Fundamentals", org: "Self-directed / Course", year: "2023" },
];

export const REPOS: Repo[] = [
  { name: "gdfx-landing", desc: "Landing page for a fintech trading brand.", lang: "TypeScript", stars: 12 },
  { name: "fashionhero-store", desc: "Fashion ecommerce storefront concept.", lang: "TypeScript", stars: 9 },
  { name: "react-three-playground", desc: "Experiments with React Three Fiber & Drei.", lang: "JavaScript", stars: 6 },
];

export const LANGUAGES: LanguageStat[] = [
  { name: "TypeScript", pct: 42, color: "#2563EB" },
  { name: "JavaScript", pct: 31, color: "#38BDF8" },
  { name: "CSS", pct: 18, color: "#60A5FA" },
  { name: "Other", pct: 9, color: "#94A3B8" },
];

export const GITHUB_STATS = {
  repos: 24,
  stars: 63,
  commits: 1240,
  followers: 41,
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Hackathon Teammate",
    role: "Backend Lead, SIH Team",
    quote:
      "Matlum turned our rough idea into a working demo overnight — the UI was the reason judges stayed to watch the full pitch.",
  },
  {
    name: "Course Mentor",
    role: "Web Development Instructor",
    quote:
      "Consistently the student who polished the last 10% — animation timing, spacing, empty states — that most people skip.",
  },
  {
    name: "Project Collaborator",
    role: "UI Designer",
    quote:
      "Handed off a Figma file and got back a build that matched it pixel for pixel, plus motion I hadn't even designed for.",
  },
];

export const SERVICES: Service[] = [
  { title: "Frontend Development", desc: "Component-driven UIs in React, built for maintainability and speed.", icon: "layout-template" },
  { title: "Next.js Development", desc: "App Router apps with SSR/SSG, metadata, and route-level performance in mind.", icon: "box" },
  { title: "Landing Pages", desc: "Story-driven, conversion-focused single pages with restrained motion.", icon: "rocket" },
  { title: "Responsive Websites", desc: "Pixel-tested across desktop, tablet, and mobile — not just resized.", icon: "smartphone" },
  { title: "UI Implementation", desc: "Turning Figma files into production-accurate, accessible components.", icon: "figma" },
  { title: "3D / Motion Web", desc: "Three.js and GSAP additions for hero scenes and scroll storytelling.", icon: "sparkles" },
];

export const BLOG_POSTS: BlogPost[] = [
  { title: "Why most hero sections feel the same", excerpt: "A look at how restrained motion beats maximal animation in first impressions.", tag: "Design" },
  { title: "Getting React Three Fiber into a Next.js app", excerpt: "Notes on dynamic imports, SSR pitfalls, and keeping bundle size sane.", tag: "Engineering" },
  { title: "Tailwind v4: what actually changed", excerpt: "A practical rundown of the upgrade path and the parts worth caring about.", tag: "Notes" },
];

export const STATS = [
  { label: "Projects", target: 18 },
  { label: "Technologies", target: 14 },
  { label: "Commits", target: 1200 },
  { label: "Coding Hours", target: 900 },
];
