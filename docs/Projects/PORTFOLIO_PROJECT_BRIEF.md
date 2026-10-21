# Brief : préparer la fiche d'un projet pour le portfolio de Joël HOUINSAVI

> **À qui s'adresse ce document :** à l'agent IA qui travaille dans le dépôt d'un projet.
> **Ta mission :** analyser ce projet et produire une **fiche portfolio** complète, au format exact décrit ci-dessous. Cette fiche sera ensuite intégrée telle quelle sur le site portfolio (Next.js, bilingue FR/EN) par un autre agent, sans retour possible vers toi. Elle doit donc être autonome, exacte et prête à publier.

---

## 1. Règles du jeu

1. **Lecture seule.** Ne modifie, ne commite et ne supprime rien dans ce projet. Seule exception : tu crées le fichier de sortie `portfolio-entry.md` à la racine (voir § 5), et éventuellement la capture d'écran (§ 4).
2. **Zéro invention.** Chaque affirmation doit être vérifiable dans le code, la configuration, le README ou la documentation du projet. Pas de métriques inventées (« 10k utilisateurs », « -40 % de temps de chargement ») : un chiffre n'est autorisé que s'il figure dans le code ou la doc, et tu indiques où dans les notes.
3. **Ce que tu ne sais pas, tu le signales.** Si une information manque (URL publique, statut du dépôt, rôle de Joël, contexte client…), mets `null` ou `"À CONFIRMER"` et pose la question dans la section `questions` de la fiche. Ne devine jamais.
4. **Confidentialité.** Aucun secret, aucune URL interne ou de staging, aucun nom de client sans autorisation explicite, aucune donnée personnelle réelle (dans le texte comme dans la capture).

---

## 2. Comment analyser le projet

Explore au minimum :

- **Le README et le dossier `docs/`** : l'objectif du projet, son public, son contexte (personnel, client, école, entreprise).
- **Les manifestes** (`package.json`, `composer.json`, `pubspec.yaml`, `requirements.txt`, `Gemfile`, `go.mod`, `app.json`/`app.config.*`, `Podfile`…) : la stack **réellement utilisée**, avec les versions majeures des frameworks principaux.
- **La structure du code** : modules, routes, écrans, services, schéma de base de données, intégrations tierces (paiement, IA, auth, stockage, analytics…).
- **Les fonctionnalités notables et les choix techniques non triviaux** : ce qui distingue le projet d'un CRUD classique (moteur maison, temps réel, offline, sécurité, performance, export, IA, architecture…).
- **`git remote -v` et `git log`** : l'hébergement du dépôt (GitHub public ou privé), les dates de début et de fin approximatives, le volume de travail.
- **La configuration de déploiement** (`vercel.json`, CI, `eas.json`, Dockerfile, fichiers de config d'hébergement…) : URL de production, store mobile.

---

## 3. Ce que la carte projet affiche (pour bien calibrer)

Sur le site, chaque projet est une **carte** dans une grille de 3 colonnes (environ 350 px de largeur utile pour le texte). De haut en bas :

| Élément | Rendu | Contraintes à respecter |
|---|---|---|
| **Image** | Ratio **16:10**, recadrée en `object-cover`, avec un dégradé sombre en bas | Voir § 4 |
| **Catégorie** | Petites capitales indigo | Format `Type / Domaine ou techno`. **Max ~45 caractères.** |
| **Titre** | Gros titre | Nom officiel du produit. **Max ~35 caractères.** Projet d'école : ajouter `(Epitech Academic Project)` en EN et `(Projet académique Epitech)` en FR. |
| **Description** | Coupée après **3 lignes** | **120 à 160 caractères.** Au-delà, le texte est tronqué avec « … ». Une seule phrase qui dit *ce que c'est* et *ce que ça apporte*. |
| **Points clés** | Liste avec coche verte | **4 à 6 points**, **max ~90 caractères** chacun (2 lignes au plus). Même nombre et même ordre en FR et en EN. |
| **Stack** | Petits badges | **3 à 7 badges**, les technologies les plus significatives d'abord. |
| **Liens** | « Voir le projet » (nouvel onglet) et « Code Source » | `demo` et/ou `github`, chacun facultatif. |

### Ton et style éditorial

> **Règle n° 1 : compréhensible par tout le monde.** Le portfolio est lu par des recruteurs, des clients et des non-développeurs. Les textes (catégorie, description, points clés) doivent expliquer **à quoi sert le projet et ce qu'il apporte à ses utilisateurs**, en mots simples. La technique a sa place dans les badges de la stack, pas dans les phrases.

- **Parler de l'utilité, pas de l'implémentation.** Qui utilise le produit ? Quel problème ça lui règle ? Qu'est-ce qu'il peut faire grâce à ça ?
- **Mots du quotidien.** Pas de jargon : `multi-tenant`, `RBAC`, `middleware`, `endpoint`, `workflow`, `CRUD`, `ORM`, `transactions Serializable`, `contraintes SQL`… Si une notion technique est importante, traduis son **bénéfice** : « contraintes SQL CHECK » devient « garde-fous contre les erreurs de stock ».
- **Pas de noms de technologies dans les phrases** (sauf si c'est le cœur du produit, par exemple un plugin WordPress) : ils sont déjà dans les badges.
- **Pas d'adjectifs creux** (« incroyable », « révolutionnaire », « puissant ») ni de jargon marketing.
- **Points clés = un bénéfice concret par ligne**, que n'importe qui peut comprendre.
  - ✅ « Suivi de chaque achat : commande au fournisseur, livraison reçue, facture réglée »
  - ✅ « Garde-fous contre les erreurs de stock, comme vendre plus que ce que l'on a »
  - ❌ « Chaîne achats : bons de commande → réceptions → factures fournisseur, en workflows »
  - ❌ « Intégrité du stock : contraintes SQL CHECK natives et transactions Serializable »
  - ❌ « Code propre et bien organisé » (aucun bénéfice pour l'utilisateur)
- **Varier les angles** dans les points : fonctionnalité phare, gain de temps, fiabilité, sécurité/vie privée, facilité d'utilisation. Pas trois points qui disent la même chose.
- **Projet réalisé à plusieurs :** le **dernier point clé** crédite les collaborateurs, avec leur nom tel qu'ils l'écrivent : « Réalisé en collaboration avec Prénom NOM » / « Built in collaboration with Prénom NOM ». Si tu ne sais pas s'ils acceptent d'être cités, mets le point quand même et pose la question.
- **FR et EN sont des versions natives, pas des traductions mot à mot.** Même sens, même structure, même nombre de points, mais chaque langue doit sonner naturelle. Typographie française en FR (espace avant `:`, guillemets « », accents).
- **Noms de technologies canoniques** : `Next.js`, `React Native`, `Node.js`, `TypeScript`, `Tailwind CSS`, `PostgreSQL`, `MongoDB`, `Supabase`, `Prisma`, `Stripe`, `Laravel`, `Vue.js`, `Expo`, `SQLite`… Version majeure seulement si elle est significative (`Next.js 16`).

---

## 4. L'image du projet

- **Contenu :** la vue la plus représentative du produit (page d'accueil, dashboard, écran principal de l'app). Pour une app mobile : un montage de 2 ou 3 écrans sur fond uni sombre, centré.
- **Format :** **ratio 16:10**, idéalement **1600 × 1000 px** (minimum 1200 × 750). PNG ou WebP, **moins de 500 Ko**.
- **Cadrage :** l'essentiel au centre et dans la moitié haute. Le bas de l'image est assombri par un dégradé et les bords peuvent être rognés.
- **Propreté :** aucune donnée réelle, aucun e-mail, aucun token, pas de barre de favoris ni d'onglets du navigateur, pas d'environnement de dev (`localhost` visible, overlay d'erreur…).
- **Nom du fichier :** `<id>.png` ou `<id>.webp` (voir `id` au § 5).

**Ce que tu dois faire :**
- si une capture adaptée existe déjà dans le projet (`docs/`, `assets/`, `screenshots/`, store listing…), indique son chemin ;
- si tu peux en produire une (app lançable + outil de capture disponible), crée-la dans `portfolio-assets/<id>.png` à la racine du projet ;
- sinon, mets `image.path: null` et décris précisément dans `image.suggestion` quel écran capturer et avec quelles données de démonstration.

---

## 5. Le livrable : `portfolio-entry.md`

Crée **un seul fichier** `portfolio-entry.md` à la racine du projet (ne le commite pas), avec **exactement** cette structure. Affiche aussi son contenu dans ta réponse finale.

````markdown
# Portfolio entry — <Nom du projet>

```yaml
id: "kebab-case-unique"            # ex. "rewind", "qrcards", "wp-ai-assistant" ; sert aussi de nom d'image
status: "production"               # production | beta | archived | academic | client-private
period: "2026-03 → 2026-05"        # début → fin (ou "en cours")
context: "personal"                # personal | client | academic | company
role: "Solo — conception, dev full stack, déploiement"   # rôle réel de Joël ; "À CONFIRMER" si inconnu
collaborators: []                  # noms des personnes ayant travaillé sur le projet (git log, README) ; vide si solo
priority_suggestion: "high"        # high | medium | low : poids du projet dans le portfolio, justifié dans les notes

stack:                             # 3 à 7, du plus au moins significatif
  - "React Native"
  - "Expo"
  - "SQLite"

links:
  demo: "https://…"                # URL publique de prod ou fiche store ; null si aucune
  github: null                     # uniquement si le dépôt est PUBLIC ; null sinon

image:
  path: "portfolio-assets/rewind.png"   # chemin dans ce projet, ou null
  suggestion: null                      # si path est null : quel écran capturer, comment

en:
  title: "…"
  category: "… / …"
  description: "…"                 # 120–160 caractères
  points:
    - "…"
    - "…"
    - "…"
    - "…"

fr:
  title: "…"
  category: "… / …"
  description: "…"                 # 120–160 caractères
  points:                          # même nombre, même ordre qu'en EN
    - "…"
    - "…"
    - "…"
    - "…"
```

## Notes pour l'intégration

- **Sources :** pour chaque point clé et chaque chiffre, le fichier ou dossier qui le prouve (ex. `src/lib/export/satori.ts`).
- **Points écartés :** les fonctionnalités notables non retenues (pour pouvoir permuter si besoin).
- **Justification de `priority_suggestion` :** une ou deux phrases.
- **Remarques :** tout ce qui peut aider à bien présenter le projet (contexte, contraintes, particularités).

## Questions

- Liste des informations à confirmer par Joël (URL, autorisation client, rôle, dépôt public…). Vide si tout est vérifié.
````

---

## 6. Exemple de référence (projet déjà en ligne sur le portfolio)

C'est le niveau de qualité et **le ton** attendus : des phrases simples qui montrent l'utilité du produit, la technique restant dans la stack. Les anciens projets du site sont encore rédigés dans un style plus technique : ne les prends pas comme modèle. Les champs `period`, `context` et `role` sont ici illustratifs.

```yaml
id: "stock"
status: "beta"
period: "2026-04 → 2026-08"
context: "client"
role: "Co-développeur full stack"
collaborators: ["Leroi KAKATSI"]
priority_suggestion: "high"

stack: ["Next.js 16", "Express 5", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS", "Docker"]

links:
  demo: null
  github: null

image:
  path: "portfolio-assets/stock.png"
  suggestion: null

en:
  title: "Stock Manager"
  category: "Web App / Stock Management"
  description: "Web app that lets retailers with several stores know what they have in stock at any time, from supplier orders to sales at the checkout."
  points:
    - "Tracks every purchase: supplier order, delivery received, invoice paid"
    - "Stock counted by carton, pack or unit, with easy conversion between them"
    - "Built-in safeguards against stock errors, such as selling more than you have"
    - "Full history of who did what, and access tailored to each employee's role"
    - "One platform for several businesses, each keeping its own data private"
    - "Built in collaboration with Leroi KAKATSI"

fr:
  title: "Stock Manager"
  category: "Application Web / Gestion de stock"
  description: "Application web qui permet aux commerces à plusieurs magasins de savoir à tout moment ce qu'ils ont en stock, de la commande fournisseur à la vente en caisse."
  points:
    - "Suivi de chaque achat : commande au fournisseur, livraison reçue, facture réglée"
    - "Stock compté par carton, paquet ou unité, avec passage facile de l'un à l'autre"
    - "Garde-fous contre les erreurs de stock, comme vendre plus que ce que l'on a"
    - "Historique complet de qui a fait quoi, et accès adapté au rôle de chaque employé"
    - "Une seule plateforme pour plusieurs entreprises, chacune avec ses données privées"
    - "Réalisé en collaboration avec Leroi KAKATSI"
```

---

## 7. Checklist avant de rendre la fiche

- [ ] Une personne non technique comprend chaque phrase et voit à quoi sert le projet (aucun jargon, aucun nom de techno dans les textes).
- [ ] Les collaborateurs éventuels sont crédités dans le dernier point clé.
- [ ] Toutes les affirmations sont sourcées dans « Notes pour l'intégration ».
- [ ] Aucun chiffre ni aucune fonctionnalité inventés.
- [ ] Descriptions FR et EN entre 120 et 160 caractères.
- [ ] 4 à 6 points clés, max ~90 caractères, même nombre et même ordre en FR et en EN.
- [ ] Catégorie au format `Type / …`, max ~45 caractères, traduite.
- [ ] 3 à 7 technologies, noms canoniques, présentes dans le code.
- [ ] `github` renseigné **uniquement** si le dépôt est public ; `demo` est une URL de production publique.
- [ ] Image en 16:10, propre, sans donnée sensible, ou suggestion de capture précise.
- [ ] `id` en kebab-case, cohérent avec le nom de l'image.
- [ ] Aucun secret, aucune URL interne, aucun nom de client non autorisé.
- [ ] Les inconnues sont listées dans « Questions ».
- [ ] Aucun fichier du projet modifié en dehors de `portfolio-entry.md` et `portfolio-assets/`.
