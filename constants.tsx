import {
  MonitorX,
  Clock,
  HelpCircle,
  Rocket,
  Laptop,
  BrainCircuit,
  Layers,
  MessageSquare,
  FileText,
  Hammer,
  CheckCircle,
  TrendingUp,
  Target,
  Zap,
  DollarSign,
  UserCheck,
  Puzzle,
  Search,
  BarChart,
  Code,
  ShoppingBag,
  Bot,
  BookOpen,
  LineChart,
  Megaphone,
  Eye,
  Lightbulb,
  Map,
  Palette,
  PenTool,
  Workflow,
  Users
} from 'lucide-react';
import { PainPoint, Service, Step, CaseStudy, Differentiator, Testimonial, PricingPackage, FAQItem } from './types';

export const PAIN_POINTS: PainPoint[] = [
  {
    id: 1,
    icon: MonitorX,
    title: "Outdated Website Costing You Customers",
    description: "Your website looks like it's from 2010, and potential customers are clicking away within seconds—losing you thousands in revenue."
  },
  {
    id: 2,
    icon: Clock,
    title: "Wasting Hours on Repetitive Tasks",
    description: "Your team spends 20+ hours per week on manual data entry, scheduling, and tasks that AI could handle in minutes."
  },
  {
    id: 3,
    icon: HelpCircle,
    title: "Paying Too Much for Unclear Results",
    description: "You've hired developers or agencies before, but got vague timelines, surprise costs, and websites that didn't move the needle."
  },
  {
    id: 4,
    icon: Rocket,
    title: "Missing Out on Modern Solutions",
    description: "Your competitors are using AI automation and modern web tools to scale faster while you're stuck with outdated systems."
  }
];

export const SERVICES: Service[] = [
  {
    id: 1,
    icon: Laptop,
    title: "Web Development",
    description: "Modern, fast, and scalable web applications built with cutting-edge technology. We blend AI-assisted development with traditional coding excellence to deliver products that perform beautifully and scale effortlessly.",
    features: [
      "Custom platforms",
      "SaaS products",
      "Enterprise dashboards",
      "Complex web applications"
    ],
    ctaText: "Explore Web Dev"
  },
  {
    id: 2,
    icon: ShoppingBag,
    title: "Shopify Development",
    description: "Complete e-commerce solutions that convert visitors into customers. From stunning storefronts to custom integrations and automated workflows, we build Shopify stores that drive revenue.",
    features: [
      "Online retailers",
      "D2C brands",
      "Physical product businesses",
      "Custom themes & apps"
    ],
    ctaText: "Explore Shopify"
  },
  {
    id: 3,
    icon: BrainCircuit,
    title: "AI Automation Agents",
    description: "Intelligent automation that works while you sleep. We build custom AI agents that handle repetitive tasks, customer support, data processing, and complex workflows—giving you superhuman efficiency.",
    features: [
      "Task automation",
      "Customer support bots",
      "Data processing",
      "Workflow optimization"
    ],
    ctaText: "Explore AI Agents"
  },
  {
    id: 4,
    icon: FileText,
    title: "Product Documentation",
    description: "Crystal-clear documentation that users actually read. We create comprehensive guides, API docs, knowledge bases, and technical content that empowers your users and reduces support tickets.",
    features: [
      "SaaS products",
      "API platforms",
      "Internal tools",
      "Developer guides"
    ],
    ctaText: "Explore Docs"
  },
  {
    id: 5,
    icon: TrendingUp,
    title: "Product Profitability Analysis",
    description: "Strategic insights that de-risk your product journey. Before you invest months and money, we analyze market fit, competitive landscape, monetization models, and growth potential.",
    features: [
      "Pre-launch analysis",
      "Product pivots",
      "Feature validation",
      "Market entry strategy"
    ],
    ctaText: "Analyze Vision"
  },
  {
    id: 6,
    icon: Rocket,
    title: "Product Growth & Marketing",
    description: "Data-driven strategies that compound your growth. From SEO and content marketing to conversion optimization and user acquisition, we implement systems that consistently bring qualified customers.",
    features: [
      "Post-launch growth",
      "User acquisition",
      "Market expansion",
      "Scaling strategies"
    ],
    ctaText: "Boost Growth"
  }
];

export const PROCESS_STEPS: Step[] = [
  {
    id: 1,
    number: "01",
    icon: Eye,
    title: "Vision",
    description: "We start by understanding your big picture. What are you building? Why does it matter? Who is it for? We map out the initial concept.",
    timeline: "Discovery"
  },
  {
    id: 2,
    number: "02",
    icon: Map,
    title: "Strategy & Analysis",
    description: "We dive deep into market fit, monetization, and technical feasibility. We de-risk the project before writing a single line of code.",
    timeline: "Planning"
  },
  {
    id: 3,
    number: "03",
    icon: Palette,
    title: "Design",
    description: "Crafting the user experience and interface. We ensure the product is intuitive, beautiful, and aligned with your brand identity.",
    timeline: "UX/UI"
  },
  {
    id: 4,
    number: "04",
    icon: Code,
    title: "Develop",
    description: "Building the core product using modern tech stacks (Web, Shopify, or Custom). We blend AI tools with expert engineering.",
    timeline: "Build"
  },
  {
    id: 5,
    number: "05",
    icon: Bot,
    title: "Automate",
    description: "Integrating AI agents and workflow automation to streamline operations and enhance product functionality.",
    timeline: "Optimization"
  },
  {
    id: 6,
    number: "06",
    icon: Rocket,
    title: "Scale",
    description: "Launching the product and shifting focus to growth marketing, user acquisition, and continuous optimization.",
    timeline: "Growth"
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 1,
    slug: "liquidity-io",
    client: "Liquidity.io",
    industry: "Marketing Technology & Content Automation",
    services: ["Full-Stack Development", "AI Automation", "Product Strategy"],
    challenge: "Needed a complete platform for content & marketing automation.",
    solution: "Full-stack web application with lead gen tools, SEO blog systems, social media management, and document workflows.",
    results: [
      "All-in-one platform",
      "12+ Integrated Features",
      "Marketing Automation",
      "Full-stack Web App"
    ],
    image: "/assets/banner/liquidityio_banner.png",
    testimonial: "Working with ZenithLabs felt like having an extension of our own team. They understood our vision immediately.",
    testimonialAuthor: "Product Lead, Liquidity.io",
    overview: "Liquidity.io is a digital marketplace and regulated ATS focused on giving investors access to private-market instruments with real-time tracking, price alerts and compliance-first flows. The product positions itself as a mobile-first, institutional-grade platform for secondary trading in private assets.",
    painPointsSolved: [
      "Liquidity and price discovery in illiquid private assets",
      "Compliance, onboarding and accredited-investor management for regulated secondary trades",
      "Real-time portfolio visibility and alerts"
    ],
    userPersonas: [
      "High-net-worth individuals and family offices seeking exposure to pre-IPO/private assets",
      "Institutional allocators and funds executing secondary trades or private credit allocations",
      "Company founders/insiders needing an orderly secondary execution channel"
    ],
    marketSize: {
      tam: "$12–22T (Global private markets AUM)",
      sam: "$300B–$1T (Secondary markets for private company stock + private credit)",
      som: "$1B–$10B (Initial near-term market capture)"
    },
    techStack: {
      frontend: "React / React Native (mobile), Next.js",
      backend: "Node.js / Python services, PostgreSQL, Redis",
      integrations: "Payment/wire rails, KYC/AML providers, custody/transfer agents, SEC/regulatory integrations"
    },
    buildTimeline: "Core MVP (order book, onboarding, compliance): 6–10 months. Fully regulated product: 12–24 months.",
    resourcesNeeded: "Team: 2–3 backend, 2 frontend/mobile, 1–2 ML/data, 1 compliance lead, 1 PM, 1–2 designers.",
    analyticsSetup: "Segment/Snowplow for events, Mixpanel/Amplitude for product, GA for marketing. KPIs: active traders, volume, settlement time.",
    marketingEfforts: "Content (blog), LinkedIn/X presence, app store listing, PR & thought leadership aimed at institutional channels."
  },
  {
    id: 2,
    slug: "berryflow-io",
    client: "BerryFlow.io",
    industry: "SaaS & Marketing Technology",
    services: ["Web Development", "AI Integration", "Growth Strategy"],
    challenge: "Marketers needed to move faster with content creation.",
    solution: "End-to-end content automation platform with intelligent workflows, document libraries, and creative tools.",
    results: [
      "AI Content Creation",
      "SaaS Platform",
      "Intelligent Workflows",
      "Streamlined Ops"
    ],
    image: "/assets/banner/berryflowio_banner.png",
    testimonial: "The AI automation they built saved us 20+ hours per week. It paid for itself in the first month.",
    testimonialAuthor: "Marketing Director, BerryFlow",
    overview: "Berry provides an AI-powered Customer Success platform (AI CSM) that automates onboarding, support, training, and internal co-pilot functions to scale post-sales operations without proportional headcount increases.",
    painPointsSolved: [
      "Scaling white-glove onboarding and support without hiring more CSMs",
      "Knowledge retention and consistent execution of CS playbooks",
      "Ticket deflection and training at scale"
    ],
    userPersonas: [
      "VP/Head of Customer Success in enterprise SaaS companies",
      "CS managers wanting to reduce time-to-value and improve NRR",
      "Product teams seeking to reduce support overhead"
    ],
    marketSize: {
      tam: "$5–15B+ (Global customer success & post-sales software market)",
      sam: "$500M–$2B (AI CSM platforms for mid-to-large SaaS)",
      som: "$5–50M (Initial enterprise deployments)"
    },
    techStack: {
      frontend: "React/Next.js",
      backend: "Node/Python",
      integrations: "Vector DB (Pinecone/Weaviate), LLM orchestration, Zendesk/Gainsight integrations"
    },
    buildTimeline: "Product MVP: 4–8 months. Enterprise-grade security & workflows: 9–18 months.",
    resourcesNeeded: "3–5 backend, 2 frontend, 2 ML/AI, 1 pre-sales, 1 product, 1 designer.",
    analyticsSetup: "Product analytics (deflection), CS metrics (TTV, NRR), integration dashboards.",
    marketingEfforts: "Enterprise demo/bookings, content for CS leaders, outbound/partnerships with CRM vendors."
  },
  {
    id: 3,
    slug: "marchain-io",
    client: "Marchain.io",
    industry: "Blockchain & Web3",
    services: ["Technical Development", "Strategic Partnership", "Infrastructure"],
    challenge: "Requires robust blockchain infrastructure and web3 solutions.",
    solution: "Strategic partnership delivering technical development and next-gen decentralized applications.",
    results: [
      "Blockchain Infra",
      "Web3 Solutions",
      "Strategic Partnership",
      "Decentralized Apps"
    ],
    image: "/assets/banner/marchainio_banner.png",
    testimonial: "From strategy to deployment, they handled everything. Best decision we made for our product.",
    testimonialAuthor: "CTO, Marchain.io",
    overview: "Marchain.io is a product-building and growth platform focused on helping entrepreneurs build products fast: weekly insights, no-code tools, 1:1 guidance, automation services and courses for founders and builders.",
    painPointsSolved: [
      "Slow product discovery & execution for founders",
      "Confusion over tool selection and no-code automation",
      "Need for mentorship and execution templates"
    ],
    userPersonas: [
      "Early founders & solo entrepreneurs wanting fast prototyping",
      "Product managers seeking templates and coaching",
      "Small agencies and solopreneurs who want automation"
    ],
    marketSize: {
      tam: "$20–60B (Global online learning / creator economy)",
      sam: "$500M–$2B (Founders/product professionals in English markets + India)",
      som: "₹5–50M INR (Niche premium newsletter/coaching)"
    },
    techStack: {
      frontend: "Next.js / static site / Substack",
      other: "Gumroad/Stripe, Zapier/Make/n8n for automations"
    },
    buildTimeline: "Basic presence: 2–6 weeks. Automation services & courses: 2–6 months.",
    resourcesNeeded: "1–2 dev/automation engineers, content creator, community manager, designer.",
    analyticsSetup: "Newsletter metrics, Google Analytics, cohort retention.",
    marketingEfforts: "Content marketing (blog), Instagram presence, productized services, 1:1 guidance upsells."
  },
  {
    id: 4,
    slug: "definable-ai",
    client: "Definable.ai",
    industry: "AI & Analytics",
    services: ["AI Implementation", "Product Development", "Data Engineering"],
    challenge: "Turning raw data into actionable business insights.",
    solution: "AI-powered platform enabling smarter business decisions through intelligent data analysis.",
    results: [
      "Custom AI Implementation",
      "Data Analysis",
      "Actionable Insights",
      "Business Intelligence"
    ],
    image: "/assets/banner/definableai_banner.png",
    testimonial: "Transformed how we look at our data. The insights are now instant and accurate.",
    testimonialAuthor: "Founder, Definable.ai",
    overview: "Definable.ai is an India-built AI agents/platform that aggregates access to multiple LLMs and AI tools in one workspace — chat, agents, multimodal creation, knowledge bases and model switching inside a single UI.",
    painPointsSolved: [
      "Model fragmentation (users juggling ChatGPT, Claude, etc.)",
      "Subscription fatigue and tooling sprawl",
      "Need for knowledge-base integration and agent orchestration"
    ],
    userPersonas: [
      "AI-savvy product teams and founders",
      "Educators and non-profits",
      "Enterprises wanting multi-model fallbacks"
    ],
    marketSize: {
      tam: "$20–60B (Global developer & enterprise AI tooling)",
      sam: "$1–5B (Multi-model agent platforms for startups)",
      som: "$5–50M (Initial target)"
    },
    techStack: {
      frontend: "React + Next.js",
      backend: "Node.js/Express or Python FastAPI",
      integrations: "OpenAI/Anthropic/Meta/Gemini APIs, Vector DB (Pinecone/Weaviate)"
    },
    buildTimeline: "Seed MVP: 3–6 months. Agents/Enterprise features: 6–12 months.",
    resourcesNeeded: "2–4 backend, 1–2 MLOps, 2 frontend, 1 designer, 1 growth/ops.",
    analyticsSetup: "Mixpanel/Amplitude, API usage metrics, billing dashboards.",
    marketingEfforts: "Content + blog, demo bookings, freemium model, LinkedIn/Instagram presence."
  },
  {
    id: 5,
    slug: "arthik-money",
    client: "Arthik.money",
    industry: "Fintech & Personal Finance",
    services: ["Full-Stack Development", "Financial Integrations", "UX Design"],
    challenge: "Users needed a better way to manage personal logistics and finances.",
    solution: "Full web application with financial tools and integrations for smarter money management.",
    results: [
      "Fintech Platform",
      "Web Application",
      "Financial Tools",
      "User Centric"
    ],
    image: "https://picsum.photos/800/600?random=5",
    testimonial: "A seamless experience for our users. The platform is robust and secure.",
    testimonialAuthor: "CEO, Arthik.money",
    overview: "Arthik.money is an AI-powered personal expense and budget manager that auto-categorizes transactions, offers smart savings advice and an AI assistant chat for finance queries.",
    painPointsSolved: [
      "Manual expense tracking and poor visibility",
      "Lack of actionable saving recommendations",
      "Friction in connecting bank transactions"
    ],
    userPersonas: [
      "Salaried individuals and young professionals",
      "Small business owners/micro-entrepreneurs",
      "Users in India seeking localised recommendations"
    ],
    marketSize: {
      tam: "$10–40B (Global personal finance app market)",
      sam: "$500M–$2B (India-centric personal finance app market)",
      som: "$1–10M (Early traction in India)"
    },
    techStack: {
      frontend: "React Native or Flutter (Mobile)",
      backend: "Node.js/Python, PostgreSQL",
      integrations: "Banking aggregation, ML for categorization"
    },
    buildTimeline: "MVP: 3–6 months. Bank integrations: 6–12 months.",
    resourcesNeeded: "2 mobile devs, 2 backend, 1 ML, 1 security, 1 designer, 1 product.",
    analyticsSetup: "Amplitude/Mixpanel, Sentry, Business dashboards (Metabase).",
    marketingEfforts: "Beta program, app store listing, referral incentives, social campaigns."
  }
];

export const DIFFERENTIATORS: Differentiator[] = [
  {
    id: 1,
    icon: Target,
    title: "Obsessed With Your Bottom Line",
    description: "We don't just build websites that look good—we engineer digital assets that drive measurable business results based on data."
  },
  {
    id: 2,
    icon: MessageSquare,
    title: "No Tech Jargon, Just Clear Updates",
    description: "We explain everything in plain English. You'll never wonder what's happening with your project with our weekly updates."
  },
  {
    id: 3,
    icon: Zap,
    title: "2-Week Launch Guarantee",
    description: "While others take months, our streamlined process delivers professional standard websites in 2-4 weeks."
  },
  {
    id: 4,
    icon: DollarSign,
    title: "Enterprise Quality at Fair Prices",
    description: "Expertise of high-end agencies without the inflated costs. Transparent, competitive pricing designed for ROI."
  },
  {
    id: 5,
    icon: UserCheck,
    title: "We Stick Around After Launch",
    description: "We provide continued support, training, and optimization. Your success is our success, and we're invested in your growth."
  },
  {
    id: 6,
    icon: Puzzle,
    title: "Built for You, Not Copy-Pasted",
    description: "Every project is custom-built to match your unique brand. We never use generic templates."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    quote: "Working with ZenithLabs felt like having an extension of our own team. They understood our vision immediately and delivered beyond expectations.",
    name: "Product Lead",
    position: "Liquidity.io",
    image: "https://picsum.photos/100/100?random=10",
    rating: 5
  },
  {
    id: 2,
    quote: "The AI automation they built saved us 20+ hours per week. It paid for itself in the first month.",
    name: "Marketing Director",
    position: "BerryFlow.io",
    image: "https://picsum.photos/100/100?random=11",
    rating: 5
  },
  {
    id: 3,
    quote: "From strategy to deployment, they handled everything. Best decision we made for our product.",
    name: "CTO",
    position: "Marchain.io",
    image: "https://picsum.photos/100/100?random=12",
    rating: 5
  }
];

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: 1,
    name: "Website Starter",
    price: "$2,500",
    bestFor: "Small businesses & startups",
    included: [
      "Up to 5 custom pages",
      "Mobile-responsive design",
      "Contact form integration",
      "Basic SEO optimization",
      "CMS setup",
      "30-day post-launch support"
    ],
    notIncluded: ["E-commerce", "Custom integrations"],
    timeline: "2-3 weeks"
  },
  {
    id: 2,
    name: "Website Professional",
    price: "$5,000",
    bestFor: "Growing businesses",
    popular: true,
    included: [
      "Up to 10 custom pages",
      "Premium custom design",
      "Advanced SEO",
      "Blog/News section",
      "E-commerce or Booking (basic)",
      "Analytics dashboard",
      "60-day support"
    ],
    timeline: "3-4 weeks"
  },
  {
    id: 3,
    name: "AI Automation Essentials",
    price: "$3,500",
    bestFor: "Efficiency seekers",
    included: [
      "Process assessment",
      "2-3 automated workflows",
      "Basic AI Chatbot",
      "Email sequence automation",
      "CRM integration",
      "Training & documentation",
      "90-day support"
    ],
    timeline: "2-3 weeks"
  },
  {
    id: 4,
    name: "Complete Transformation",
    price: "$8,500",
    bestFor: "Maximum ROI",
    value: true,
    included: [
      "Everything in Website Pro",
      "Everything in AI Essentials",
      "Advanced AI Chatbot (learning)",
      "5+ automated workflows",
      "Custom metrics dashboard",
      "Quarterly strategy consult",
      "Priority support (6mo)"
    ],
    timeline: "5-6 weeks"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 1,
    question: "How long does a typical project take?",
    answer: "Standard websites take 2-4 weeks. AI automation projects typically take 2-3 weeks. Complex transformations take 5-6 weeks. We provide exact timelines in our proposals."
  },
  {
    id: 2,
    question: "Do you require full payment upfront?",
    answer: "No. We typically split payment: 50% deposit, 25% midpoint, and 25% upon completion. Custom schedules are available for larger projects."
  },
  {
    id: 3,
    question: "What if I need changes after launch?",
    answer: "All packages include 30-90 days of support for tweaks and fixes. Afterward, we offer maintenance packages or ad-hoc updates."
  },
  {
    id: 4,
    question: "Can you work with my existing website?",
    answer: "Absolutely. We can redesign, update, or add features to existing sites. We'll assess your current site during the consultation."
  },
  {
    id: 5,
    question: "Will my website be mobile-friendly?",
    answer: "Yes, guaranteed. Every website we build is fully responsive and tested across all devices."
  },
  {
    id: 6,
    question: "Do you offer ongoing maintenance?",
    answer: "Yes! We offer monthly maintenance starting at $150/month covering security, backups, and minor updates."
  }
];