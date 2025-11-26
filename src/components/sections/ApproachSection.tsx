import React from 'react';
import { GitMerge, Shield, Terminal, Users } from 'lucide-react';

const methods = [
    {
        title: "Architecture First",
        description: "I don't just write code; I design systems. Scalability and maintainability are baked in from day one, not added as an afterthought.",
        icon: GitMerge,
        tags: ["System Design", "Microservices", "Scalability"]
    },
    {
        title: "Uncompromising Quality",
        description: "Reliability is non-negotiable. Comprehensive testing strategies and strict type safety ensure that deployments are boring and predictable.",
        icon: Terminal,
        tags: ["TypeScript", "TDD/BDD", "CI/CD Pipelines"]
    },
    {
        title: "Security & Performance",
        description: "Fast by default, secure by design. I implement robust authentication, data validation, and performance optimizations at every layer.",
        icon: Shield,
        tags: ["OWASP", "OAuth2", "Core Web Vitals"]
    },
    {
        title: "Product-Centric",
        description: "Technical excellence serves the user experience. I prioritize pragmatic UX, accessibility, and clear documentation.",
        icon: Users,
        tags: ["A11y", "Documentation", "UX Engineering"]
    }
];

export const ApproachSection = () => {
    return (
        <section id="approach" className="bg-void py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5">
            <div className="mx-auto max-w-7xl">

                <div className="mb-16 md:w-2/3">
                    <h2 className="text-3xl font-bold tracking-tight text-text-high sm:text-4xl font-display">
                        Engineering with Purpose
                    </h2>
                    <p className="mt-4 text-lg text-text-low leading-relaxed">
                        My development philosophy is built on three pillars: predictability, performance, and precision. I build software that lasts.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                    {methods.map((item, index) => (
                        <div key={index} className="flex flex-col gap-4">
                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 border border-white/10 text-indigo-400">
                                    <item.icon className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-bold text-text-high font-display">
                                    {item.title}
                                </h3>
                            </div>

                            <p className="text-text-low leading-relaxed pl-16 border-l border-white/5">
                                {item.description}
                            </p>

                            <div className="pl-16 flex flex-wrap gap-2">
                                {item.tags.map((tag) => (
                                    <span key={tag} className="text-xs font-mono text-zinc-500 bg-zinc-900 px-2 py-1 rounded">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};
