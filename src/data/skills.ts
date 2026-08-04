export interface Skill {
  id: number;
  title: string;
  bullets: string[];
  tags: string[];
  markers: ('square' | 'circle' | 'triangle')[];
  span?: boolean;
}

export const skills: Skill[] = [
  {
    id: 1,
    title: 'Web Accessibility',
    markers: ['square'],
    bullets: [
      'Implementing WCAG 2.0/2.1/2.2 AA compliance through documented contrast ratios, screen reader support, keyboard navigation, and scalable typography',
      'Auditing web content and reviewing submissions against Government of Canada standards, including the Federal Identity Program and Official Languages Policy',
      'Building accessible UIs across platforms: custom CSS stylesheets for desktop, Compose semantics and TalkBack support for Android, and WET/Aurora Design System for government web',
    ],
    tags: ['WCAG 2.0/2.1/2.2', 'Screen Reader Support', 'Keyboard Navigation', 'Aurora Design System', 'WET'],
  },
  {
    id: 2,
    title: 'Full-Stack Web Development',
    markers: ['circle'],
    bullets: [
      'Building bilingual (EN/FR) web pages and applications with HTML5, CSS, JavaScript, PHP, Node.js, and Express.js',
      'Publishing and maintaining intranet and extranet content using Drupal CMS, EKME, and GCDocs',
      'Designing low-bandwidth-friendly experiences for users without reliable VPN or internet access',
    ],
    tags: ['HTML5', 'CSS', 'JavaScript', 'PHP', 'Node.js', 'Express.js', 'Drupal'],
  },
  {
    id: 3,
    title: 'Desktop & Mobile Applications',
    markers: ['triangle'],
    bullets: [
      'Developing JavaFX desktop applications with layered MVC architecture, SQLite persistence, and Maven build management',
      'Building Android apps in Kotlin with Jetpack Compose, Room Database, MVVM, and reactive data flow via Coroutines and StateFlow',
      'Scheduling background work and deep-link notifications with WorkManager',
    ],
    tags: ['Java', 'Kotlin', 'JavaFX', 'Jetpack Compose', 'Room', 'SQLite', 'MVVM'],
  },
  {
    id: 4,
    title: 'Backend & Data',
    markers: ['square', 'circle'],
    bullets: [
      'Designing object-oriented Java and Jakarta EE systems covering encapsulation, inheritance, and GoF design patterns',
      'Building and consuming REST-style APIs and networked applications using TCP/IP sockets and multi-threading in Linux environments',
      'Designing and querying relational databases in SQL, Oracle, and PL/SQL, applying normalization and ERD modeling; exploring NoSQL and graph databases',
    ],
    tags: ['Java', 'Jakarta EE', 'SQL', 'Oracle', 'MySQL', 'PL/SQL', 'REST APIs'],
  },
  {
    id: 5,
    title: 'Testing & Engineering Practices',
    markers: ['square', 'circle', 'triangle'],
    bullets: [
      'Achieving 100% pass rates across automated and manual test suites, including dedicated accessibility test cases',
      'Applying JUnit 5 for unit, DAO, and validation testing, with strict layer boundaries between View, Controller, Service, DAO, and Model',
      'Leading Agile capstone delivery as project lead, coordinating tasks and driving development across a team',
    ],
    tags: ['JUnit 5', 'Mockito', 'Git/GitHub', 'Agile/Scrum', 'Jenkins', 'Docker'],
    span: true,
  },
];