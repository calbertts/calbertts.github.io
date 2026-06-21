export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages & Runtimes",
    icon: "/icons/icon-code.png",
    skills: ["TypeScript", "JavaScript", "Python", "Java", "Bash", "HTML/CSS"]
  },
  {
    title: "Cloud & Infrastructure",
    icon: "/icons/icon-cloud.png",
    skills: ["AWS Lambda", "CloudFormation", "S3", "Azure DevOps", "Docker", "Kubernetes", "Cloudflare"]
  },
  {
    title: "AI & Machine Learning",
    icon: "/icons/icon-ai.png",
    skills: ["LLM Fine-tuning (LoRA)", "Ollama", "Gemma 4", "MLX", "MCP Servers", "RAG", "Prompt Engineering", "OpenAI API"]
  },
  {
    title: "Architecture & APIs",
    icon: "/icons/icon-architecture.png",
    skills: ["Serverless Microservices", "REST API Design", "Event-Driven", "Domain-Driven Design", "WSO2 Gateway", "GraphQL"]
  },
  {
    title: "DevOps & Quality",
    icon: "/icons/icon-devops.png",
    skills: ["CI/CD Pipelines", "SonarQube", "Jest", "Playwright", "ESLint", "GitHub Actions", "Jenkins"]
  },
  {
    title: "Leadership",
    icon: "/icons/icon-leadership.png",
    skills: ["Squad Lead (6 people)", "Sprint Planning", "Scrum (Certified)", "Code Reviews", "Mentoring", "Technical Workshops"]
  }
];
