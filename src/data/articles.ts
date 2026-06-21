export interface Article {
  title: string;
  description: string;
  url: string;
  icon: string;
}

export const articles: Article[] = [
  {
    title: "Unix Pipelines with cURL & Serverless",
    description: "Exploring how to compose serverless functions using Unix pipe patterns for data transformation workflows.",
    url: "https://calbertts.medium.com",
    icon: "/icons/icon-chain.png"
  },
  {
    title: "Writing Native Modules in C for QuickJS",
    description: "Deep dive into extending the QuickJS engine with native C modules for high-performance operations.",
    url: "https://calbertts.medium.com",
    icon: "/icons/icon-lightning.png"
  },
  {
    title: "Async Code for QuickJS Engine",
    description: "Implementing asynchronous patterns in the lightweight QuickJS JavaScript engine.",
    url: "https://calbertts.medium.com",
    icon: "/icons/icon-async.png"
  },
  {
    title: "Docker and Fuzzy Finder (fzf)",
    description: "Combining Docker container management with fuzzy finder for streamlined developer workflows.",
    url: "https://calbertts.medium.com",
    icon: "/icons/icon-docker.png"
  },
  {
    title: "Electron Apps in macOS Using Docker",
    description: "Building and packaging Electron desktop applications within Docker containers on macOS.",
    url: "https://calbertts.medium.com",
    icon: "/icons/icon-monitor.png"
  }
];
