export type Marker = 'square-filled' | 'circle-filled' | 'square-outline' | 'tri-outline';
export type Theme = 'light' | 'dark';

export interface Project {
  id: number;
  title: string;
  stack: string[];
  description: string;
  marker: Marker;
  theme: Theme;
  github?: string;
  demo?: string;
  repoName?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Accessible Medication Reminder App',
    stack: ['Java', 'JavaFX', 'SQLite', 'JUnit 5'],
    description: 'A JavaFX desktop application for managing medications, built for senior adults with WCAG 2.1 AA accessibility compliance, screen reader support, keyboard navigation, and adjustable font sizes. Includes 54 passing unit and manual tests.',
    marker: 'circle-filled',
    theme: 'light',
    github: 'https://github.com/jennabeachcodes/AccessibleMedicationReminder',
    repoName: 'AccessibleMedicationReminder',
  },
  {
    id: 2,
    title: 'Notes App',
    stack: ['Kotlin', 'Jetpack Compose', 'Room', 'MVVM'],
    description: 'A Kotlin Android app demonstrating Jetpack Compose UI, Room persistence, WorkManager-scheduled notifications, and Compose Navigation. Supports full note CRUD, date/time reminders, and WCAG-compliant accessibility.',
    marker: 'square-filled',
    theme: 'light',
    github: 'https://github.com/jennabeachcodes/NotesApp',
    repoName: 'NotesApp',
  },
  {
    id: 3,
    title: 'Task Tracker APP',
    stack: ['Java', 'JavaFX', 'SQLite', 'Maven'],
    description: 'JavaFX desktop task manager with SQLite persistence. Built with Maven following an MVC pattern across View, Controller, Service, and DAO layers.',
    marker: 'square-outline',
    theme: 'light',
    github: 'https://github.com/jennabeachcodes/TaskTracker',
    repoName: 'TaskTracker',
  },
  {
    id: 4,
    title: 'DFO Intranet',
    stack: ['HTML5', 'CSS', 'Drupal', 'WET'],
    description: 'Bilingual EN/FR. WCAG 2.0/2.1. Government of Canada Identity Program. Low-bandwidth Coast Guard extranet.',
    marker: 'tri-outline',
    theme: 'light',
  },
];