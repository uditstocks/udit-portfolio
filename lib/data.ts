/**
 * Single source of truth for all portfolio content.
 * Populated entirely from Udit Sharma's resume.
 * Edit values here to customise the site - components never hard-code content.
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
  phone: "+91 8602049101",
  github: "https://github.com/uditstocks",
  githubHandle: "uditstocks",
  linkedin: "https://www.linkedin.com/in/uditsharma9981",
  linkedinHandle: "uditsharma9981",
  // Drop / overwrite your latest résumé at: public/resume.pdf
  resumeUrl: "/resume.pdf",
  siteUrl: "https://udit-sharma.vercel.app",
  availability: "available for AI / agentic-engineering roles and open-source collaboration.",
} as const;

export const hero = {
  headline: "Hey, i'm Udit",
  subHeadline:
    "i build production-grade agentic AI systems - multi-agent orchestration, RAG pipelines, LLMOps, and workflows that actually ship.",
  currentlyLabel: "currently",
  currently: [
    "AI developer @ node and edges llp",
    "open-source contributor @ langchain",
  ],
};

export const about = {
  label: "about",
  lines: [
    "i'm an agentic-AI engineer building production-grade autonomous systems - MCP servers, multi-agent orchestration, RAG and retrieval pipelines, and LLM workflow design.",
    "i've shipped real-world AI systems end-to-end and landed merged pull requests in LangChain's official documentation - a site used by thousands of developers.",
    "right now i'm going deep on the x402 agent economy - the payment rails that let autonomous agents transact with each other.",
    "Open to AI Engineering roles | AI Consultancy | Technical collaborations.",
  ],
  facts: [
    { label: "based in", value: "Bhopal, India" },
    { label: "focus", value: "Agentic Systems · MCP · Retrieval" },
    { label: "languages", value: "English · Hindi" },
    { label: "interests", value: "Agentic AI · Stock Markets Equity research · Company financials" },
  ],
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    icon: "code",
    skills: ["Python (primary)", "TypeScript", "SQL"],
    note: "Familiar: JavaScript · React · Rust",
  },
  {
    title: "Agents & MCP",
    icon: "network",
    skills: [
      "MCP Server Development",
      "FastMCP",
      "MCP Tools / Resources / Prompts",
      "stdio & Streamable HTTP Transports",
      "OAuth 2.1 Remote MCP",
      "x402 Agent Economy",
      "LangGraph Multi-Agent Orchestration",
      "Supervisor & Sub-Agent Handoffs",
      "HITL Interrupts & Checkpointing",
      "LangChain",
      "LlamaIndex",
      "CrewAI",
      "Pydantic AI",
      "Agno",
      "LangServe",
      "Tool & Function Calling",
      "AI Assistants & Copilots",
      "Agentic AI System Design",
      "Multi-Agent Systems",
      "Memory Systems",
      "Parallel Agent Execution",
    ],
    note: "Exploring: Claude Agent SDK · Agent Skills",
  },
  {
    title: "LLM Engineering",
    icon: "boxes",
    skills: [
      "Context Engineering",
      "Structured Outputs",
      "LLM Evaluation",
      "Tracing & Observability (LangSmith, Langfuse)",
      "Guardrails & Prompt-Injection Defense",
      "Responsible AI",
      "Fine-Tuning",
      "Model Routing for Cost & Latency",
      "OpenAI-Compatible APIs",
      "Async Python (asyncio)",
      "LLM Workflow Orchestration",
      "Production-Grade AI Apps",
    ],
  },
  {
    title: "Retrieval",
    icon: "fileSearch",
    skills: [
      "Retrieval-Augmented Generation (RAG)",
      "Hybrid Search",
      "Hybrid RAG Pipelines",
      "Reranking",
      "Chunking",
      "Vector Databases",
      "pgvector",
      "FAISS",
    ],
  },
  {
    title: "Models",
    icon: "cpu",
    skills: [
      "Anthropic Claude",
      "Google Gemini",
      "NVIDIA NIM (Nemotron, Llama)",
      "Groq",
      "OpenRouter",
      "Ollama",
      "Hugging Face",
    ],
    note: "Exploring: OpenClaw",
  },
  {
    title: "Backend & Infra",
    icon: "wrench",
    skills: [
      "FastAPI (REST APIs)",
      "PostgreSQL",
      "SQLAlchemy",
      "Alembic",
      "OAuth 2.1 / JWT",
      "Docker",
      "Kubernetes (basic)",
      "Railway Deployment",
      "Git",
      "GitHub Actions",
      "CI/CD",
      "pytest (unit & integration)",
    ],
  },
];

export const experience: TimelineItem[] = [
  {
    id: 1,
    period: "Jun 2026 - Present",
    org: "Node and Edges LLP",
    role: "AI Developer Intern",
    tag: "current",
    description:
      "Designing multi-agent architectures and developing AI features end to end, alongside AI advisory work for the team and its stakeholders.",
    bullets: [
      "Developing AI features end to end - requirements and implementation through tests, documentation and code review - including two reviewed and merged pull requests to mcplint, the company's MCP security linter.",
      "Providing high-level AI advisory and consultancy to the team and stakeholders - evaluating frameworks and tooling, recommending architectures, and translating business requirements into technical plans and delivery timelines.",
      "Working within a disciplined engineering workflow - version control, code review and CI/CD - to ship reliable, maintainable and observable AI features.",
    ],
  },
  {
    id: 2,
    period: "Jun 2026 - Present",
    org: "P2P.me",
    role: "Developer Relations Engineer · Forge-Guild Cipher",
    tag: "current",
    description:
      "Part-time and remote - contributing code, technical documentation and client communication across P2P.me's open-source repositories.",
    bullets: [
      "Contributing code to P2P.me's open-source p2pkit and payment-integrator repositories, alongside technical documentation, reproducible bug reports and localization - with weekly written progress reports and deliverables kept on schedule.",
      "Taking part in international team and client meetings, owning client communication and follow-ups across time zones in a distributed team.",
    ],
  },
  {
    id: 3,
    period: "Ongoing",
    org: "LangChain",
    role: "Open-Source Contributor · langchain-ai/docs",
    description:
      "Five merged pull requests to LangChain's official documentation, used by thousands of developers worldwide.",
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
    subtitle: "Multi-Agent Trading MCP Server",
    year: "2026",
    description:
      "An MCP server for equity research and human-approved trading on NSE/BSE - a multi-agent trading system Claude and ChatGPT drive directly, with the host model reasoning while the server stays deterministic.",
    highlights: [
      "19 tools, 3 resources and 3 prompts - no model call and no model key on the server, which hands back indicator-level reasoning traces instead.",
      "Human-in-the-loop on every simulated trade - two-step orders (a preview, then a single-use expiring token) that pause for explicit approve/reject, and exactly one tool can place a trade.",
      "Caps, daily limits, kill switch and trading mode are enforced in the service layer, never from tool arguments - so no host call can bypass them.",
      "Hash-chained audit log and an AES-256-GCM encrypted credential vault.",
      "Replaced an earlier LangGraph supervisor CLI once the host model made it redundant - that CLI ran on ~10× fewer tokens per run (≈60K → ≈6K), traced end-to-end in LangSmith.",
    ],
    tech: ["Python", "MCP", "LangChain", "LangSmith", "Docker"],
    github: "https://github.com/uditstocks/Trinetra-Capital-AI",
    icon: "trendingUp",
    accent: "#3b82f6",
  },
  {
    id: 2,
    index: "02",
    title: "VectorlessRAG",
    subtitle: "Vectorless RAG on VectifyAI's PageIndex",
    year: "2026",
    description:
      "Document Q&A with no vector database and no embeddings - a four-stage query pipeline built on top of VectifyAI's open-source PageIndex TOC-tree indexer, with the upstream indexing kept intact.",
    highlights: [
      "A four-stage query pipeline - Librarian, Navigator, Reader, Generator - carries a question from the TOC tree to a cited answer, with human confirm / override / skip at every stage.",
      "An LLM selects the pages and states its reasoning - dropping the embedding model and vector store entirely, and with them a whole layer of infra, cost and setup.",
      "Every answer comes back with page-level citations or an explicit refusal, and malformed model output is parsed defensively rather than trusted.",
      "All model calls routed through LiteLLM to NVIDIA NIM.",
      "Evaluation docs state what is measured - indexing accuracy through upstream's verify_toc gate - and what is not yet: recall@k, faithfulness, latency.",
    ],
    tech: ["Python", "PageIndex", "LangChain", "LiteLLM", "NVIDIA NIM", "RAG", "Retrieval"],
    github: "https://github.com/uditstocks/PageIndex",
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
      "A multi-agent research engine that simulates a research team - parallel analyst personas run source-grounded interviews, synthesised into cited reports.",
    highlights: [
      "Parallel analyst personas run concurrent, source-grounded interviews via a map-reduce flow.",
      "Stateful LangGraph runs with SQLite checkpointing - fully resumable from the last step.",
      "Every answer carries inline citations (Wikipedia / DuckDuckGo) - no hallucination.",
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
      "Diagnosed a critical CI outage affecting every contributor - a deprecated Vale Snap package failing mid-build - and shipped a version-pinned binary fix that passed CI on the first attempt.",
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
