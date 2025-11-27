import React from 'react';
import { Github, ExternalLink, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

interface Project {
    title: string;
    category: string;
    description: string;
    stack: string[];
    points: string[];
    image: string;
    links?: {
        demo?: string;
        github?: string;
    };
}

const projects: Project[] = [
    {
        title: "Nucleus (Projet académique Epitech)",
        category: "Full Stack Dashboard Platform",
        description: "Plateforme type Netvibes intégrant plusieurs widgets connectés à des services externes via API.",
        stack: [
            "React",
            "Node.js",
            "Express",
            "MongoDB"
        ],
        points: [
            "Architecture full-stack : React.js + Express",
            "Authentification et gestion utilisateur",
            "Intégration API (YouTube, Gmail, RSS, etc.)",
            "UI modulaire et personnalisable",
            "Gestion des widgets"
        ],
        image: "images/nucleus.png",
        // links: {
        //     demo: "#",
        //     github: "#"
        // }
    },
    {
        title: "Cinémania (Projet académique Epitech)",
        category: "Film Rating Platform",
        description: "Plateforme moderne inspirée de Rotten Tomatoes avec notation, fiches films et système utilisateur.",
        stack: [
            "Next.js",
            "MongoDB",
            "TailwindCSS"
        ],
        points: [
            "Next.js 13+ (App Router) + MongoDB",
            "Auth sécurisée + JWT",
            "Système de rating et reviews",
            "Fiches films avec Synopsis, Acteurs, Réalisateur, etc.",
            "Notation et commentaires",
            "Gestion des utilisateurs"
        ],
        image: "images/cinemania.png",
        links: {
            demo: "https://deep-sigma.vercel.app/",
            // github: "#"
        }
    },
    {
        title: "Paqo.net (Projet personnel)",
        category: "Personal Platform (Blog • E-commerce • Portfolio)",
        description: "Plateforme web 100% native combinant blog, boutique et portfolio. Développée en HTML, CSS, JS et PHP, avec une architecture backend sur mesure.",
        stack: [
            "HTML",
            "CSS",
            "JavaScript",
            "PHP",
            "SQL"
        ],
        points: [
            "Développement full stack sans framework",
            "Système de blog complet + administration",
            "Mini e-commerce pour produits numériques",
            "SEO optimisé & performances élevées"
        ],
        image: "images/paqo.png",
        links: {
            demo: "https://www.paqo.net",
            // github: "#"
        }
    },
];

export const ProjectsSection = () => {
    return (
        <section id="projects" className="bg-void py-24 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">

                {/* Section Header */}
                <div className="mb-16 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-text-high sm:text-4xl font-display">
                            Selected Work
                        </h2>
                        <p className="mt-4 text-lg text-text-low max-w-xl">
                            A showcase of complex problems solved with elegant engineering.
                        </p>
                    </div>
                    {/* <a href="#" className="group inline-flex items-center gap-2 text-indigo-400 transition-colors hover:text-indigo-300">
                        <span>View all projects</span>
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a> */}
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <article
                            key={index}
                            className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-obsidian transition-all hover:border-white/20"
                        >
                            {/* Image Container */}
                            <div className="relative aspect-[16/10] overflow-hidden bg-zinc-800">
                                <div className="absolute inset-0 bg-gradient-to-t from-obsidian to-transparent opacity-60 z-10" />
                                {/* Placeholder for image */}
                                {
                                    project.image ? (
                                        <Image
                                            src={project.image ? project.image : ""}
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
                                    {project.points.map((point, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm text-zinc-300">
                                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500/80" />
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Stack Tags */}
                                <div className="mb-8 flex flex-wrap gap-2">
                                    {project.stack.map((tech) => (
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
                                    project.links?.demo || project.links?.github ? (
                                        <div className="mt-auto flex items-center gap-4 pt-4 border-t border-white/5">
                                            {
                                                project.links?.demo && (
                                                    <a
                                                        href={project.links?.demo}
                                                        className="flex items-center gap-2 text-sm font-medium text-text-high transition-colors hover:text-indigo-400"
                                                    >
                                                        <ExternalLink className="h-4 w-4" />
                                                        Show Project
                                                    </a>
                                                )
                                            }
                                            {
                                                project.links?.github && (
                                                    <a
                                                        href={project.links?.github}
                                                        className="flex items-center gap-2 text-sm font-medium text-text-low transition-colors hover:text-text-high"
                                                    >
                                                        <Github className="h-4 w-4" />
                                                        Source Code
                                                    </a>
                                                )
                                            }
                                        </div>
                                    ) : null
                                }
                            </div>
                        </article>
                    ))}
                </div>

            </div>
        </section>
    );
};
