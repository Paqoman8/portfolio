# Spécifications de la Section "Approche & Méthodologie"

Cette section rassure les clients/recruteurs sur la maturité technique et la capacité à livrer des projets maintenables. Elle distingue le "codeur" de l'"ingénieur".

## 1. Contenu & Piliers

Nous regroupons les points demandés en 4 piliers stratégiques pour la lisibilité.

### A. Architecture First
*   **Concept** : "Think before you code."
*   **Détails** : Conception de systèmes modulaires et évolutifs. Choix technologiques pragmatiques basés sur les besoins réels, pas la hype. Design Patterns et Clean Architecture.

### B. Uncompromising Quality
*   **Concept** : "Code is a liability, quality is an asset."
*   **Détails** :
    *   **Type Safety** : TypeScript strict partout.
    *   **Testing** : Tests unitaires (Jest) et E2E (Cypress/Playwright) intégrés au CI/CD.
    *   **Standards** : ESLint, Prettier, Husky hooks pour garantir la consistance.

### C. Security & Reliability
*   **Concept** : "Secure by design."
*   **Détails** : Gestion rigoureuse des permissions, validation des données (Zod), protection contre les vulnérabilités OWASP. Monitoring et logging proactifs.

### D. Product-Centric Engineering
*   **Concept** : "Building for users, not just computers."
*   **Détails** : Performance perçue (Optimistic UI), Accessibilité (a11y), Documentation vivante pour faciliter l'onboarding et la maintenance future.

## 2. Design & Layout

*   **Style** : Plus éditorial et structuré. Moins "marketing" que la Hero, plus "sérieux".
*   **Layout** :
    *   Une grille 2x2 asymétrique ou une liste verticale avec des connecteurs visuels (ligne de temps/processus).
    *   Utilisation de typographie monospace pour les termes techniques (ex: `CI/CD`, `E2E`).
*   **Visuel** : Icônes filaires très fines ou numérotation (01, 02, 03, 04) en gros caractères en arrière-plan.

## 3. Implémentation Technique (Snippet React/Tailwind)

```tsx
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
    <section className="bg-[#030303] py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5">
      <div className="mx-auto max-w-7xl">
        
        <div className="mb-16 md:w-2/3">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-display">
            Engineering with Purpose
          </h2>
          <p className="mt-4 text-lg text-zinc-400 leading-relaxed">
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
                <h3 className="text-xl font-bold text-white font-display">
                  {item.title}
                </h3>
              </div>
              
              <p className="text-zinc-400 leading-relaxed pl-16 border-l border-white/5">
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
```
