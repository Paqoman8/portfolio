# Système UI/UX & Design System

Ce document établit les fondations structurelles et interactives du portfolio.

## 1. Layout & Grille

### Container
*   **Max-width** : `1200px` (Desktop Large), `1024px` (Laptop), `100%` avec padding (Mobile/Tablet).
*   **Padding Latéral** :
    *   Mobile : `16px`
    *   Tablet : `32px`
    *   Desktop : `64px` ou centré.

### Grille (CSS Grid)
*   **Colonnes** : 12 colonnes (Desktop), 4 colonnes (Mobile).
*   **Gutter (Gouttière)** : `24px`.

### Breakpoints
*   **Mobile** : `< 640px`
*   **Tablet** : `640px - 1024px`
*   **Desktop** : `> 1024px`

## 2. Spacing & Rythme Vertical

Utilisation d'une échelle de 4px pour une cohérence mathématique.

*   **Micro** : `4px`, `8px` (Icones, labels)
*   **Small** : `16px`, `24px` (Padding interne cartes, gap boutons)
*   **Medium** : `32px`, `48px` (Séparation de blocs de contenu)
*   **Large** : `64px`, `80px` (Séparation de sections)
*   **X-Large** : `120px`+ (Espace avant/après Hero)

**Règle d'Or** : "Whitespace is active space". Laisser respirer le contenu pour souligner l'aspect "Premium".

## 3. Composants Structurels

### Header (Navigation)
*   **Position** : `Sticky` ou `Fixed` avec effet de flou (`backdrop-filter: blur(10px)`).
*   **Hauteur** : `64px` (Desktop), `56px` (Mobile).
*   **Contenu** : Logo (Gauche), Liens (Centre - Desktop uniquement), Menu Burger (Droite - Mobile), CTA (Droite).
*   **Transition** : Apparition/Disparition au scroll (hide on scroll down, show on scroll up) pour maximiser l'espace de lecture.

### Footer
*   **Style** : Fond légèrement plus clair que le body (`#0A0A0A`).
*   **Layout** :
    *   Top : Liens principaux, Réseaux sociaux, Newsletter (optionnel).
    *   Bottom : Copyright, Mentions légales.
*   **Typography** : Taille réduite (`14px`), couleur atténuée (`Text Low`).

### Sections Larges
*   **Full Bleed** : Certaines sections (ex: Bannière "Call to Action", Galerie d'images) peuvent s'étendre sur toute la largeur de l'écran pour casser la monotonie du container.

## 4. Modèles de Cartes (Cards)

### Project Card (La "Star")
*   **Structure** : Image (Top ou Left) + Contenu (Bottom ou Right).
*   **Image** : Ratio 16:9 ou 4:3. Coins arrondis (`12px` ou `16px`).
*   **Contenu** : Titre (H3), Tags (Stack), Description courte, Lien "View Case".
*   **Interaction** :
    *   **Default** : Bordure subtile, fond transparent.
    *   **Hover** : Scale léger de l'image (1.05), apparition d'une lueur (glow) derrière la carte, bordure plus claire.

### Service / Skill Card (Bento Grid)
*   **Style** : Carré ou Rectangulaire. Fond sombre (`Obsidian`).
*   **Contenu** : Icône minimaliste (Top Left), Titre (Bottom Left).
*   **Interaction** : Effet de "Spotlight" (lumière qui suit la souris) sur la bordure.

## 5. Accessibilité (A11y)

*   **Contraste** : Vérifier le ratio AA (4.5:1) pour tout le texte. Le gris clair sur fond noir doit être lisible.
*   **Focus States** : Outline visible (`Electric Indigo`) pour la navigation au clavier. Ne jamais supprimer `outline: none` sans remplacement.
*   **Sémantique** : Utilisation correcte de `<header>`, `<main>`, `<nav>`, `<article>`, `<section>`.
*   **Images** : Attributs `alt` descriptifs pour toutes les images de contenu.
*   **Motion** : Respecter `prefers-reduced-motion`. Désactiver les animations complexes si l'utilisateur le demande.

## 6. Variantes Mobile vs Desktop

### Navigation
*   **Desktop** : Liens visibles, accès direct.
*   **Mobile** : Menu "Hamburger" plein écran ou Bottom Sheet. Les éléments interactifs doivent avoir une zone de touche de min `44x44px`.

### Typographie
*   **H1** : `64px`+ (Desktop) -> `40px` (Mobile).
*   **Body** : `18px` (Desktop) -> `16px` (Mobile).

### Layout
*   **Grilles** : Passage de multi-colonnes à mono-colonne (Stacking).
*   **Cartes** : En mobile, les cartes peuvent devenir des carrousels horizontaux (scroll snap) pour économiser de la hauteur verticale.
