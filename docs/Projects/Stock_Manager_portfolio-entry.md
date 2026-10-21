# Portfolio entry — Stock Manager

```yaml
id: "Stock Manager"
status: "beta"                     # v0.9.x non publiée, déploiement prod non validé (voir Notes)
period: "2026-04 → en cours"
context: "À CONFIRMER"             # client | company — voir Questions
role: "À CONFIRMER"                # proposition : "Co-développeur full stack (équipe de 2) — auth, achats, inventaire, formats, multi-tenant, Platform Manager"
priority_suggestion: "high"

stack:
  - "Next.js 16"
  - "Express 5"
  - "TypeScript"
  - "PostgreSQL"
  - "Prisma"
  - "Tailwind CSS"
  - "Docker"

links:
  demo: null
  github: null

image:
  path: null
  suggestion: "Capture 1600 × 1000 du tableau de bord (/dashboard) connecté en Super Administrateur d'une organisation de démo : 3 établissements fictifs (ex. « Magasin Centre », « Boutique Gare », « Entrepôt Nord »), une vingtaine de produits génériques, quelques ventes et transferts sur 30 jours pour peupler les tendances. Navigateur en plein écran sans barre d'adresse (pas de localhost visible), badge du magasin courant visible en haut, graphiques dans la moitié haute. Alternative : la page Inventaire avec la colonne des stocks par format et le bouton « Conversion »."

en:
  title: "Stock Manager"
  category: "Web App / Multi-tenant ERP"
  description: "Multi-tenant ERP for retail chains covering the full stock cycle: purchasing, receiving, per-format inventory, store transfers and POS, fully audited."
  points:
    - "Multi-tenant SaaS: all data scoped by organization, suspension enforced by middleware"
    - "Platform Manager console to provision, suspend or disable client organizations"
    - "Purchasing chain: purchase orders → stock receptions → supplier invoices, as workflows"
    - "Per-packaging-format stock with server-validated conversions between formats"
    - "Stock integrity via native SQL CHECK constraints and Serializable transactions"
    - "Immutable audit log (56 action types) and 6-level role hierarchy (RBAC)"

fr:
  title: "Stock Manager"
  category: "Application Web / ERP multi-tenant"
  description: "ERP multi-tenant pour enseignes multi-magasins : achats, réceptions, stock par format, transferts inter-magasins et caisse, avec traçabilité complète."
  points:
    - "SaaS multi-tenant : données cloisonnées par organisation, suspension gérée en middleware"
    - "Console Platform Manager pour créer, suspendre ou désactiver les organisations clientes"
    - "Chaîne achats : bons de commande → réceptions → factures fournisseur, en workflows"
    - "Stock isolé par format de conditionnement, conversions validées côté serveur"
    - "Intégrité du stock : contraintes SQL CHECK natives et transactions Serializable"
    - "Journal d'audit immuable (56 types d'actions) et hiérarchie de 6 rôles (RBAC)"
```

## Notes pour l'intégration

- **Sources :**
  - Stack : `frontend/package.json` (`next` 16.2.4, `react` 19.2.4, `tailwindcss` ^3.4.19), `backend/package.json` (`express` ^5.2.1, `prisma`/`@prisma/client` 7.8.0, `pg`, `typescript`), `docker-compose.yml` (PostgreSQL 16 + services), `README.md` (tableau de stack).
  - Description : périmètre fonctionnel listé dans `README.md` et `Docs/.md/PROJECT_OVERVIEW.md` ; pages correspondantes dans `frontend/src/app/dashboard/` (`purchase-orders`, `receptions`, `inventory`, `transfers`, `pos`, `audit`…).
  - Point 1 (multi-tenant) : modèle `Organization` et champs `organization_id` dans `backend/prisma/schema.prisma` ; blocage des organisations `SUSPENDED`/`DISABLED` dans `backend/src/middlewares/orgMiddleware.ts`.
  - Point 2 (Platform Manager) : `backend/src/routes/platformRoutes.ts` (route `/organizations/:id/suspend`, etc.), `backend/src/services/platform.service.ts`, `backend/src/middlewares/platformMiddleware.ts`, frontend `frontend/src/app/platform/organizations/`.
  - Point 3 (chaîne achats) : `backend/src/routes/purchaseOrderRoutes.ts`, `stockReceptionRoutes.ts`, `supplierInvoiceRoutes.ts` ; statuts DRAFT → SENT → PARTIALLY_RECEIVED → RECEIVED / CANCELLED / CLOSED et PENDING / PAID / OVERDUE / DISPUTED (enums dans `schema.prisma`).
  - Point 4 (formats) : `POST /api/stock-movements/convert` dans `backend/src/routes/stockMovementRoutes.ts`, logique `FORMAT_CONVERSION` dans `backend/src/services/stock_movement.service.ts` ; table `inventory_breakdowns` ; détail dans `Docs/.md/WorkTools/Rapport_Corrections_feat-formats.md`.
  - Point 5 (intégrité) : `CHECK ("stock_physical" >= 0 AND "stock_reserved" >= 0)` dans `backend/prisma/migrations/20260428163949_custom_constraints/migration.sql`, `CHECK ("quantity" >= 0)` dans `backend/prisma/migrations/20260706120000_add_inventory_breakdown_nonnegative_check/migration.sql` ; `isolationLevel: Serializable` dans `backend/src/services/transaction.service.ts`, `transfer.service.ts`, `platform.service.ts` et `backend/src/repositories/stock_movement.repository.ts`.
  - Point 6 (audit + RBAC) : enum `AuditAction` de `schema.prisma` (56 valeurs comptées) ; 6 rôles dans `backend/src/config/roles.ts` ; `backend/src/middlewares/roleMiddleware.ts`.
  - Période : premier commit le 2026-04-28, dernier commit le 2026-08-22 (`git log`), 209 commits au total ; le projet est toujours présenté comme en cours dans `CLAUDE.md`.
- **Points écartés (permutables) :**
  - Transferts inter-magasins avec stock réservé / en transit et validation croisée (`backend/src/services/transfer.service.ts`).
  - Caisse (POS) avec remboursements totaux ou partiels par ligne (`backend/src/services/transaction.service.ts`).
  - Rapports d'inventaire DRAFT → SUBMITTED → VALIDATED/REJECTED, références INV-YYYY-XXXX, ajustements irréversibles après validation.
  - Auth JWT en cookie httpOnly + rate limiting global et sur le login (`backend/src/server.ts`, `backend/src/routes/authRoutes.ts`).
  - Dashboard avec tendances à granularité dynamique et sélection de plage de dates.
  - CI GitHub Actions : tests backend Jest + build frontend sur chaque PR vers `dev` (`.github/workflows/pr-checks.yml`), 17 fichiers de test dans `backend/src/__tests__/`.
  - Backend prêt pour Vercel serverless + Neon (`backend/vercel.json`, sélection dynamique du driver dans `backend/src/config/database.ts`) — **non validé en production**, à ne pas mettre en avant tant que ce n'est pas confirmé.
- **Justification de `priority_suggestion` :** projet le plus riche en logique métier (31 modèles Prisma, 21 routeurs, 47 migrations) et architecturalement non trivial (multi-tenant à deux niveaux organisation/établissement, intégrité transactionnelle du stock). Il montre un niveau ERP/SaaS rarement présent dans un portfolio, d'où `high`.
- **Remarques :**
  - Projet mené **à deux** : l'historique git montre deux contributeurs. D'après les fichiers modifiés, Joël a surtout travaillé sur l'auth, les utilisateurs, le catalogue, l'inventaire, les achats/réceptions/factures, l'audit, les formats et le multi-tenant/Platform Manager. Le second développeur a surtout travaillé sur les transferts, la caisse/transactions et le dashboard. C'est pour cela que les points retenus portent sur le périmètre de Joël, et que transferts et POS sont dans les points écartés.
  - Le nom affiché de la plateforme est configurable (`NEXT_PUBLIC_APP_NAME`) ; le README dit « Stock Manager » et la doc interne dit « Stock Manager ». J'ai retenu « Stock Manager », à confirmer.
  - Socket.io est installé mais non utilisé dans la logique métier : volontairement absent de la stack et des points.
  - La doc décrit le projet comme un ERP « sur mesure pour une grande société de commerce » (`Docs/.md/PROJECT_OVERVIEW.md`) : aucun nom de client n'est cité dans la fiche.
  - Je n'ai pas fait de capture d'écran : le seed ne crée qu'un compte Platform Manager et une organisation système vide, donc un dashboard capturé tel quel serait vide. Il faut d'abord saisir des données de démo (voir `image.suggestion`).

## Questions

- **Contexte :** projet client (« grande société de commerce » selon la doc) ou projet d'entreprise/équipe (organisation GitHub `Coptimax-Team`) ? Le nom du client peut-il être cité ? → détermine `context` et `status` (`client-private` si client).
- **Rôle exact de Joël :** la proposition « Co-développeur full stack (équipe de 2) — auth, achats, inventaire, formats, multi-tenant, Platform Manager » est-elle juste ? Faut-il mentionner l'équipe ou le second développeur ?
- **Nom officiel du produit :** « Stock Manager » ou « Stock Manager » ?
- **Période :** le projet est-il toujours en cours (aucun commit depuis le 2026-08-22) ou faut-il écrire `2026-04 → 2026-08` ?
- **Lien `demo` :** existe-t-il une URL publique du frontend en production ? La seule URL repérée pointe sur l'API backend Vercel (non validée en prod), elle n'est donc pas utilisée.
- **Lien `github` :** le dépôt principal est **privé**. Un miroir de déploiement **public** existe sous le compte personnel de Joël, mais son nom contient ce qui semble être un nom de client : faut-il le lier, le renommer, ou le laisser à `null` ?
- **Image :** Joël veut-il fournir une capture avec des données de démo, ou que l'agent prépare un jeu de données fictif et la produise ?
