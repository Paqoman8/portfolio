export type Language = 'en' | 'fr';

export const translations = {
    en: {
        header: {
            expertise: "Expertise",
            work: "Work",
            approach: "Approach",
            contact: "Contact",
        },
        hero: {
            availability: "Available for new opportunities",
            title_prefix: "Building Scalable",
            title_highlight: "Digital Products",
            title_suffix: "& Future-Ready Architectures.",
            description: "Full Stack Engineer specializing in complex web and mobile ecosystems. I design and build high-performance SaaS platforms, robust APIs, and modern interfaces using Next.js, NestJS, Node, and React Native.",
            view_work: "View Selected Work",
            contact_me: "Contact Me",
        },
        expertise: {
            title: "Technical Expertise",
            subtitle: "A comprehensive toolset for building ambitious digital products.",
            items: [
                {
                    title: "Distributed Systems & API Design",
                    description: "Designing robust backend architectures. High-performance REST/GraphQL APIs with NestJS.",
                },
                {
                    title: "Modern Full Stack (Next.js / NestJS)",
                    description: "Developing modern web applications with Next.js (SSR/ISR) and NestJS. Mastered TypeScript ecosystem from backend to interfaces.",
                },
                {
                    title: "SaaS Platforms & Dashboards",
                    description: "Creating complex SaaS platforms, interactive dashboards, and data-driven interfaces. Advanced state management and professional UX.",
                },
                {
                    title: "Security & Identity",
                    description: "Implementing secure authentication (OAuth2, JWT), role management, strict data validation, and OWASP best practices.",
                },
                {
                    title: "Mobile (React Native)",
                    description: "Developing high-performance cross-platform mobile applications, sharing business logic with the web.",
                },
                {
                    title: "Performance Engineering",
                    description: "Optimizing Core Web Vitals, bundle reduction, advanced caching, and continuous backend/frontend performance improvement.",
                },
            ],
        },
        projects: {
            title: "Selected Work",
            subtitle: "A showcase of complex problems solved with elegant engineering.",
            view_all: "View all projects",
            show_project: "Show Project",
            source_code: "Source Code",
            items: [
                {
                    title: "Nucleus (Epitech Academic Project)",
                    category: "Full Stack Dashboard Platform",
                    description: "Netvibes-like platform integrating multiple widgets connected to external services via API.",
                    points: [
                        "Full-stack architecture: React.js + Express",
                        "Authentication and user management",
                        "API Integration (YouTube, Gmail, RSS, etc.)",
                        "Modular and customizable UI",
                        "Widget management"
                    ]
                },
                {
                    title: "Cinémania (Epitech Academic Project)",
                    category: "Film Rating Platform",
                    description: "Modern platform inspired by Rotten Tomatoes with rating, movie details, and user system.",
                    points: [
                        "Next.js 13+ (App Router) + MongoDB",
                        "Secure Auth + JWT",
                        "Rating and reviews system",
                        "Movie details with Synopsis, Actors, Director, etc.",
                        "Rating and comments",
                        "User management"
                    ]
                },
                {
                    title: "Paqo.net (Personal Project)",
                    category: "Personal Platform (Blog • E-commerce • Portfolio)",
                    description: "100% native web platform combining blog, shop, and portfolio. Developed in HTML, CSS, JS, and PHP, with a custom backend architecture.",
                    points: [
                        "Full stack development without framework",
                        "Complete blog system + administration",
                        "Mini e-commerce for digital products",
                        "Optimized SEO & high performance"
                    ]
                }
            ]
        },
        approach: {
            title: "Engineering with Purpose",
            subtitle: "My development philosophy is built on three pillars: predictability, performance, and precision. I build software that lasts.",
            items: [
                {
                    title: "Architecture First",
                    description: "I design systems before writing a single line of code. My architectures are built for durability, scalability, and long-term maintenance.",
                },
                {
                    title: "Uncompromising Quality",
                    description: "Strict TypeScript, tests, CI/CD, code standards: quality is a prerequisite. Predictable code limits bugs and speeds up development.",
                },
                {
                    title: "Security & Performance",
                    description: "Implementing secure auth, data validation, and OWASP practices. Front & back optimizations to reach peak performance.",
                },
                {
                    title: "Product-Centric",
                    description: "Every technical decision serves the user experience. I integrate UX, accessibility, and code readability as priorities.",
                },
            ],
        },
        contact: {
            title: "Ready to build something ambitious?",
            description: "I’m available for complex full-stack development missions, technical architecture, or SaaS platform development.",
            email_button: "Send me an email",
            find_me: "Or find me on",
            and: "and",
            website: "my website",
        },
    },
    fr: {
        header: {
            expertise: "Expertise",
            work: "Projets",
            approach: "Approche",
            contact: "Contact",
        },
        hero: {
            availability: "Ouvert aux nouvelles opportunités",
            title_prefix: "Création de",
            title_highlight: "Produits Digitaux",
            title_suffix: "& Architectures Scalables.",
            description: "Développeur Full Stack spécialisé dans les écosystèmes web et mobiles complexes. Je conçois et développe des plateformes SaaS performantes, des APIs robustes et des interfaces modernes en utilisant les stacks les plus adaptées à chaque projet.",
            view_work: "Voir mes projets",
            contact_me: "Me contacter",
        },
        expertise: {
            title: "Expertise Technique",
            subtitle: "Une boîte à outils complète pour construire des produits digitaux ambitieux.",
            items: [
                {
                    title: "Systèmes Distribués & Design d'API",
                    description: "Conception d'architectures backend robustes. APIs REST/GraphQL performantes avec NestJS.",
                },
                {
                    title: "Full Stack Moderne (Next.js / NestJS)",
                    description: "Développement d’applications web modernes avec Next.js (SSR/ISR) et NestJS. Écosystème TypeScript maîtrisé de bout en bout, du backend aux interfaces.",
                },
                {
                    title: "Plateformes SaaS & Dashboards",
                    description: "Création de plateformes SaaS complexes, dashboards interactifs et interfaces orientées données. Gestion d’états avancés et UX professionnelle.",
                },
                {
                    title: "Sécurité & Identité",
                    description: "Implémentation d’authentification sécurisée (OAuth2, JWT), gestion des rôles, validation stricte des données et respect des bonnes pratiques OWASP.",
                },
                {
                    title: "Mobile (React Native)",
                    description: "Développement d’applications mobiles performantes et cross-platform, partageant la logique métier avec le web.",
                },
                {
                    title: "Ingénierie de la Performance",
                    description: "Optimisation des Core Web Vitals, réduction du bundle, caching avancé, et amélioration continue des performances backend et frontend.",
                },
            ],
        },
        projects: {
            title: "Projets Sélectionnés",
            subtitle: "Une vitrine de problèmes complexes résolus par une ingénierie élégante.",
            view_all: "Voir tous les projets",
            show_project: "Voir le projet",
            source_code: "Code Source",
            items: [
                {
                    title: "Nucleus (Projet académique Epitech)",
                    category: "Plateforme Dashboard Full Stack",
                    description: "Plateforme type Netvibes intégrant plusieurs widgets connectés à des services externes via API.",
                    points: [
                        "Architecture full-stack : React.js + Express",
                        "Authentification et gestion utilisateur",
                        "Intégration API (YouTube, Gmail, RSS, etc.)",
                        "UI modulaire et personnalisable",
                        "Gestion des widgets"
                    ]
                },
                {
                    title: "Cinémania (Projet académique Epitech)",
                    category: "Plateforme de Notation de Films",
                    description: "Plateforme moderne inspirée de Rotten Tomatoes avec notation, fiches films et système utilisateur.",
                    points: [
                        "Next.js 13+ (App Router) + MongoDB",
                        "Auth sécurisée + JWT",
                        "Système de rating et reviews",
                        "Fiches films avec Synopsis, Acteurs, Réalisateur, etc.",
                        "Notation et commentaires",
                        "Gestion des utilisateurs"
                    ]
                },
                {
                    title: "Paqo.net (Projet personnel)",
                    category: "Plateforme Personnelle (Blog • E-commerce • Portfolio)",
                    description: "Plateforme web 100% native combinant blog, boutique et portfolio. Développée en HTML, CSS, JS et PHP, avec une architecture backend sur mesure.",
                    points: [
                        "Développement full stack sans framework",
                        "Système de blog complet + administration",
                        "Mini e-commerce pour produits numériques",
                        "SEO optimisé & performances élevées"
                    ]
                }
            ]
        },
        approach: {
            title: "Ingénierie avec Sens",
            subtitle: "Ma philosophie de développement repose sur trois piliers : prévisibilité, performance et précision. Je construis des logiciels qui durent.",
            items: [
                {
                    title: "Architecture First",
                    description: "Je conçois des systèmes avant d’écrire la moindre ligne de code. Mes architectures sont pensées pour la durabilité, la scalabilité et la maintenance à long terme.",
                },
                {
                    title: "Qualité Intransigeante",
                    description: "TypeScript strict, tests, CI/CD, normes de code : la qualité est un prérequis. Un code prévisible limite les bugs et accélère le développement.",
                },
                {
                    title: "Sécurité & Performance",
                    description: "Mise en place d’auth sécurisée, validation des données et respect des pratiques OWASP. Optimisations front & back pour atteindre les meilleures performances.",
                },
                {
                    title: "Centré Produit",
                    description: "Chaque décision technique sert l’expérience utilisateur. J’intègre l’UX, l’accessibilité et la lisibilité du code comme des priorités.",
                },
            ],
        },
        contact: {
            title: "Prêt à construire quelque chose d'ambitieux ?",
            description: "Je suis disponible pour des missions complexes de développement full-stack, d'architecture technique ou de création de plateformes SaaS.",
            email_button: "M'envoyer un email",
            find_me: "Ou retrouvez-moi sur",
            and: "et",
            website: "mon site web",
        },
    },
};
