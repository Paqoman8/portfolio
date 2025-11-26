import React from 'react';
import { ServerCog, Layers, LayoutDashboard, ShieldCheck, Smartphone, Zap } from 'lucide-react';

const expertises = [
    {
        title: "Distributed Systems & API Design",
        description: "Conception d'architectures backend robustes. APIs REST/GraphQL performantes avec NestJS.",
        icon: ServerCog,
    },
    {
        title: "Modern Full Stack",
        description: "Maîtrise TypeScript de bout en bout. SSR avec Next.js, logique métier avec NestJS.",
        icon: Layers,
    },
    {
        title: "SaaS & Dashboards",
        description: "Interfaces B2B riches. Gestion d'états complexes et visualisation de données temps réel.",
        icon: LayoutDashboard,
    },
    {
        title: "Security & Identity",
        description: "Auth sécurisée (OAuth2, JWT), RBAC/ABAC et protection des données sensibles.",
        icon: ShieldCheck,
    },
    {
        title: "Mobile (React Native)",
        description: "Applications natives performantes partageant la logique métier avec le web.",
        icon: Smartphone,
    },
    {
        title: "Performance Engineering",
        description: "Optimisation Core Web Vitals, caching Redis et requêtes DB.",
        icon: Zap,
    },
];

export const ExpertiseSection = () => {
    return (
        <section id="expertise" className="bg-void py-24 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-text-high sm:text-4xl font-display">
                        Technical Expertise
                    </h2>
                    <p className="mt-4 text-lg text-text-low">
                        A comprehensive toolset for building ambitious digital products.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {expertises.map((item, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-2xl border border-white/5 bg-obsidian p-8 transition-colors hover:border-indigo-500/30"
                        >
                            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-text-low transition-colors group-hover:bg-indigo-500/10 group-hover:text-indigo-400">
                                <item.icon className="h-6 w-6" />
                            </div>
                            <h3 className="mb-2 text-xl font-bold text-text-high font-display">{item.title}</h3>
                            <p className="text-sm leading-relaxed text-text-low">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
