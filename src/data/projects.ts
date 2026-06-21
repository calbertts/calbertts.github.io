export interface Project {
  title: string;
  description: string;
  highlights: string[];
  tags: string[];
  link?: string;
  icon: string;
}

export const projects: Project[] = [
  {
    title: "SIBA Semantic Shell",
    description: "A domain-specific language that replaces 90+ raw MCP tools with a single compact grammar for enterprise operations.",
    highlights: [
      "63% reduction in token usage",
      "3× faster execution",
      "Fine-tuned Gemma 4 model with LoRA"
    ],
    tags: ["TypeScript", "EBNF Grammar", "MLX", "Ollama", "MCP"],
    icon: "/icons/icon-ai.png"
  },
  {
    title: "Quick Quote AI Agent",
    description: "Voice-first AI insurance quoting experience. Led a team at NN Hackathon 2026.",
    highlights: [
      "Voice → Whisper → GPT-4o → Instant Quote",
      "Participated at NN HQ Hackathon, Netherlands",
      "Deployed on Azure Container Apps"
    ],
    tags: ["Python", "FastAPI", "React", "Azure OpenAI", "Whisper"],
    icon: "/icons/icon-trophy.png"
  },
  {
    title: "SIBA AI Agents Ecosystem",
    description: "Comprehensive AI agent ecosystem for GitHub Copilot CLI: 15+ skills, 9 specialized agents, custom MCP servers.",
    highlights: [
      "Multi-agent architecture with intelligent routing",
      "Custom MCP servers for AzDo, WSO2, SonarQube, AWS",
      "Automated sprint planning and code reviews"
    ],
    tags: ["TypeScript", "MCP", "AI Agents", "Azure DevOps"],
    icon: "/icons/icon-robot.png"
  },
  {
    title: "tmux-pilot",
    description: "Background watcher and notification system for tmux. Monitors pipelines, PRs, quality gates with real-time alerts.",
    highlights: [
      "Ephemeral & persistent watcher modes",
      "Native OS notifications via tmux status bar",
      "SQLite-backed state management"
    ],
    tags: ["Bash", "SQLite", "tmux"],
    link: "https://github.com/calbertts/tmux-pilot",
    icon: "/icons/icon-signal.png"
  },
];

