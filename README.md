# 🕰️ TimeTravel Agency - Agence de Voyage Temporel

Une webapp interactive et immersive pour une agence de voyage temporel fictive, créée avec les technologies web modernes et l'intelligence artificielle générative.

![TimeTravel Agency](https://img.shields.io/badge/Status-Production-success)
![Next.js](https://img.shields.io/badge/Next.js-16.0-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38bdf8)

## 📖 Description

TimeTravel Agency est une application web qui simule une agence de voyage temporel de luxe. Les utilisateurs peuvent explorer trois destinations temporelles uniques, recevoir des recommandations personnalisées via un quiz intelligent, et interagir avec un chatbot IA pour obtenir des informations sur leurs futurs voyages dans le temps.

🔗 **Déploiement en direct** : [Netlify](https://your-app.netlify.app) *(Auto-déploiement depuis GitHub)*

## 🛠️ Stack Technique

### Frontend
- **Framework** : Next.js 16.0 (App Router)
- **Langage** : TypeScript
- **Styling** : Tailwind CSS + shadcn/ui components
- **Animations** : Framer Motion
- **Icons** : Lucide React

### Intelligence Artificielle
- **API IA** : Mistral AI (Model: mistral-small-latest)
- **Recommandations** : Algorithme de scoring personnalisé
- **Chatbot** : Intégration Mistral API conversationnelle

### Déploiement & Infrastructure
- **Hébergement** : Netlify
- **CI/CD** : Auto-déploiement via GitHub
- **Gestionnaire de paquets** : pnpm

## ✨ Features Implémentées

### 🏠 Landing Page Interactive
- Hero section avec vidéo de fond immersive
- Navigation fluide avec ancres vers les sections
- Design responsive (mobile, tablet, desktop)
- Animations au scroll avec Framer Motion

### 🌍 Destinations Temporelles
**3 destinations complètes avec pages dédiées :**

1. **Paris 1889 - La Belle Époque**
   - Exposition Universelle et inauguration Tour Eiffel
   - Soirée au Moulin Rouge
   - Prix : dès 4 500 €

2. **Période Crétacé - Les Géants du Passé**
   - Safari préhistorique avec T-Rex et Tricératops
   - Camp sécurisé avec observation des dinosaures
   - Prix : dès 6 200 €

3. **Florence 1504 - Art de la Renaissance**
   - Rencontre avec Michel-Ange et Léonard de Vinci
   - Exploration de l'art Renaissance
   - Prix : dès 5 000 €

**Chaque destination inclut :**
- Page descriptive détaillée
- Programme jour par jour
- Points forts et highlights
- Informations de sécurité
- Notes culturelles
- Prix et inclusions
- Galerie photo

### 🎯 Quiz de Recommandation Personnalisée
- **4 questions ciblées** sur les préférences du voyageur
- **Algorithme de scoring intelligent** analysant les réponses
- **Génération de recommandation IA** via Mistral API
- Affichage du **pourcentage de compatibilité**
- Description personnalisée de la destination idéale
- Interface interactive avec animations

### 🤖 Chatbot IA Conversationnel
- Intégration Mistral Small Latest
- Réponses contextuelles sur le voyage temporel
- Interface de chat moderne et intuitive
- Widget flottant accessible sur toutes les pages
- Historique de conversation

### 📝 Système de Réservation
- Formulaire multi-étapes (3 étapes)
  1. Informations personnelles
  2. Détails du voyage
  3. Paiement sécurisé (fictif)
- Résumé de commande avec tarification
- Page de confirmation avec numéro de réservation
- Animations de chargement

### 📞 Contact & Support
- **Page de contact complète** avec formulaire
- Informations de contact (email, téléphone, adresse, horaires)
- Choix du sujet de contact
- Page de confirmation d'envoi

### ❓ FAQ Complète
- **25 questions/réponses** organisées en 5 catégories :
  - Général (fonctionnement, sécurité)
  - Réservation & Tarifs
  - Préparation & Équipement
  - Destinations & Expériences
  - Aspects Pratiques
- Accordéon interactif
- Page dédiée accessible depuis le footer

### 🎨 Design & UX
- **Palette de couleurs cohérente** : Amber/Slate
- **Typographie élégante** : Police serif pour les titres
- **Glassmorphism** et effets de transparence
- **Animations fluides** sur tous les éléments
- **Micro-interactions** au hover et au clic
- **Design system** avec composants réutilisables

## 🤖 Outils IA Utilisés

### Génération de Code
- **v0.dev** : Génération initiale du projet en Vibe Coding
- **GitHub Copilot** : Complétion et finalisation du code dans l'IDE
- **Gemini PRO** : Assistance pour questions techniques annexes

### Contenu Visuel
- **Gemini Nano Banana** : Génération des visuels et images
- **Canva** : Montage vidéo et édition graphique

### API & Intégration IA
- **Mistral AI** : Chatbot conversationnel (mistral-small-latest)
- **Mistral AI** : Génération de recommandations personnalisées

## 📦 Installation

### Prérequis
- Node.js 18+ 
- pnpm (recommandé) ou npm

### Étapes d'installation

1. **Cloner le repository**
```bash
git clone https://github.com/JulienVaglia/TimeTravelAgency.git
cd TimeTravelAgency
```

2. **Installer les dépendances**
```bash
pnpm install
# ou
npm install
```

3. **Configurer les variables d'environnement**
```bash
# Créer un fichier .env à la racine du projet
MISTRAL_API_KEY=votre_clé_api_mistral
```

4. **Lancer le serveur de développement**
```bash
pnpm dev
# ou
npm run dev
```

5. **Ouvrir dans le navigateur**
```
http://localhost:3000
```

### Build pour production
```bash
pnpm build
pnpm start
```

## 📁 Structure du Projet

```
TimeTravelAgency/
├── app/
│   ├── api/
│   │   ├── chat/route.ts                    # API chatbot Mistral
│   │   └── generate-recommendation/route.ts # API recommandations IA
│   ├── contact/page.tsx                     # Page de contact
│   ├── destinations/[id]/page.tsx           # Pages destinations dynamiques
│   ├── faq/page.tsx                         # Page FAQ
│   ├── quiz/page.tsx                        # Quiz de recommandation
│   ├── reservation/page.tsx                 # Page de réservation
│   ├── layout.tsx                           # Layout principal
│   └── page.tsx                             # Page d'accueil
├── components/
│   ├── ui/                                  # Composants shadcn/ui
│   ├── chatbot-widget.tsx                   # Widget chatbot
│   ├── destinations-section.tsx             # Section destinations
│   ├── faq-section.tsx                      # Section FAQ
│   ├── features-section.tsx                 # Section fonctionnalités
│   ├── footer.tsx                           # Footer
│   ├── header.tsx                           # Header/Navigation
│   └── hero-section.tsx                     # Hero section
├── lib/
│   ├── destinations-data.ts                 # Données des destinations
│   ├── quiz-logic.ts                        # Logique du quiz
│   └── utils.ts                             # Utilitaires
├── public/                                  # Assets statiques
└── styles/                                  # Styles globaux
```

## 🎯 Algorithme de Recommandation

Le quiz utilise un **système de scoring pondéré** :

- Chaque réponse attribue des points (0-3) aux destinations
- **Paris 1889** : Culture, Art, Modernité, Monuments
- **Crétacé** : Aventure, Nature, Origines, Faune
- **Florence 1504** : Élégance, Renaissance, Architecture, Musées

L'algorithme calcule le **pourcentage de compatibilité** et l'IA génère une **description personnalisée** expliquant pourquoi cette destination correspond au profil du voyageur.

## 🔐 Sécurité & Confidentialité

- Variables d'environnement pour les clés API
- Pas de données sensibles dans le code
- HTTPS en production (Netlify)
- Validation des formulaires côté client et serveur

## 🚀 Déploiement

Le projet est configuré pour un **déploiement automatique sur Netlify** :

1. Connexion du repository GitHub à Netlify
2. Configuration des variables d'environnement
3. Auto-déploiement à chaque push sur `main`

**Build command** : `pnpm build`  
**Output directory** : `.next`

## 📊 Performance

- **Server-Side Rendering (SSR)** avec Next.js
- **Optimisation des images** avec Next.js Image
- **Code splitting** automatique
- **Lazy loading** des composants
- **Animations optimisées** avec Framer Motion

## 🎓 Crédits

### Développement
- **Julien VAGLIA, Angie PONS, Catherine JULES** - Développeurs

### Technologies & APIs
- [Next.js](https://nextjs.org/) - Framework React
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS
- [Framer Motion](https://www.framer.com/motion/) - Librairie d'animation
- [shadcn/ui](https://ui.shadcn.com/) - Composants UI
- [Mistral AI](https://mistral.ai/) - API Intelligence Artificielle
- [Lucide](https://lucide.dev/) - Icônes

### Outils IA & Génération
- [v0.dev](https://v0.dev/) - Génération initiale
- [GitHub Copilot](https://github.com/features/copilot) - Assistance au code
- [Gemini PRO](https://gemini.google.com/) - Support technique
- [Gemini Nano Banana](https://deepmind.google/technologies/gemini/) - Génération visuelle
- [Canva](https://www.canva.com/) - Édition graphique

### Assets & Médias
- Visuels générés avec Gemini Nano Banana
- Vidéo héro montée avec Canva
- Images hébergées sur Supabase Storage

## 📄 Licence

Projet pédagogique réalisé dans le cadre du **Master M2 Digital & IA** - YNOV 2026.

**Utilisation** : À des fins éducatives uniquement.

---

## 👨‍💻 Auteurs

**Julien VAGLIA, Angie PONS, Catherine JULES**  
M2 Digital & IA - YNOV  
📧 Contact : [julien.vaglia@ynov.com](mailto:julien.vaglia@ynov.com)

---

## 🌟 Remerciements

Merci aux différentes équipes et outils qui ont rendu ce projet possible :
- L'équipe YNOV pour l'accompagnement pédagogique
- Les contributeurs open source des technologies utilisées
- Les équipes Mistral AI pour leur API accessible

---

**Made with ❤️ and ⏰ by Julien VAGLIA, Angie PONS, Catherine JULES**
