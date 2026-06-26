/**
 * Single source of truth for all portfolio content.
 * Populated entirely from Udit Sharma's resume.
 * Edit values here to customise the site — components never hard-code content.
 */

export type IconName =
  | "github"
  | "linkedin"
  | "mail"
  | "phone"
  | "fileText"
  | "mapPin"
  | "code"
  | "network"
  | "boxes"
  | "cpu"
  | "wrench"
  | "graduation"
  | "award"
  | "trendingUp"
  | "fileSearch"
  | "gitPullRequest"
  | "bug"
  | "bookOpen"
  | "database";

export interface NavLink {
  label: string;
  href: string;
}

export interface SkillGroup {
  title: string;
  icon: IconName;
  skills: string[];
  note?: string;
}

export interface TimelineItem {
  id: number;
  period: string;
  org: string;
  role: string;
  location?: string;
  description: string;
  bullets?: string[];
  tag?: string;
}

export interface Project {
  id: number;
  index: string;
  title: string;
  subtitle: string;
  year: string;
  description: string;
  highlights: string[];
  tech: string[];
  github?: string;
  demo?: string;
  icon: IconName;
  accent: string;
}

export interface OpenSourceItem {
  id: number;
  title: string;
  description: string;
  meta: string;
  link: string;
  icon: IconName;
}

export interface EducationItem {
  id: number;
  period: string;
  institution: string;
  degree: string;
  location: string;
  detail?: string;
}

export interface Certification {
  id: number;
  issuer: string;
  items: string[];
}

export interface ContactLink {
  label: string;
  href: string;
  icon: IconName;
  external?: boolean;
}

export const personal = {
  name: "Udit Sharma",
  firstName: "Udit",
  monogram: "US",
  role: "AI Engineer",
  title: "Agentic Ai Systems",
  location: "Bhopal, India",
  email: "uditsharma9981@gmail.com",
  phone: "+91 86020 49101",
  github: "https://github.com/uditstocks",
  githubHandle: "uditstocks",
  linkedin: "https://linkedin.com/in/udit-sharma",
  linkedinHandle: "udit-sharma",
  // Drop / overwrite your latest résumé at: public/resume.pdf
  resumeUrl: "/resume.pdf",
  siteUrl: "https://udit-sharma.vercel.app",
  availability: "available for AI / agentic-engineering roles and open-source collaboration.",
} as const;

export const hero = {
  headline: "Hey, i'm Udit",
  subHeadline:
    "i build production-grade autonomous AI systems - multi-agent orchestration, RAG pipelines, and LLM workflows that actually ship.",
  currentlyLabel: "currently",
  currently: [
    "AI developer @ node and edges llp",
    "open-source contributor @ langchain",
  ],
};

export const about = {
  label: "about",
  lines: [
    "i'm an agentic-AI engineer building production-grade autonomous systems across multi-agent orchestration, RAG pipelines, and LLM workflow design.",
    "i've shipped real-world AI systems end-to-end and landed merged pull requests in LangChain's official documentation - a site used by thousands of developers.",
    "Open to AI Engineering roles | AI Consultancy | Technical collaborations.",
  ],
  facts: [
    { label: "based in", value: "Bhopal, India" },
    { label: "focus", value: "Agentic AI & LLM Orchestration" },
    { label: "languages", value: "English · Hindi" },
    { label: "interests", value: "Agentic AI · Stock Markets Equity research · Company financials" },
  ],
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    icon: "code",
    skills: ["Python", "TypeScript"],
    note: "Familiar: JavaScript · React · Rust",
  },
  {
    title: "AI Frameworks",
    icon: "network",
    skills: ["LangChain", "LangGraph", "CrewAI", "Pydantic AI", "Agno", "FastAPI", "LangServe"],
  },
  {
    title: "AI Architecture",
    icon: "boxes",
    skills: [
      "Agentic AI System Design",
      "Multi-Agent Systems",
      "LLM Workflow Orchestration",
      "RAG & Hybrid RAG Pipelines",
      "Tool-Calling Frameworks",
      "Memory Systems",
      "Parallel Agent Execution",
      "Production-Grade AI Apps",
    ],
  },
  {
    title: "LLM Providers",
    icon: "cpu",
    skills: ["Anthropic", "Google Gemini", "Groq", "NVIDIA NIM"],
  },
  {
    title: "Tools & Platforms",
    icon: "wrench",
    skills: [
      "SQL / PostgreSQL",
      "pgvector",
      "FAISS",
      "Docker",
      "Kubernetes",
      "Git",
      "GitHub Actions",
      "CI/CD",
      "LangSmith",
    ],
  },
];

export const experience: TimelineItem[] = [
  {
    id: 1,
    period: "Jun 2026 — Present",
    org: "Node and Edges LLP",
    role: "AI Developer Intern",
    tag: "current",
    description:
      "Building and shipping production-grade AI systems end-to-end as part of a professional engineering team.",
    bullets: [
      "Delivering real-world projects across the agentic-AI and LLM application stack, from prototype to production.",
      "Working within a disciplined engineering workflow — version control, code review and CI/CD — to ship reliable, maintainable and observable AI features.",
    ],
  },
  {
    id: 2,
    period: "Ongoing",
    org: "LangChain",
    role: "Open-Source Contributor · langchain-ai/docs",
    description:
      "Merged pull requests to LangChain's official documentation, used by thousands of developers worldwide.",
    bullets: [
      "Authored a comprehensive PGVectorStore vs. PGVector comparison and documented LangGraph's lifecycle methods.",
      "Diagnosed and surgically fixed a repo-wide CI outage, restoring reliable builds for every contributor.",
    ],
  },
];

export const projects: Project[] = [
  {
    id: 1,
    index: "01",
    title: "Trinetra Capital AI",
    subtitle: "Autonomous Multi-Agent Trading System",
    year: "2026",
    description:
      "A multi-agent trading system where a supervisor LLM routes work to specialised research & trading agents — with human approval on every order and ~10× lower token cost.",
    highlights: [
      "Supervisor routes intent to dedicated Research & Trading agents via agent-to-agent handoffs on LangGraph.",
      "Human-in-the-loop on every simulated trade — it pauses for explicit approve/reject before anything executes.",
      "~10× fewer tokens per run (≈60K → ≈6K), traced end-to-end in LangSmith.",
    ],
    tech: ["Python", "LangGraph", "LangChain", "NVIDIA NIM", "Groq", "LangSmith", "Docker"],
    github: "https://github.com/uditstocks",
    icon: "trendingUp",
    accent: "#3b82f6",
  },
  {
    id: 2,
    index: "02",
    title: "PageIndex",
    subtitle: "Vectorless RAG Pipeline",
    year: "2026",
    description:
      "Document Q&A with no vector database and no embeddings — structural / keyword retrieval replaces semantic vector search.",
    highlights: [
      "Drops the embedding model and vector store entirely, removing a whole layer of infra, cost and setup.",
      "Answers stay grounded in the source documents, on a lightweight, low-dependency pipeline.",
    ],
    tech: ["Python", "LangChain", "RAG", "Retrieval"],
    github: "https://github.com/uditstocks",
    icon: "fileSearch",
    accent: "#10b981",
  },
  {
    id: 3,
    index: "03",
    title: "ARES",
    subtitle: "Autonomous Research & Multi-Agent Evaluation Engine",
    year: "2025",
    description:
      "A multi-agent research engine that simulates a research team — parallel analyst personas run source-grounded interviews, synthesised into cited reports.",
    highlights: [
      "Parallel analyst personas run concurrent, source-grounded interviews via a map-reduce flow.",
      "Stateful LangGraph runs with SQLite checkpointing — fully resumable from the last step.",
      "Every answer carries inline citations (Wikipedia / DuckDuckGo) — no hallucination.",
    ],
    tech: ["Python", "LangGraph", "LangChain", "NVIDIA NIM", "Ollama", "SQLite", "Tavily"],
    github: "https://github.com/uditstocks/ARES",
    icon: "network",
    accent: "#a855f7",
  },
];

export const openSource: OpenSourceItem[] = [
  {
    id: 1,
    title: "PGVectorStore vs. PGVector",
    description:
      "Authored a comprehensive comparison for the official docs, clarifying the architectural trade-offs and helping developers choose the right Postgres-backed vector store.",
    meta: "PR #3742",
    link: "https://github.com/langchain-ai/docs/pull/3742",
    icon: "database",
  },
  {
    id: 2,
    title: "LangGraph lifecycle methods",
    description:
      "Documented the previously-undocumented set_entry_point and set_finish_point methods, enabling developers to build graph-based agent workflows correctly without trial-and-error.",
    meta: "PR #3833",
    link: "https://github.com/langchain-ai/docs/pull/3833",
    icon: "bookOpen",
  },
  {
    id: 3,
    title: "delete_old_messages fix",
    description:
      "Corrected a misleading example in the message-management docs, preventing developers from shipping broken message-retention logic to production.",
    meta: "PR #4009",
    link: "https://github.com/langchain-ai/docs/pull/4009",
    icon: "gitPullRequest",
  },
  {
    id: 4,
    title: "Repo-wide CI outage fix",
    description:
      "Diagnosed a critical CI outage affecting every contributor — a deprecated Vale Snap package failing mid-build — and shipped a version-pinned binary fix that passed CI on the first attempt.",
    meta: "Issue #3837 · PR #3841",
    link: "https://github.com/langchain-ai/docs/pull/3841",
    icon: "bug",
  },
];

export const education: EducationItem[] = [
  {
    id: 1,
    period: "Expected 2027",
    institution: "Technocrats Institute of Technology",
    degree: "B.Tech, Artificial Intelligence",
    location: "Bhopal, India",
    detail:
      "Specialization in AI & Computer Science Engineering. Coursework: Agentic AI, Generative AI, RAG Systems, LLM Workflow Design, Python, NLP, Data Structures & Algorithms.",
  },
  {
    id: 2,
    period: "2023",
    institution: "Maria Mata Sr. Sec. School",
    degree: "Senior Secondary (Class XII)",
    location: "Chhatarpur, India",
  },
];

export const certifications: Certification[] = [
  { id: 1, issuer: "IBM", items: ["Generative AI", "Artificial Intelligence Fundamentals"] },
  { id: 2, issuer: "Red Hat", items: ["AI Foundations Technologist Certificate"] },
  { id: 3, issuer: "LangChain", items: ["Foundations to LangGraph"] },
  { id: 4, issuer: "CrewAI", items: ["AI Agents System"] },
  { id: 5, issuer: "Cisco", items: ["Python Essentials 1", "Python Essentials 2"] },
];

export const contactLinks: ContactLink[] = [
  { label: "github", href: personal.github, icon: "github", external: true },
  { label: "linkedin", href: personal.linkedin, icon: "linkedin", external: true },
  { label: "email", href: `mailto:${personal.email}`, icon: "mail" },
  { label: "resume", href: personal.resumeUrl, icon: "fileText", external: true },
  { label: "phone", href: "tel:+918602049101", icon: "phone" },
];

export const navLinks: NavLink[] = [
  { label: "about", href: "#about" },
  { label: "work", href: "#work" },
  { label: "experience", href: "#experience" },
  { label: "contact", href: "#contact" },
];

export const quote = {
  text: "Wise men learn more from fools than fools from the wise.",
  author: "Cato the Elder",
} as const;

export const sections = {
  about: "about",
  skills: "skills",
  experience: "experience",
  work: "selected work",
  openSource: "open source",
  education: "education",
  certifications: "certifications",
  contact: "contact",
} as const;
