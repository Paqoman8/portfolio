# Spécifications de la Hero Section

Ce document détaille la conception de la section "Hero", point d'entrée critique du portfolio.

## 1. Copywriting & Contenu

L'objectif est de communiquer l'expertise technique et la vision produit instantanément.

*   **Sur-titre (Badge)** :
    *   *Contenu* : `Available for new opportunities` (avec un point vert pulsant).
    *   *Style* : Petit, discret, rassurant.

*   **Titre Principal (H1)** :
    *   *Contenu* : "Building Scalable SaaS & Robust Digital Architectures."
    *   *Alternative* : "Engineering the Future of Complex Web Platforms."
    *   *Style* : Massif, impactant, cassé sur 2 ou 3 lignes pour le rythme.

*   **Sous-titre (Lead)** :
    *   *Contenu* : "Senior Full Stack Engineer. I bridge the gap between complex backend logic and fluid frontend experiences. Specialized in React, NestJS, and Cloud Architectures."
    *   *Style* : Lisible, gris clair (`Text Low`), largeur max contrôlée (`max-w-2xl`).

*   **Call to Actions (CTA)** :
    *   *Primaire* : "View Selected Work" (Incitation à la preuve).
    *   *Secondaire* : "Contact Me" (Accès direct).

## 2. Design & Ambiance Visuelle

*   **Layout** : Centré (Center-aligned). C'est la configuration la plus autoritaire et la plus focus pour un message fort.
*   **Fond** :
    *   Couleur `Void Black` (#030303).
    *   **Effet "Spotlight"** : Un dégradé radial subtil (`Electric Indigo` à 5% d'opacité) placé derrière le texte pour créer une profondeur atmosphérique.
    *   **Texture** : Un bruit (noise) très léger (2%) pour éviter l'effet "plastique" du noir uni.
*   **Typographie** :
    *   H1 en `Space Grotesk` ou `Inter Tight`, Font-weight 700/800, Tracking -0.02em.
    *   Dégradé de texte subtil sur les mots clés ("Scalable SaaS", "Robust") : du blanc vers un gris très clair, ou une touche d'Indigo.

## 3. Implémentation Technique (Snippet React/Tailwind)

Voici une base de code pour visualiser la structure et les classes utilitaires.

```tsx
import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#030303] px-4 text-center sm:px-6 lg:px-8">
      
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[500px] w-[500px] rounded-full bg-indigo-500/10 blur-[120px]" />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[url('/noise.png')] opacity-[0.02]" />

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl space-y-8">
        
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-zinc-400 backdrop-blur-sm transition-colors hover:bg-white/10">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
          </span>
          Available for new opportunities
        </div>

        {/* Main Headline */}
        <h1 className="font-display text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl">
          Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Scalable SaaS</span> <br className="hidden md:block" />
          & Robust Architectures.
        </h1>

        {/* Subheadline */}
        <p className="mx-auto max-w-2xl text-lg text-zinc-400 md:text-xl leading-relaxed">
          Senior Full Stack Engineer. I bridge the gap between complex backend logic and fluid frontend experiences. Specialized in Next.js, NestJS, and Cloud Native solutions.
        </p>

        {/* CTA Group */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button className="group relative inline-flex h-12 items-center justify-center gap-2 overflow-hidden rounded-md bg-white px-8 font-medium text-black transition-all hover:bg-zinc-200">
            <span>View Selected Work</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
          
          <button className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/10 px-8 font-medium text-white transition-colors hover:bg-white/5">
            <Mail className="h-4 w-4" />
            <span>Contact Me</span>
          </button>
        </div>

      </div>
    </section>
  );
};
```

## 4. Recommandations UX
*   **Animation d'entrée** : Le texte doit apparaître avec un léger décalage (staggered fade-in-up) pour guider l'œil du haut vers le bas.
*   **Scroll Indicator** : Ajouter une petite icône de souris ou de flèche en bas de l'écran pour inciter au scroll si le contenu tient sur une seule page (viewport).
