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
    client: "Liquidity.io",
    challenge: "Needed a complete platform for content & marketing automation.",
    solution: "Full-stack web application with lead gen tools, SEO blog systems, social media management, and document workflows.",
    results: [
      "All-in-one platform",
      "12+ Integrated Features",
      "Marketing Automation",
      "Full-stack Web App"
    ],
    image: "https://picsum.photos/800/600?random=1",
    testimonial: "Working with ZenithLabs felt like having an extension of our own team. They understood our vision immediately.",
    testimonialAuthor: "Product Lead, Liquidity.io"
  },
  {
    id: 2,
    client: "BerryFlow.io",
    challenge: "Marketers needed to move faster with content creation.",
    solution: "End-to-end content automation platform with intelligent workflows, document libraries, and creative tools.",
    results: [
      "AI Content Creation",
      "SaaS Platform",
      "Intelligent Workflows",
      "Streamlined Ops"
    ],
    image: "https://picsum.photos/800/600?random=2",
    testimonial: "The AI automation they built saved us 20+ hours per week. It paid for itself in the first month.",
    testimonialAuthor: "Marketing Director, BerryFlow"
  },
  {
    id: 3,
    client: "Marchain.io",
    challenge: "Requires robust blockchain infrastructure and web3 solutions.",
    solution: "Strategic partnership delivering technical development and next-gen decentralized applications.",
    results: [
      "Blockchain Infra",
      "Web3 Solutions",
      "Strategic Partnership",
      "Decentralized Apps"
    ],
    image: "https://picsum.photos/800/600?random=3",
    testimonial: "From strategy to deployment, they handled everything. Best decision we made for our product.",
    testimonialAuthor: "CTO, Marchain.io"
  },
  {
    id: 4,
    client: "Definable.ai",
    challenge: "Turning raw data into actionable business insights.",
    solution: "AI-powered platform enabling smarter business decisions through intelligent data analysis.",
    results: [
      "Custom AI Implementation",
      "Data Analysis",
      "Actionable Insights",
      "Business Intelligence"
    ],
    image: "https://picsum.photos/800/600?random=4",
    testimonial: "Transformed how we look at our data. The insights are now instant and accurate.",
    testimonialAuthor: "Founder, Definable.ai"
  },
  {
    id: 5,
    client: "Arthik.money",
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
    testimonialAuthor: "CEO, Arthik.money"
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