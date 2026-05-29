export interface SkillCategory {
  title: string;
  icon: string; // emoji
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages & Runtimes",
    icon: "💻",
    skills: ["TypeScript", "JavaScript", "Python", "Java", "Bash", "HTML/CSS"]
  },
  {
    title: "Cloud & Infrastructure",
    icon: "☁️",
    skills: ["AWS Lambda", "CloudFormation", "S3", "Azure DevOps", "Docker", "Kubernetes", "Cloudflare"]
  },
  {
    title: "AI & Machine Learning",
    icon: "🧠",
    skills: ["LLM Fine-tuning (LoRA)", "Ollama", "Gemma 4", "MLX", "MCP Servers", "RAG", "Prompt Engineering", "OpenAI API"]
  },
  {
    title: "Architecture & APIs",
    icon: "🏗️",
    skills: ["Serverless Microservices", "REST API Design", "Event-Driven", "Domain-Driven Design", "WSO2 Gateway", "GraphQL"]
  },
  {
    title: "DevOps & Quality",
    icon: "🔧",
    skills: ["CI/CD Pipelines", "SonarQube", "Jest", "Playwright", "ESLint", "GitHub Actions", "Jenkins"]
  },
  {
    title: "Leadership",
    icon: "🎯",
    skills: ["Squad Lead (6 people)", "Sprint Planning", "Scrum (Certified)", "Code Reviews", "Mentoring", "Technical Workshops"]
  }
];
