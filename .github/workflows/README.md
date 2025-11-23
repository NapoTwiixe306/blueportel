# GitHub Actions CI/CD pour Vercel

Ce dépôt contient des workflows GitHub Actions pour automatiser les tests et le déploiement sur Vercel.

## Workflows disponibles

### 1. CI (`ci.yml`)
- **Déclenchement** : Sur chaque push et pull request vers `main` ou `master`
- **Actions** :
  - Installation des dépendances
  - Exécution du linter
  - Build du projet
  - Vérification que le build réussit

### 2. Vercel Deploy (`vercel-deploy.yml`)
- **Déclenchement** : Sur chaque push vers `main` ou `master`
- **Actions** :
  - Installation des dépendances
  - Exécution du linter
  - Build du projet
  - Déploiement automatique sur Vercel (production)

## Configuration requise

Pour utiliser le workflow de déploiement Vercel, vous devez configurer les secrets suivants dans GitHub :

1. Allez dans **Settings** > **Secrets and variables** > **Actions**
2. Ajoutez les secrets suivants :

### Secrets nécessaires

- `VERCEL_TOKEN` : Token d'authentification Vercel
  - Obtenez-le sur : https://vercel.com/account/tokens
  
- `VERCEL_ORG_ID` : ID de votre organisation Vercel
  - Trouvez-le dans les paramètres de votre projet Vercel
  
- `VERCEL_PROJECT_ID` : ID de votre projet Vercel
  - Trouvez-le dans les paramètres de votre projet Vercel

- `NEXT_PUBLIC_SITE_URL` (optionnel) : URL de votre site
  - Par défaut : `https://blueportel.vercel.app`

## Comment obtenir les IDs Vercel

1. Connectez-vous à [Vercel](https://vercel.com)
2. Allez dans les paramètres de votre projet
3. Dans l'onglet **General**, vous trouverez :
   - **Organization ID** → `VERCEL_ORG_ID`
   - **Project ID** → `VERCEL_PROJECT_ID`

## Note

Vercel déploie automatiquement depuis GitHub si vous avez connecté votre dépôt. 
Ces workflows sont optionnels et ajoutent une couche supplémentaire de vérification avant le déploiement.

