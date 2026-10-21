# Guide des commandes : développer, tester et déployer le portfolio

Ce guide explique comment fonctionne le projet, puis donne les commandes pour le lancer en local, vérifier le code, prévisualiser la version de production et la publier sur GitHub Pages.

> Toutes les commandes se lancent à la racine du projet :
> `/Applications/MAMP/htdocs/PaqoWork/portfolio`

---

## 1. Comprendre le projet en 2 minutes

| Élément | Valeur |
|---|---|
| Framework | Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4 |
| Type de site | **100 % statique** (`output: "export"` dans `next.config.ts`) : le build produit des fichiers HTML/CSS/JS dans `out/`, sans serveur Node en production |
| Hébergement | **GitHub Pages**, branche `gh-pages` du dépôt `git@github.com:Paqoman8/portfolio.git` |
| URL publique | **https://paqoman8.github.io/portfolio/** (pas de domaine personnalisé : aucun fichier `CNAME`) |
| Outil de déploiement | le paquet npm [`gh-pages`](https://github.com/tschaub/gh-pages), lancé depuis votre poste |
| MAMP | **Non utilisé.** Le dossier `htdocs` sert seulement de rangement : il n'y a ni PHP ni Apache dans ce projet. |

### Le point à comprendre : le préfixe `/portfolio`

Le site est publié dans un sous-dossier (`paqoman8.github.io/portfolio/`), pas à la racine d'un domaine. `next.config.ts` gère cela automatiquement :

```ts
const repo = "portfolio";                            // nom EXACT du dépôt GitHub
const isProd = process.env.NODE_ENV === "production";

basePath: isProd ? `/${repo}` : "",                  // préfixe de toutes les URL
trailingSlash: true,                                 // /portfolio/ plutôt que /portfolio
images: { unoptimized: true },                       // obligatoire en export statique
```

- **En développement** (`npm run dev`), le site est servi à la racine : `http://localhost:3000/`.
- **En build** (`npm run build`), toutes les URL commencent par `/portfolio/...`. C'est pour cela que le dossier `out/` **ne s'ouvre pas correctement** en double-cliquant sur `index.html` ni via MAMP (voir § 4).
- **Si vous renommez le dépôt GitHub** ou passez sur un domaine personnalisé, il faut modifier `repo` (ou vider `basePath`) dans `next.config.ts`.

---

## 2. Installation (une seule fois, ou après un `git pull` qui touche `package.json`)

### Prérequis

- **Node.js 20.9 ou plus** (exigé par Next 16). Le poste actuel tourne sous Node 24.
  ```bash
  node -v
  ```
- **Un accès SSH à GitHub** (le dépôt distant est en `git@github.com:...`), nécessaire pour `git push` et pour le déploiement.
  ```bash
  ssh -T git@github.com     # doit répondre "Hi Paqoman8! ..."
  ```

### Installer les dépendances

```bash
npm install
```

- Préférez **`npm ci`** pour repartir d'une installation propre, strictement conforme à `package-lock.json` (par exemple après un problème de dépendances).

### Variables d'environnement

- Le projet **n'a besoin d'aucune variable** pour fonctionner.
- Un fichier `.env` local (non versionné) existe et ne contient que `NODE_ENV`. Il est sans effet sur `npm run dev` (vérifié : le site reste servi à la racine) et peut être supprimé. Next.js déconseille de définir `NODE_ENV` dans un fichier `.env`.

---

## 3. Développer et tester en local

### Lancer le serveur de développement

```bash
npm run dev
```

- Ouvrir **http://localhost:3000**.
- Rechargement à chaud : chaque modification de fichier dans `src/` s'affiche immédiatement.
- `Ctrl + C` pour arrêter.
- Port déjà utilisé ? `npm run dev -- -p 3001`.
- Tester sur un téléphone du même réseau Wi-Fi : utiliser l'adresse « Network » affichée au démarrage (ex. `http://192.168.1.64:3000`).

> Les messages `baseline-browser-mapping ... over two months old` et `Browserslist: caniuse-lite is ... old` sont de simples avertissements, sans impact sur le site.

### Vérifier le code

Il n'existe **aucun test automatisé** dans le projet. Les vérifications disponibles :

| Commande | Rôle | État actuel |
|---|---|---|
| `npm run lint` | ESLint (règles Next.js, Core Web Vitals, TypeScript) | ❌ **6 erreurs** connues (types `any`, `setState` dans un effet) + 4 avertissements |
| `npx tsc --noEmit` | Vérification des types TypeScript | ✅ 0 erreur |
| `npm run build` | Build complet : la vérification la plus fiable avant un déploiement | ✅ passe |

```bash
npm run lint
npx tsc --noEmit
npm run build
```

> Les erreurs ESLint **ne bloquent pas** le build ni le déploiement. Il est recommandé de les corriger, mais en attendant, comparez le nombre d'erreurs avant et après vos changements pour ne pas en ajouter.

### Checklist de test manuel (à faire avant chaque déploiement)

- [ ] Les 5 sections s'affichent : Hero, Expertise, Projets, Approche, Contact.
- [ ] Le bouton **FR / EN** bascule tous les textes, y compris les nouveaux projets.
- [ ] Chaque carte projet affiche **la bonne image** et **la bonne stack** (les données sont associées par position : un décalage d'ordre ne provoque aucune erreur, seulement un mauvais affichage).
- [ ] Les liens « Voir le projet » et « Code Source » mènent à la bonne destination.
- [ ] Affichage correct en largeur mobile (outils développeur du navigateur → mode responsive).
- [ ] La console du navigateur ne contient pas d'avertissement `Translation key not found`.

---

## 4. Prévisualiser la version de production en local

C'est l'étape qui permet de voir **exactement** ce qui sera publié, préfixe `/portfolio` compris.

### Étape 1 : construire le site

```bash
npm run build
```

- Résultat : le dossier `out/` (non versionné), qui contient `index.html`, `_next/`, `images/`, `logo.svg`, etc.
- `next start` **ne fonctionne pas** avec un export statique : il faut servir le dossier `out/` avec un simple serveur de fichiers.

### Étape 2 : le servir sous `/portfolio/`

Comme les URL du build commencent par `/portfolio/`, il faut que le dossier `out/` soit accessible à cette adresse. Le plus simple : un dossier temporaire contenant un lien symbolique nommé `portfolio` vers `out/`, servi par Python (préinstallé sur macOS).

```bash
mkdir -p /tmp/portfolio-preview
ln -sfn "$PWD/out" /tmp/portfolio-preview/portfolio
python3 -m http.server 4000 -d /tmp/portfolio-preview
```

- Ouvrir **http://localhost:4000/portfolio/**.
- `Ctrl + C` pour arrêter.
- Le lien symbolique pointe vers `out/` : après un nouveau `npm run build`, il suffit de relancer la dernière commande.

> ⚠️ Ouvrir `http://localhost:4000/` (sans `/portfolio/`), double-cliquer sur `out/index.html` ou passer par MAMP donne une page **sans CSS ni JavaScript** : c'est normal, les fichiers sont cherchés sous `/portfolio/_next/...`.

---

## 5. Déployer sur GitHub Pages

### Comment ça marche

```bash
npm run deploy
```

npm enchaîne automatiquement deux scripts de `package.json` :

1. **`predeploy`** (lancé automatiquement avant `deploy`) : `npm run build && touch out/.nojekyll`
   - construit le site dans `out/` ;
   - crée `out/.nojekyll`, qui empêche GitHub Pages de passer le site dans Jekyll. **Sans ce fichier, le dossier `_next/` serait ignoré** (Jekyll écarte les dossiers commençant par `_`) et le site s'afficherait sans CSS ni JS.
2. **`deploy`** : `gh-pages -d out -t`
   - `-d out` : publie le contenu du dossier `out/` ;
   - `-t` : inclut les fichiers cachés (donc `.nojekyll`) ;
   - le contenu est commité sur la branche **`gh-pages`** avec le message par défaut `Updates`, puis poussé sur `origin`.

GitHub Pages republie ensuite automatiquement le site, généralement en **1 à 3 minutes**.

### ⚠️ Ce qui est déployé : votre dossier local, pas une branche Git

`gh-pages` publie **le build de vos fichiers locaux, tels qu'ils sont au moment de la commande**, quelle que soit la branche courante et y compris les modifications non commitées. Il n'y a aucun lien automatique entre `main` et le site en ligne.

D'où la procédure recommandée ci-dessous, qui garantit que **le site en ligne correspond toujours à `main`**.

### Procédure de mise en production recommandée

```bash
# 1. Sur dev : finaliser et vérifier
git switch dev
npm run lint && npx tsc --noEmit && npm run build
# + prévisualisation locale (§ 4) et checklist manuelle (§ 3)
git add -A && git commit -m "feat: ..."
git push origin dev

# 2. Intégrer dev dans main
git switch main
git pull origin main
git merge dev
git push origin main

# 3. Déployer depuis main, avec un arbre de travail propre
git status                 # doit indiquer "nothing to commit, working tree clean"
npm run deploy

# 4. Revenir sur dev et le remettre au niveau de main
git switch dev
git merge main
git push origin dev
```

> Alternative plus traçable pour l'étape 2 : ouvrir une Pull Request `dev → main` sur GitHub plutôt que fusionner en local.

**Astuce :** pour savoir dans l'historique quelle version est en ligne, donnez un message explicite au commit de déploiement :

```bash
npm run deploy -- -m "Deploy $(git rev-parse --short HEAD)"
```

### Vérifier le déploiement

```bash
# Dernier commit publié sur la branche gh-pages
git fetch origin gh-pages
git log origin/gh-pages -1 --format='%h %ad %s' --date=iso

# Le site répond
curl -sI https://paqoman8.github.io/portfolio/ | head -1     # attendu : HTTP/2 200
```

Puis ouvrir **https://paqoman8.github.io/portfolio/** en navigation privée (pour éviter le cache) et refaire rapidement la checklist du § 3.

### Configuration GitHub (déjà en place, à vérifier une seule fois)

Sur GitHub : **Settings → Pages**

- **Source :** *Deploy from a branch*
- **Branch :** `gh-pages` / `/ (root)`

### Revenir à une version précédente

La branche `gh-pages` garde l'historique de chaque déploiement. Le plus sûr est de redéployer une ancienne version du code :

```bash
git switch --detach <commit-de-main-à-restaurer>
npm run deploy -- -m "Rollback to $(git rev-parse --short HEAD)"
git switch dev
```

---

## 6. Ajouter un projet au portfolio

Résumé du processus actuel. Le brief à donner à l'agent d'un autre projet est dans [`Projects/PORTFOLIO_PROJECT_BRIEF.md`](./Projects/PORTFOLIO_PROJECT_BRIEF.md).

1. Copier la capture dans `public/images/<id>.png`.
2. Ajouter les métadonnées (stack, image, liens) dans `projectMetadata`, dans `src/components/sections/ProjectsSection.tsx`.
3. Ajouter les textes **à la même position** dans `projects.items`, en anglais **et** en français, dans `src/i18n/translations.ts`.
4. Vérifier (§ 3), commiter, puis déployer (§ 5).

> Les trois listes (métadonnées, textes EN, textes FR) sont associées **par leur position**. Un projet inséré à l'index 0 doit l'être à l'index 0 dans les trois listes, sinon les images et les stacks sont attribuées aux mauvais projets, ou la page plante si les longueurs diffèrent.

---

## 7. Dépannage

| Symptôme | Cause probable | Solution |
|---|---|---|
| Site en ligne sans CSS ni JS (texte brut) | `.nojekyll` absent de `gh-pages`, ou `basePath` ne correspond plus au nom du dépôt | Déployer avec `npm run deploy` (et non `npx gh-pages` seul) ; vérifier `repo` dans `next.config.ts` |
| Prévisualisation locale sans CSS | Page ouverte hors de `/portfolio/` | Suivre le § 4 |
| Images cassées en ligne mais pas en local | Fichier absent de `public/images/` au moment du build, ou mauvaise casse du nom (GitHub Pages est sensible à la casse, macOS non) | Vérifier le nom exact du fichier et le chemin dans `ProjectsSection.tsx` |
| `Port 3000 is in use` | Un autre serveur tourne déjà | `npm run dev -- -p 3001`, ou arrêter l'autre processus |
| Comportement incohérent en dev après de gros changements | Cache Next.js corrompu | `rm -rf .next` puis `npm run dev` |
| `npm run deploy` échoue avec `branch already exists` ou un conflit | Cache local de `gh-pages` corrompu | `npx gh-pages-clean`, puis relancer `npm run deploy` |
| `Permission denied (publickey)` au déploiement | Clé SSH absente ou non chargée | `ssh -T git@github.com` ; ajouter la clé avec `ssh-add` ou la configurer sur GitHub |
| Le site en ligne n'a pas changé | Propagation GitHub Pages ou cache du navigateur | Attendre 1 à 3 minutes, recharger en navigation privée ; vérifier l'onglet **Actions** du dépôt (« pages build and deployment ») |
| Erreurs d'installation après une mise à jour | `node_modules` incohérent | `rm -rf node_modules && npm ci` |

---

## 8. Récapitulatif des commandes

| Je veux… | Commande |
|---|---|
| Installer le projet | `npm install` (ou `npm ci`) |
| Développer en local | `npm run dev` → http://localhost:3000 |
| Vérifier le code | `npm run lint` · `npx tsc --noEmit` |
| Construire le site | `npm run build` → dossier `out/` |
| Prévisualiser la production | `npm run build`, puis § 4 → http://localhost:4000/portfolio/ |
| Publier en ligne | `npm run deploy` (depuis `main`, arbre propre) |
| Vérifier ce qui est en ligne | `git log origin/gh-pages -1` · https://paqoman8.github.io/portfolio/ |

---

## 9. État constaté au moment de la rédaction (2026-10-21)

- **Le site en ligne est en retard :** le dernier déploiement sur `gh-pages` date du **2026-01-10**. Les projets **QRCards.me** et **REWIND**, ajoutés depuis, ne sont pas en ligne. Il suffit de suivre la procédure du § 5 pour les publier.
- **`dev` a 4 commits de retard sur `main`** (fusions et README uniquement) : à remettre à niveau avec `git switch dev && git merge main` avant de reprendre le travail.
- **Next.js 16.0.4** a des vulnérabilités connues, dont une critique (`npm audit`). Le risque est limité pour un site statique, mais une mise à jour vers 16.4.x est recommandée.
- **Aucune CI :** le déploiement reste manuel. Un workflow GitHub Actions pourrait automatiquement vérifier, construire et publier à chaque push sur `main`.
