"use client";

import React from 'react';
import { ServerCog, Layers, LayoutDashboard, ShieldCheck, Smartphone, Zap } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

const icons = [
    ServerCog,
    Layers,
    LayoutDashboard,
    ShieldCheck,
    Smartphone,
    Zap,
];

const technologies = [
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "TypeScript", icon: "TS" },
    { name: "Node.js", icon: "🟢" },
    { name: "Tailwind", icon: "🌊" },
    { name: "MongoDB", icon: "🍃" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "Docker", icon: "🐳" },
    { name: "Git", icon: "📦" },
];

export const ExpertiseSection = () => {
    const { t } = useTranslation();
    const expertises = t('expertise.items');

    return (
        <section id="expertise" className="bg-void py-24 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-text-high sm:text-4xl font-display">
                        {t('expertise.title')}
                    </h2>
                    <p className="mt-4 text-lg text-text-low">
                        {t('expertise.subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-20">
                    {expertises.map((item: any, index: number) => {
                        const Icon = icons[index];
                        return (
                            <div
                                key={index}
                                className="group relative overflow-hidden rounded-2xl border border-white/5 bg-obsidian p-8 transition-colors hover:border-indigo-500/30"
                            >
                                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-text-low transition-colors group-hover:bg-indigo-500/10 group-hover:text-indigo-400">
                                    <Icon className="h-6 w-6" />
                                </div>
                                <h3 className="mb-2 text-xl font-bold text-text-high font-display">{item.title}</h3>
                                <p className="text-sm leading-relaxed text-text-low">
                                    {item.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* Tech Stack Visuals */}
                {/* <div className="border-t border-white/5 pt-16">
                    <h3 className="text-2xl font-bold text-center text-text-high mb-10 font-display">
                        Tech Stack
                    </h3>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                        {technologies.map((tech) => (
                            <div key={tech.name} className="flex flex-col items-center gap-3 group">
                                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 text-2xl shadow-inner ring-1 ring-white/10 transition-all group-hover:scale-110 group-hover:bg-indigo-500/10 group-hover:ring-indigo-500/30">
                                    {tech.icon}
                                </div>
                                <span className="text-sm font-medium text-text-low group-hover:text-indigo-400 transition-colors">
                                    {tech.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div> */}
            </div>
        </section>
    );
};
