export const personalInfo = {
  name: "Alex Morgan",
  title: "Full-Stack Developer",
  tagline: "I craft elegant digital experiences that live at the intersection of design and engineering.",
  bio: "I'm a passionate full-stack developer with 5+ years of experience building scalable web applications. I love turning complex problems into simple, beautiful, and intuitive solutions. When I'm not coding, you'll find me hiking, reading sci-fi, or experimenting with generative art.",
  location: "San Francisco, CA",
  availability: "Open to opportunities",
  email: "alex@example.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com",
  resumeUrl: "/resume.pdf",
};

export const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vue.js", "GraphQL"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Redis", "REST APIs", "tRPC"],
  },
  {
    category: "DevOps & Tools",
    items: ["Docker", "AWS", "Vercel", "GitHub Actions", "Terraform", "Linux", "Figma"],
  },
  {
    category: "Testing",
    items: ["Jest", "Playwright", "Cypress", "React Testing Library", "Vitest"],
  },
];

export const projects = [
  {
    slug: "lumina-ai",
    title: "Lumina AI",
    description:
      "An AI-powered content generation platform that helps marketers create high-quality copy at scale. Built with GPT-4 integration, real-time collaboration, and a custom rich-text editor.",
    longDescription:
      "Lumina AI is a full-featured SaaS platform that leverages the power of large language models to help marketing teams produce consistent, on-brand content at unprecedented speed. The platform features a custom rich-text editor built on ProseMirror, real-time collaboration via WebSockets, a brand voice training system, and a comprehensive analytics dashboard. I architected the entire system from the ground up, including the multi-tenant backend, the streaming AI response pipeline, and the billing integration with Stripe.",
    image: "https://www.get-lumina.com/images/lumina-ai-dashboard.png",
    tags: ["Next.js", "TypeScript", "OpenAI", "PostgreSQL", "Stripe", "WebSockets"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    slug: "orbit-design-system",
    title: "Orbit Design System",
    description:
      "A comprehensive React component library with 60+ accessible components, dark mode support, and full TypeScript types. Used by 3 production applications.",
    longDescription:
      "Orbit is a production-grade design system built to unify the UI across a suite of enterprise applications. It includes 60+ fully accessible components following WAI-ARIA guidelines, a robust theming system with CSS custom properties, Storybook documentation, automated visual regression testing with Chromatic, and a custom Figma plugin for design-to-code handoff. The library is tree-shakeable and ships with full TypeScript definitions.",
    image: "https://archives.bulbagarden.net/media/upload/thumb/d/de/Trailblaze_IX.png/800px-Trailblaze_IX.png",
    tags: ["React", "TypeScript", "Storybook", "Radix UI", "CSS Variables", "Chromatic"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    slug: "trailblaze",
    title: "Trailblaze",
    description:
      "A social hiking app that lets outdoor enthusiasts discover trails, log adventures, and connect with fellow hikers. Features offline maps and GPS tracking.",
    longDescription:
      "Trailblaze is a cross-platform mobile application built with React Native that helps hikers discover new trails, track their adventures with GPS, and share experiences with a community of outdoor enthusiasts. Key features include offline map caching using MapLibre, real-time GPS tracking with elevation profiling, a social feed with photo sharing, trail condition reports, and an achievement system. The backend is built on Supabase with PostGIS for geospatial queries.",
    image: "https://res.cloudinary.com/hevo/image/upload/v1677835790/hevo-docs/AzureSynapseAnalytics329/DataFlowInAPipeline.png",
    tags: ["React Native", "Supabase", "PostGIS", "MapLibre", "Expo", "TypeScript"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    slug: "dataflow-pipeline",
    title: "DataFlow Pipeline",
    description:
      "A visual ETL pipeline builder that lets data engineers design, test, and deploy data workflows without writing boilerplate code.",
    longDescription:
      "DataFlow Pipeline is a low-code data engineering tool that provides a drag-and-drop interface for building complex ETL workflows. Engineers can connect to 50+ data sources, transform data using a visual node editor, schedule jobs with cron expressions, and monitor pipeline health through a real-time dashboard. The execution engine is built on Apache Airflow with a custom operator library, and the frontend uses React Flow for the node-based editor.",
    image: "https://goodcrypto.app/wp-content/uploads/2021/03/image13.png",
    tags: ["Python", "Apache Airflow", "React Flow", "FastAPI", "Docker", "PostgreSQL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    slug: "cryptowatch",
    title: "CryptoWatch",
    description:
      "A real-time cryptocurrency portfolio tracker with price alerts, P&L analysis, and multi-exchange support via unified API.",
    longDescription:
      "CryptoWatch is a real-time portfolio management tool for cryptocurrency investors. It aggregates data from 10+ exchanges via a unified WebSocket API, provides live P&L calculations, customizable price alerts via email/SMS, and detailed analytics including ROI, Sharpe ratio, and drawdown metrics. The app uses Redis for caching live price feeds and a time-series database for historical data.",
    image: "https://media.licdn.com/dms/image/v2/D4E12AQH47j3-3m6JfA/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1685841569912?e=2147483647&v=beta&t=3-FnCrUatszY83Ydig4cm-G5k0wJUByLDYxnUIJ8Q64",
    tags: ["Next.js", "WebSockets", "Redis", "TimescaleDB", "Chart.js", "TypeScript"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    slug: "devnotes",
    title: "DevNotes",
    description:
      "A developer-focused note-taking app with Markdown support, code syntax highlighting, and instant full-text search across thousands of notes.",
    longDescription:
      "DevNotes is a minimalist note-taking application designed specifically for developers. It features a split-pane Markdown editor with live preview, syntax highlighting for 100+ languages via Shiki, instant full-text search powered by Fuse.js, tag-based organization, and export to PDF/HTML. Notes are stored locally with optional cloud sync via a lightweight backend. The app is built as a Progressive Web App with offline support.",
    image: "https://thumbs.dreamstime.com/b/years-experience-gold-label-vector-illustration-111515907.jpg",
    tags: ["React", "Electron", "Shiki", "Fuse.js", "IndexedDB", "PWA"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
  },
];

export const stats = [
  { label: "Years Experience", value: "5+" },
  { label: "Projects Shipped", value: "40+" },
  { label: "Happy Clients", value: "20+" },
  { label: "GitHub Stars", value: "1.2k" },
];
