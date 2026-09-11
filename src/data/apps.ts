export interface StackApp {
  id: string;
  index: string;
  key: string;
  name: string;
  headline: string;
  description: string;
  tags: string[];
  url: string;
  host: string;
  meta: string;
}

export const APPS: StackApp[] = [
  {
    id: "curriculum-os",
    index: "01",
    key: "1",
    name: "CurriculumOS",
    headline: "Master the craft.",
    description:
      "An interactive software-engineering curriculum. Structured roadmaps and hands-on modules that take you from JavaScript fundamentals to full-stack architecture — no fluff, just a path.",
    tags: ["Roadmaps", "Modules", "JavaScript", "React", "Full-stack"],
    url: "https://curriculumos-six.vercel.app/",
    host: "curriculumos-six.vercel.app",
    meta: "Learning platform",
  },
  {
    id: "playbook-vercel",
    index: "02",
    key: "2",
    name: "Playbook",
    headline: "Every component, every library.",
    description:
      "A living catalog of UI building blocks. Browse components across libraries, compare implementations side by side, and copy production-ready code straight into your project.",
    tags: ["Components", "UI libraries", "Copy & paste", "Reference"],
    url: "https://playbook-eight-omega.vercel.app/",
    host: "playbook-eight-omega.vercel.app",
    meta: "Component library",
  },
  {
    id: "playbook-arena",
    index: "03",
    key: "3",
    name: "Playbook",
    headline: "The Arena mirror.",
    description:
      "The same component encyclopedia running on Arena — a second doorway into the library so the playbook is always one click away, whichever host you prefer.",
    tags: ["Components", "Arena build", "Mirror", "Reference"],
    url: "https://01a089ea-335d-7177-97cf-9a81defc8493.arena.site/",
    host: "01a089ea…arena.site",
    meta: "Alternate deploy",
  },
];
