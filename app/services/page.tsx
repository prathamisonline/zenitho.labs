'use client';

import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Team from '../../components/Team';
import CTA from '../../components/CTA';

interface ServiceItem {
    title: string;
    headline: string;
    description: string;
    whatWeBuild?: string[];
    whatWeDeliver?: string[];
    whatWeAutomate?: string[];
    whatWeCreate?: string[];
    whatWeAnalyze?: string[];
    whatWeDo?: string[];
    techStack?: Record<string, string>;
    process?: string[];
    approach?: string[];
    roiFocus?: string;
    perfectFor?: string[];
    whyItMatters?: string;
    whoNeedsThis?: string[];
    deliverables?: string[];
    growthPhilosophy?: {
        main: string;
        points: string[];
    };
    timeline?: string;
}

const SERVICES_DATA: ServiceItem[] = [
    {
        title: "Web Development",
        headline: "Build Fast. Scale Faster.",
        description: "Modern web applications that combine cutting-edge technology with timeless engineering principles. We use AI-assisted development to accelerate prototyping and traditional coding expertise to ensure production quality.",
        whatWeBuild: [
            "Custom SaaS platforms",
            "Enterprise dashboards and tools",
            "API-first applications",
            "Progressive web apps (PWAs)",
            "Real-time collaborative tools",
            "Complex data visualization platforms"
        ],
        techStack: {
            "Frontend": "React, Next.js, Vue, modern JavaScript",
            "Backend": "Node.js, Python, serverless architectures",
            "Databases": "PostgreSQL, MongoDB, Redis",
            "Cloud": "AWS, Vercel, custom infrastructure"
        },
        process: [
            "Technical discovery and architecture planning",
            "Rapid prototyping with AI-assisted development",
            "Refinement with traditional engineering standards",
            "Rigorous testing and quality assurance",
            "Deployment and monitoring setup",
            "Post-launch support and iteration"
        ]
    },
    {
        title: "Shopify Development",
        headline: "E-commerce That Actually Converts",
        description: "Beautiful, high-performing Shopify stores with custom functionality that matches your unique business needs. From design to conversion optimization, we build stores that make money.",
        whatWeBuild: [
            "Custom Shopify theme development",
            "Headless commerce implementations",
            "Complex product configurations",
            "Custom checkout experiences",
            "Third-party integrations (ERPs, fulfillment, marketing tools)",
            "Migration from other platforms",
            "Conversion rate optimization"
        ],
        perfectFor: [
            "Launching your first online store",
            "Scaling beyond basic Shopify capabilities",
            "Migrating from WooCommerce, Magento, or custom solutions",
            "Adding custom features your business needs",
            "Optimizing underperforming stores"
        ]
    },
    {
        title: "AI Automation Agents",
        headline: "Work Smarter with Intelligent Automation",
        description: "Custom AI agents that handle the repetitive work so your team can focus on what matters. From customer support to data processing, we build automation that feels magical.",
        whatWeBuild: [
            "Customer support chatbots with context awareness",
            "Email and document processing",
            "Data entry and validation",
            "Content generation and optimization",
            "Social media management",
            "Report generation",
            "Lead qualification",
            "Inventory and operations workflows"
        ],
        approach: [
            "Identify highest-impact automation opportunities",
            "Design intelligent workflows that handle edge cases",
            "Build and train custom AI agents",
            "Integrate seamlessly with your existing tools",
            "Monitor and optimize performance",
            "Continuous learning and improvement"
        ],
        roiFocus: "Most clients see automation pay for itself within 2-3 months through time savings and error reduction."
    },
    {
        title: "Product Documentation",
        headline: "Documentation Users Actually Want to Read",
        description: "Clear, comprehensive, and beautifully organized documentation that empowers your users and reduces support burden. We make complex things simple.",
        whatWeBuild: [
            "User guides and onboarding documentation",
            "API documentation with interactive examples",
            "Technical integration guides",
            "Knowledge bases and help centers",
            "Internal wiki and process documentation",
            "Video tutorials and visual guides",
            "Release notes and changelogs",
            "Developer documentation"
        ],
        process: [
            "Deep product understanding",
            "User research and pain point analysis",
            "Information architecture design",
            "Clear, concise writing",
            "Visual diagrams and screenshots",
            "Interactive examples where applicable",
            "Search optimization",
            "Continuous updates and maintenance"
        ],
        whyItMatters: "Good documentation reduces support tickets by 40%, accelerates user adoption, and becomes a powerful marketing asset."
    },
    {
        title: "Product Profitability & Vision Analysis",
        headline: "Build the Right Thing, Not Just Any Thing",
        description: "Strategic analysis that de-risks your product investment. Before you spend months building, let's ensure you're building something the market actually wants and will pay for.",
        whatWeAnalyze: [
            "Market size and growth potential",
            "Competitive landscape and differentiation",
            "Target customer validation",
            "Monetization models and pricing strategy",
            "Go-to-market feasibility",
            "Resource requirements and timeline",
            "Risk assessment and mitigation",
            "MVP scope and feature prioritization"
        ],
        deliverables: [
            "Comprehensive market analysis report",
            "Competitor feature comparison",
            "Customer persona research",
            "Financial projections and unit economics",
            "Product roadmap recommendations",
            "MVP specification document",
            "Risk mitigation strategies"
        ],
        whoNeedsThis: [
            "Startups before building their first product",
            "Companies considering a pivot",
            "Product teams validating new features",
            "Entrepreneurs with an idea but no validation",
            "Businesses entering new markets"
        ]
    },
    {
        title: "Product Growth & Marketing",
        headline: "Predictable, Scalable Growth",
        description: "Data-driven marketing strategies that bring qualified customers to your product consistently. We focus on channels that compound over time, not vanity metrics.",
        whatWeDo: [
            "SEO strategy and implementation",
            "Content marketing and thought leadership",
            "Conversion rate optimization",
            "Email marketing and automation",
            "Paid acquisition strategy (when appropriate)",
            "Product-led growth implementation",
            "Analytics and attribution setup",
            "User onboarding optimization",
            "Retention and engagement campaigns"
        ],
        growthPhilosophy: {
            main: "We prioritize sustainable, compound growth over quick wins.",
            points: [
                "Building SEO authority that pays dividends for years",
                "Creating content that educates and converts",
                "Optimizing for customer lifetime value, not just acquisition",
                "Testing and iterating based on data, not hunches",
                "Building referral loops into your product"
            ]
        },
        timeline: "Expect to see initial traction in 30-60 days, meaningful growth in 90-120 days, and compounding results after 6 months."
    }
];

export default function ServicesPage() {
    return (
        <div className="bg-white text-gray-900 font-sans selection:bg-accent selection:text-black">
            <Navbar />
            <div className="min-h-screen pt-32 pb-20">
                <div className="px-4 max-w-7xl mx-auto mb-20 text-center">
                    <span className="text-black font-bold tracking-wider uppercase text-sm border border-black rounded-full px-3 py-1 bg-white mb-6 inline-block">Our Expertise</span>
                    <h1 className="text-5xl md:text-7xl font-black text-black mb-6">Expertise honed by shipping real products.</h1>
                    <p className="text-xl text-gray-500 max-w-3xl mx-auto">We don't just write code. We build businesses. Explore our comprehensive services designed to take you from idea to scale.</p>
                </div>

                <div className="px-4 max-w-7xl mx-auto grid gap-24">
                    {SERVICES_DATA.map((service, index) => (
                        <div key={index} id={service.title.toLowerCase().replace(/\s+/g, '-')} className="grid lg:grid-cols-2 gap-16 items-start scroll-mt-32 mb-16">
                            <div>
                                <h2 className="text-4xl font-black mb-4">{service.title}</h2>
                                <h3 className="text-2xl text-accent font-bold mb-6">{service.headline}</h3>
                                <p className="text-lg text-gray-600 leading-relaxed mb-8">{service.description}</p>

                                {service.process && (
                                    <div className="mb-8">
                                        <h4 className="font-bold text-black uppercase tracking-wider text-sm mb-4">Our Process</h4>
                                        <ul className="space-y-3">
                                            {service.process.map((item, i) => (
                                                <li key={i} className="flex items-start gap-3 text-gray-700">
                                                    <div className="w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0"></div>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {service.approach && (
                                    <div className="mb-8">
                                        <h4 className="font-bold text-black uppercase tracking-wider text-sm mb-4">Our Approach</h4>
                                        <ul className="space-y-3">
                                            {service.approach.map((item, i) => (
                                                <li key={i} className="flex items-start gap-3 text-gray-700">
                                                    <div className="w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0"></div>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {service.techStack && (
                                    <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                                        <h4 className="font-bold text-black uppercase tracking-wider text-sm mb-4">Our Tech Stack</h4>
                                        <div className="space-y-3 font-medium text-sm">
                                            {Object.entries(service.techStack).map(([key, value]) => (
                                                <div key={key} className="flex flex-col sm:flex-row sm:justify-between border-b border-gray-200 pb-2 last:border-0 last:pb-0">
                                                    <span className="text-gray-500">{key}</span>
                                                    <span className="text-black text-right">{value}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {service.roiFocus && (
                                    <div className="mt-8 bg-green-50 p-6 rounded-2xl border border-green-100">
                                        <h4 className="font-bold text-green-800 uppercase tracking-wider text-xs mb-2">ROI Focus</h4>
                                        <p className="text-green-900 font-medium leading-relaxed">{service.roiFocus}</p>
                                    </div>
                                )}

                                {service.whyItMatters && (
                                    <div className="mt-8 bg-blue-50 p-6 rounded-2xl border border-blue-100">
                                        <h4 className="font-bold text-blue-800 uppercase tracking-wider text-xs mb-2">Why It Matters</h4>
                                        <p className="text-blue-900 font-medium leading-relaxed">{service.whyItMatters}</p>
                                    </div>
                                )}

                                {service.whoNeedsThis && (
                                    <div className="mt-8">
                                        <h4 className="font-bold text-black uppercase tracking-wider text-sm mb-4">Who Needs This</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {service.whoNeedsThis.map((item, i) => (
                                                <span key={i} className="bg-gray-100 px-3 py-1 rounded-full text-sm font-medium text-gray-700">{item}</span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {service.growthPhilosophy && (
                                    <div className="mt-8 bg-gray-50 p-8 rounded-3xl">
                                        <h4 className="font-bold text-black uppercase tracking-wider text-sm mb-4">Growth Philosophy</h4>
                                        <p className="mb-4 font-medium">{service.growthPhilosophy.main}</p>
                                        <ul className="space-y-2">
                                            {service.growthPhilosophy.points.map((p, i) => (
                                                <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                                                    <span className="text-accent font-bold">→</span> {p}
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="mt-6 pt-6 border-t border-gray-200">
                                            <span className="font-bold text-xs uppercase tracking-wider text-gray-400">Timeline Impact</span>
                                            <p className="mt-2 text-sm font-medium">{service.timeline}</p>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="bg-black text-white p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-accent rounded-full blur-[120px] opacity-10 pointer-events-none"></div>
                                <h4 className="font-bold text-accent uppercase tracking-wider text-sm mb-8 relative z-10">
                                    {service.whatWeBuild ? "What We Build" :
                                        service.whatWeDeliver ? "What We Deliver" :
                                            service.whatWeAutomate ? "What We Automate" :
                                                service.whatWeCreate ? "What We Create" :
                                                    service.whatWeAnalyze ? "What We Analyze" : "What We Do"}
                                </h4>
                                <ul className="space-y-4 relative z-10">
                                    {(service.whatWeBuild || service.whatWeDeliver || service.whatWeAutomate || service.whatWeCreate || service.whatWeAnalyze || service.whatWeDo)?.map((item, i) => (
                                        <li key={i} className="flex items-start gap-4 text-lg font-medium border-b border-white/10 pb-4 last:border-0 last:pb-0">
                                            <span className="text-accent flex-shrink-0 mt-1">●</span> {item}
                                        </li>
                                    ))}
                                </ul>

                                {service.perfectFor && (
                                    <div className="mt-12 pt-8 border-t border-white/20">
                                        <h4 className="font-bold text-white/50 uppercase tracking-wider text-xs mb-4">Perfect For</h4>
                                        <ul className="space-y-2">
                                            {service.perfectFor.map((item, i) => (
                                                <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                                                    <span className="text-accent">✓</span> {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {service.deliverables && (
                                    <div className="mt-12 pt-8 border-t border-white/20">
                                        <h4 className="font-bold text-white/50 uppercase tracking-wider text-xs mb-4">Key Deliverables</h4>
                                        <ul className="space-y-2">
                                            {service.deliverables.map((item, i) => (
                                                <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                                                    <span className="text-accent">✓</span> {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-32">
                    <Team />
                </div>

                <div className="mt-20">
                    <CTA />
                </div>
            </div>
            <Footer />
        </div>
    );
}
