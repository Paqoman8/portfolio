"use client";

import React from 'react';
import { Github, ExternalLink, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import { useTranslation } from '@/hooks/useTranslation';

interface ProjectMetadata {
    stack: string[];
    image: string;
    links?: {
        demo?: string;
        github?: string;
    };
}

const projectMetadata: ProjectMetadata[] = [
    {
        stack: [
            "React Native",
            "Expo",
            "SQLite",
            "iOS",
            "Android"
        ],
        image: "images/rewind.png",
        links: {
            demo: "https://apps.apple.com/us/app/rewind/id6767027553",
            // github: "#"
        }
    },
    {
        stack: [
            "Next.js 16",
            "TypeScript",
            "Tailwind CSS",
            "Supabase",
            "Prisma",
            "Framer Motion",
            "Stripe"
        ],

        image: "images/qrcards.png", // Pense à mettre à jour le nom du fichier image

        links: {
            demo: "https://qrcards.me/",
            // github: "https://github.com/ton-repo/qrcards" // Décommente si ton code est open source ou public
        }
    },
    {
        stack: [
            "Laravel",
            "Vue.js",
            "REST API",
            "MySQL"
        ],

        image: "images/trc.png",

        links: {
            demo: "https://hub.tekbot.io/",
            // github: "https://github.com/Paqoman8/wp-ai-assistant"
        }
    },
    {
        stack: [
            "WordPress",
            "PHP",
            "JavaScript",
            "React",
            "WordPress REST API",
            "Google Gemini API"
        ],

        image: "images/wp-ai-assistant.png",

        links: {
            // demo: "#",
            github: "https://github.com/Paqoman8/wp-ai-assistant"
        }
    },
    {
        stack: [
            "Laravel",
            "PHP",
            "MySQL",
            "Blade Templates",
            "Eloquent ORM"
        ],

        image: "images/freeads.png",

        links: {
            // demo: "#",
            github: "https://github.com/Paqoman8/free_ads"
        }
    },
    {
        stack: [
            "React",
            "Node.js",
            "Express",
            "MongoDB"
        ],
        image: "images/nucleus.png",
        // links: {
        //     demo: "#",
        //     github: "#"
        // }
    },
    {
        stack: [
            "Next.js",
            "MongoDB",
            "TailwindCSS"
        ],
        image: "images/cinemania.png",
        links: {
            demo: "https://deep-sigma.vercel.app/",
            // github: "#"
        }
    },
    {
        stack: [
            "HTML",
            "CSS",
            "JavaScript",
            "PHP",
            "SQL"
        ],
        image: "images/paqo.png",
        links: {
            demo: "https://www.paqo.net",
            // github: "#"
        }
    },
];

export const ProjectsSection = () => {
    const { t } = useTranslation();
    const projectsContent = t('projects.items');

    return (
        <section id="projects" className="bg-void py-24 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">

                {/* Section Header */}
                <div className="mb-16 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-text-high sm:text-4xl font-display">
                            {t('projects.title')}
                        </h2>
                        <p className="mt-4 text-lg text-text-low max-w-2xl">
                            {t('projects.subtitle')}
                        </p>
                    </div>
                    {/* <a href="#" className="group inline-flex items-center gap-2 text-indigo-400 transition-colors hover:text-indigo-300">
                        <span>{t('projects.view_all')}</span>
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a> */}
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    {projectsContent.map((project: any, index: number) => {
                        const metadata = projectMetadata[index];
                        return (
                            <article
                                key={index}
                                className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-obsidian transition-all hover:border-white/20"
                            >
                                {/* Image Container */}
                                <div className="relative aspect-[16/10] overflow-hidden bg-zinc-800">
                                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian to-transparent opacity-60 z-10" />
                                    {/* Placeholder for image */}
                                    {
                                        metadata.image ? (
                                            <Image
                                                src={metadata.image ? metadata.image : ""}
                                                alt={project.title}
                                                fill
                                                className="object-cover"
                                            />
                                        ) : (
                                            <div className="absolute inset-0 flex items-center justify-center text-zinc-600 font-mono text-sm">
                                                [Project Image: {project.title}]
                                            </div>
                                        )
                                    }
                                </div>

                                {/* Content */}
                                <div className="flex flex-1 flex-col p-6">
                                    <div className="mb-4 flex items-center justify-between">
                                        <span className="text-xs font-medium text-indigo-400 uppercase tracking-wider">
                                            {project.category}
                                        </span>
                                    </div>

                                    <h3 className="mb-2 text-2xl font-bold text-text-high font-display group-hover:text-indigo-400 transition-colors">
                                        {project.title}
                                    </h3>

                                    <p className="mb-6 text-text-low line-clamp-3">
                                        {project.description}
                                    </p>

                                    {/* Key Points */}
                                    <ul className="mb-6 space-y-2">
                                        {project.points.map((point: string, i: number) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-zinc-300">
                                                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500/80" />
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Stack Tags */}
                                    <div className="mb-8 flex flex-wrap gap-2">
                                        {metadata.stack.map((tech) => (
                                            <span
                                                key={tech}
                                                className="inline-flex items-center rounded-md bg-white/5 px-2 py-1 text-xs font-medium text-zinc-300 ring-1 ring-inset ring-white/10"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Actions (Sticky Bottom) */}
                                    {
                                        metadata.links?.demo || metadata.links?.github ? (
                                            <div className="mt-auto flex items-center gap-4 pt-4 border-t border-white/5">
                                                {
                                                    metadata.links?.demo && (
                                                        <a
                                                            href={metadata.links?.demo} target="_blank"
                                                            className="flex items-center gap-2 text-sm font-medium text-text-high transition-colors hover:text-indigo-400"
                                                        >
                                                            <ExternalLink className="h-4 w-4" />
                                                            {t('projects.show_project')}
                                                        </a>
                                                    )
                                                }
                                                {
                                                    metadata.links?.github && (
                                                        <a
                                                            href={metadata.links?.github}
                                                            className="flex items-center gap-2 text-sm font-medium text-text-low transition-colors hover:text-text-high"
                                                        >
                                                            <Github className="h-4 w-4" />
                                                            {t('projects.source_code')}
                                                        </a>
                                                    )
                                                }
                                            </div>
                                        ) : null
                                    }
                                </div>
                            </article>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};
