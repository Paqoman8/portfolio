import React from 'react';
import { ServerCog, Layers, LayoutDashboard, ShieldCheck, Smartphone, Zap } from 'lucide-react';

const expertises = [
    {
        title: "Distributed Systems & API Design",
        description: "Conception d'architectures backend robustes. APIs REST/GraphQL performantes avec NestJS.",
        icon: ServerCog,
    },
    {
        title: "Modern Full Stack (Next.js / NestJS)",
        description: "Développement d’applications web modernes avec Next.js (SSR/ISR) et NestJS. Écosystème TypeScript maîtrisé de bout en bout, du backend aux interfaces.",
        icon: Layers,
    },
    {
        title: "SaaS Platforms & Dashboards",
        description: "Création de plateformes SaaS complexes, dashboards interactifs et interfaces orientées données. Gestion d’états avancés et UX professionnelle.",
        icon: LayoutDashboard,
    },
    {
        title: "Security & Identity",
        description: "Implémentation d’authentification sécurisée (OAuth2, JWT), gestion des rôles, validation stricte des données et respect des bonnes pratiques OWASP.",
        icon: ShieldCheck,
    },
    {
        title: "Mobile (React Native)",
        description: "Développement d’applications mobiles performantes et cross-platform, partageant la logique métier avec le web.",
        icon: Smartphone,
    },
    {
        title: "Performance Engineering",
        description: "Optimisation des Core Web Vitals, réduction du bundle, caching avancé, et amélioration continue des performances backend et frontend.",
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
