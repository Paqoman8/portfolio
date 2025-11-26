# Identité Visuelle & Direction Artistique

## 1. Concept Global : "Architectural Precision"
L'esthétique doit refléter la rigueur du code et la fluidité de l'expérience utilisateur. On cherche un équilibre entre **structure industrielle** (grilles, lignes fines) et **magie numérique** (lumière, flou, mouvement).

*   **Mots-clés Visuels** : Profondeur, Structure, Lueur, Fluidité, Minimalisme.
*   **Ambiance** : "Cyber-Professional". Pas cyberpunk (trop chaotique), mais une version épurée et haut de gamme de la tech.

## 2. Palette de Couleurs (Dark Mode Native)

### Backgrounds
*   **Void Black** (`#030303`): Fond principal. Profond, infini.
*   **Obsidian** (`#0A0A0A`): Fond secondaire (cartes, sections).
*   **Charcoal** (`#171717`): Bordures subtiles, séparateurs.

### Accents (La "Lumière")
*   **Primary : Electric Indigo** (`#6366f1` à `#4f46e5`): Pour les CTA principaux, les états actifs. Évoque la créativité et la technologie.
*   **Secondary : Cyan Teal** (`#14b8a6`): Pour les éléments de succès, les données, les points d'intérêt.
*   **Text High** (`#EDEDED`): Titres, texte principal. Contraste fort mais pas agressif (pas de blanc pur #FFF).
*   **Text Low** (`#A1A1AA`): Texte secondaire, descriptions.

## 3. Typographie

### Titres (Headings)
*   **Font** : `Space Grotesk` ou `Syne` (pour une touche plus "Art").
*   **Style** : Gras, Tracking serré (-0.02em).
*   **Usage** : Impact visuel fort. Utilisation de tailles massives pour les accroches.

### Corps (Body)
*   **Font** : `Inter` ou `Geist Sans` (Vercel font).
*   **Style** : Lisibilité maximale, hauteur de ligne généreuse (1.6).
*   **Usage** : Contenu long, descriptions.

### Code / Technique
*   **Font** : `JetBrains Mono` ou `Fira Code`.
*   **Usage** : Snippets, tags techniques, numéros de section (ex: `01. Projects`).

## 4. Système UI & Composants

### A. Structure & Grilles (Bento Grid)
L'interface repose sur une grille visible ou suggérée.
*   **Layout** : Utilisation intensive de "Bento Grids" (blocs rectangulaires de tailles variées assemblés).
*   **Bordures** : Lignes très fines (1px), semi-transparentes (`rgba(255,255,255,0.08)`).

### B. Cartes (Cards)
*   **Surface** : Fond sombre avec un léger bruit (noise texture) pour la texture.
*   **Glassmorphism** : Effet de flou (`backdrop-filter: blur(12px)`) pour les éléments flottants ou les cartes au survol.
*   **Hover** :
    *   Lueur interne (Inner Glow).
    *   Légère élévation.
    *   Apparition de détails techniques (ex: stack technique qui slide-in).

### C. Boutons & Actions
*   **Primaire** : Fond dégradé subtil, texte blanc, légère lueur portée (`box-shadow`).
*   **Secondaire** : Outline fin, devient plein au survol.
*   **Micro-interactions** : Effet "magnetic" (le bouton suit légèrement le curseur).

## 5. Interactions & Motion (Framer Motion)

*   **Scroll** : Apparition progressive des éléments (Fade In Up). Pas d'effets trop brusques.
*   **Parallaxe** : Très léger sur les éléments de fond ou les images de projets pour donner de la profondeur.
*   **Transition de Page** : Fluide, sans coupure brutale (ex: le contenu s'efface, le nouveau contenu glisse).
*   **Curseur** : Optionnel, un curseur custom (cercle qui s'agrandit sur les liens) peut renforcer le côté "immersif".

## 6. Imagerie
*   **Mockups** : Abstraits et géométriques. Pas de captures d'écran brutes. Les interfaces sont présentées dans des conteneurs stylisés (cadres minimalistes).
*   **Diagrammes** : Schémas d'architecture en SVG animés (lignes qui se dessinent) pour illustrer la compétence "Architecture".
