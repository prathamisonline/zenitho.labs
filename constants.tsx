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
  Code
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
    title: "Websites That Convert Visitors Into Customers",
    description: "We build fast, beautiful, mobile-responsive websites tailored to your brand and business goals. No templates—every site is custom-designed to stand out and drive conversions.",
    features: [
      "Fully responsive design",
      "SEO-optimized structure",
      "Lightning-fast loading speeds",
      "Easy-to-update CMS",
      "Integrated analytics"
    ],
    ctaText: "Explore Web Development"
  },
  {
    id: 2,
    icon: BrainCircuit,
    title: "Automate Tasks & Save 20+ Hours Per Week",
    description: "Stop wasting time on repetitive work. We implement AI-powered automation to handle data entry, customer communication, scheduling, reporting, and more.",
    features: [
      "Custom chatbots for support",
      "Automated email sequences",
      "Data processing & reporting",
      "Cross-platform workflow automation",
      "CRM integrations"
    ],
    ctaText: "Discover AI Automation"
  },
  {
    id: 3,
    icon: Layers,
    title: "End-to-End Solutions for Maximum Impact",
    description: "Need both? We offer complete packages combining cutting-edge web development with intelligent automation—creating a seamless digital ecosystem for your business.",
    features: [
      "Comprehensive needs assessment",
      "Integrated web + automation strategy",
      "Ongoing optimization",
      "Team training",
      "Scalable infrastructure"
    ],
    ctaText: "Get Complete Solution"
  }
];

export const PROCESS_STEPS: Step[] = [
  {
    id: 1,
    number: "01",
    icon: MessageSquare,
    title: "Free Consultation",
    description: "We start with a no-pressure conversation to understand your business, challenges, and goals. We'll assess solutions and provide honest recommendations.",
    timeline: "30-45 minutes"
  },
  {
    id: 2,
    number: "02",
    icon: FileText,
    title: "Transparent Proposal",
    description: "You'll receive a detailed proposal with clear pricing, project timeline, deliverables, and success metrics. No hidden fees.",
    timeline: "2-3 business days"
  },
  {
    id: 3,
    number: "03",
    icon: Hammer,
    title: "Build & Create",
    description: "Our team brings your vision to life. You'll receive regular updates, preview links, and opportunities for feedback.",
    timeline: "2-6 weeks"
  },
  {
    id: 4,
    number: "04",
    icon: Rocket,
    title: "Launch & Optimize",
    description: "Before going live, we rigorously test everything. After launch, we provide training and monitor performance.",
    timeline: "1 week"
  },
  {
    id: 5,
    number: "05",
    icon: TrendingUp,
    title: "Continued Partnership",
    description: "We don't disappear after launch. You'll have access to ongoing support, maintenance, and optimization services.",
    timeline: "Ongoing"
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 1,
    client: "TechGear Pro - Electronics Retailer",
    challenge: "Outdated website with 78% cart abandonment rate and poor mobile experience leading to declining sales.",
    solution: "Complete website redesign with streamlined checkout, mobile-first approach, and integrated inventory management system.",
    results: [
      "156% increase in mobile conversions",
      "Cart abandonment reduced to 34%",
      "Page load time improved from 8s to 1.2s",
      "$180K additional revenue in 3 months"
    ],
    image: "https://picsum.photos/800/600?random=1",
    testimonial: "The new website didn't just look better—it transformed our business. We're finally competing with the big players.",
    testimonialAuthor: "Sarah M., Owner"
  },
  {
    id: 2,
    client: "Apex Consulting",
    challenge: "Team spending 25+ hours weekly on client onboarding, scheduling, and report generation—limiting capacity.",
    solution: "Implemented AI-powered chatbot for initial consultations, automated scheduling system, and report generation tools.",
    results: [
      "23 hours per week saved on admin",
      "Onboarding time reduced by 85%",
      "Capacity increased by 40%",
      "ROI achieved in 6 weeks"
    ],
    image: "https://picsum.photos/800/600?random=2",
    testimonial: "We were skeptical about AI, but the results speak for themselves. It's like having three extra employees.",
    testimonialAuthor: "Michael R., Ops Director"
  },
  {
    id: 3,
    client: "GreenLeaf Landscaping",
    challenge: "No online presence, relying entirely on word-of-mouth. Missing opportunities and unable to compete with larger companies.",
    solution: "Built SEO-optimized website with booking system, automated email marketing, and AI chatbot for 24/7 inquiries.",
    results: [
      "312% increase in qualified leads",
      "60% of bookings now come through web",
      "Google Maps ranking #2 locally",
      "Hired 4 new team members to handle demand"
    ],
    image: "https://picsum.photos/800/600?random=3",
    testimonial: "From invisible to unstoppable. Our phones haven't stopped ringing since the website launched.",
    testimonialAuthor: "David K., Founder"
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
    quote: "Working with this team was the best decision we made this year. They took time to understand our business and delivered a website that's not only beautiful but actually brings in customers.",
    name: "Jennifer Martinez",
    position: "CEO, Martinez Marketing Group",
    image: "https://picsum.photos/100/100?random=10",
    rating: 5
  },
  {
    id: 2,
    quote: "I was hesitant about AI automation, thinking it would be complicated. They made it incredibly simple and the ROI was immediate. We're saving 15+ hours per week.",
    name: "Robert Chen",
    position: "Ops Manager, TechFlow",
    image: "https://picsum.photos/100/100?random=11",
    rating: 5
  },
  {
    id: 3,
    quote: "After bad experiences with two other agencies, I was skeptical. But these guys delivered exactly what they promised, on time and on budget.",
    name: "Amanda Foster",
    position: "Founder, Urban Wellness",
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