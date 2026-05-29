export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
  tags: string[];
}

export const experience: Experience[] = [
  {
    company: "Nationale-Nederlanden (NN Group)",
    role: "Software Engineer & Squad Lead",
    period: "Oct 2024 — Present",
    location: "Madrid, Spain",
    highlights: [
      "Leading a 6-person squad replacing a legacy core banking system with cloud-native architecture",
      "Designed MCP servers and AI agents that automate stack generation, improving development velocity",
      "Active member of the AI Circle initiative, contributing to enterprise AI strategy",
      "Selected for international AI Hackathon at NN headquarters in the Netherlands"
    ],
    tags: ["AI Agents", "MCP", "LLM", "TypeScript", "React", "Node.js", "Azure", "Docker", "CI/CD"]
  },
  {
    company: "Cognizant Technology Solutions",
    role: "Senior Software Developer & Team Manager",
    period: "Mar 2021 — Sep 2024",
    location: "Madrid, Spain",
    highlights: [
      "Managed a team of 3 developers, overseeing task allocation, code reviews, and professional development",
      "Delivered enterprise-grade solutions for major European financial and insurance clients",
      "Implemented CI/CD pipelines and containerized deployment strategies"
    ],
    tags: ["Node.js", "TypeScript", "Azure", "Firebase", "Jest", "Docker"]
  },
  {
    company: "Aser Information Technologies",
    role: "Full-Stack Developer",
    period: "Mar 2019 — Mar 2021",
    location: "Madrid, Spain",
    highlights: [
      "Built and maintained full-stack applications with Node.js and Vue.js",
      "Automated testing and deployment pipelines with Jenkins and Docker"
    ],
    tags: ["Node.js", "Vue.js", "Jenkins", "Docker", "Puppeteer"]
  },
  {
    company: "Optiva Media (Telecom)",
    role: "Backend Developer",
    period: "Mar 2018 — Mar 2019",
    location: "Madrid, Spain",
    highlights: [
      "Developed MediaStream — OTT streaming platform for telecom operators including Orange",
      "Resolved critical Node.js performance issues on AWS infrastructure"
    ],
    tags: ["AWS", "Node.js", "Lambda", "S3", "MySQL"]
  },
  {
    company: "Klikin Deals",
    role: "Full-Stack Developer",
    period: "Jul 2017 — Mar 2018",
    location: "Madrid, Spain",
    highlights: [
      "Developed APIs for Waylet (Repsol's digital wallet) and Klikin loyalty platform",
      "Created integration tools and maintained production microservices"
    ],
    tags: ["Node.js", "MongoDB", "Docker", "Electron"]
  },
  {
    company: "System Group IT",
    role: "Full-Stack Developer & Tech Lead",
    period: "Jul 2016 — Jul 2017",
    location: "Colombia → Spain (Remote)",
    highlights: [
      "Led design and implementation of 'Ejecutivo Virtual' — real-time banking communication platform",
      "Took the product from prototype to pilot testing with a bank division"
    ],
    tags: ["React", "Socket.IO", "Electron", "Node.js", "Docker"]
  },
  {
    company: "Dreamcode",
    role: "Full-Stack Java Developer",
    period: "May 2014 — Jul 2016",
    location: "Cali, Colombia",
    highlights: [
      "Core developer of Connected Commerce platform — visual mapping tools, BPMN workflow designers",
      "Built a custom GWT framework to accelerate Java-based UI development",
      "Worked for USA clients including Consensus and Target"
    ],
    tags: ["Java", "Spring", "GWT", "Hibernate", "Selenium"]
  },
  {
    company: "IP Total Software",
    role: "Java Developer & Mobile Lead",
    period: "Feb 2013 — May 2014",
    location: "Cali, Colombia",
    highlights: [
      "Co-led mobile apps division; designed a JavaScript framework for web/mobile app creation",
      "Developed RFID-based mobile applications and web services"
    ],
    tags: ["Java", "Android", "JavaScript", "GWT", "RFID"]
  }
];
