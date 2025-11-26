# Spécifications de la Section "Domaines d'Expertise"

Cette section détaille les compétences techniques clés, présentées sous forme de grille modulaire (Bento Grid) pour refléter la polyvalence et la structure.

## 1. Contenu & Copywriting

### A. Architecture & Scalable APIs
*   **Titre** : Distributed Systems & API Design
*   **Description** : Conception d'architectures backend robustes (Microservices, Event-Driven). Création d'APIs REST et GraphQL performantes avec NestJS, documentées et testées.
*   **Icône Recommandée** : `ServerCog` ou `Network` (Lucide React) - Représentation de nœuds interconnectés.

### B. Full Stack Engineering
*   **Titre** : Modern Full Stack (Next.js / NestJS)
*   **Description** : Maîtrise de l'écosystème TypeScript de bout en bout. SSR/ISR avec Next.js pour le front, logique métier complexe avec NestJS pour le back. Type-safety absolue.
*   **Icône Recommandée** : `Layers` ou `Code2` - Superposition de couches techniques.

### C. SaaS Platforms & Dashboards
*   **Titre** : Complex SaaS & Data Visualization
*   **Description** : Développement d'interfaces riches pour le B2B. Gestion d'états complexes (Zustand/Redux), tableaux de données temps réel et graphiques interactifs.
*   **Icône Recommandée** : `LayoutDashboard` ou `BarChart3` - Interface structurée.

### D. Advanced Security
*   **Titre** : Security & Identity Management
*   **Description** : Implémentation de systèmes d'authentification sécurisés (OAuth2, JWT), gestion fine des rôles (RBAC/ABAC) et protection des données sensibles.
*   **Icône Recommandée** : `ShieldCheck` ou `Lock` - Bouclier ou cadenas moderne.

### E. Mobile Development
*   **Titre** : Cross-Platform Mobile (React Native)
*   **Description** : Extension de l'expérience web sur mobile. Applications natives performantes partageant la logique métier avec le web (Monorepo).
*   **Icône Recommandée** : `Smartphone` or `TabletSmartphone` - Device mobile.

### F. Performance & Optimization
*   **Titre** : Web Performance Engineering
*   **Description** : Optimisation des Core Web Vitals, réduction du bundle size, mise en cache avancée (Redis) et optimisation des requêtes bases de données.
*   **Icône Recommandée** : `Zap` ou `Gauge` - Éclair ou jauge de vitesse.

## 2. Design & Layout

*   **Structure** : Grille Bento (3 colonnes x 2 lignes sur Desktop, 1 colonne sur Mobile).
*   **Style des Cartes** :
    *   Fond sombre (`#0A0A0A`) avec bordure subtile (`border-white/5`).
    *   **Hover Effect** : La bordure s'illumine légèrement (`border-indigo-500/30`) et l'icône change de couleur (devient `Indigo` ou `Cyan`).
    *   Typographie : Titre en `Space Grotesk` (H3), Description en `Inter` (Text Low).

## 3. Implémentation Technique (Snippet React/Tailwind)

```tsx
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
    <section className="bg-[#030303] py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-display">
            Technical Expertise
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            A comprehensive toolset for building ambitious digital products.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {expertises.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-[#0A0A0A] p-8 transition-colors hover:border-indigo-500/30"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-zinc-400 transition-colors group-hover:bg-indigo-500/10 group-hover:text-indigo-400">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-white font-display">{item.title}</h3>
              <p className="text-sm leading-relaxed text-zinc-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
```
