# Todo List App

## Description

Cette application Todo List vous permet d'ajouter, de supprimer et de gérer vos tâches.

## Technologies utilisées

**Frontend** :
- Vue.js
- Vue Router
- Vite

**Backend** :
- Express.js
- Mongoose
- MongoDB

## Installation

### Prérequis

- Node.js
- MongoDB

### Clonez le dépôt 

```bash
git clone https://github.com/Victoriapea/Todo-List.git
cd Todo-list
```

### Installation du Backend

1. Accédez au dossier backend :
```bash
cd backend
```

2. Installez les dépendances :
```bash
npm install
```

3. Démarrez le serveur :
```bash
npm run dev
```

### Installation du Frontend

1. Ouvez un nouveau terminal et accédez au dossier frontend : 
```bash
cd frontend
```

2. Installez les dépendances :
```bash
npm install
```

3. Démarrez l'application :
```bash
npm run dev
```

## Utilisation 

1. Assurez-vous que le server backend est en cours d'exécution sur http://localhost:3000.

2. Ouvrez votre navigateur et accédez à http://localhost:5173 (ou le port que Vite utilise).

3. Ajoutez des tâches via le formulaire, consultez la liste des tâches, et supprimez celles que vous ne voulez plus.

## Structure du projet

### Frontend
- **src/** 
- **components/** : Composants Vue pour l'affichage des tâches et l'ajout de nouvelles tâches.
- **router/** : Configuration des routes de l'application.
- **App.vue** : Composant principal de l'application.
- **main.js** : Point d'entrée de l'application Vue.

### Backend
- **server.mjs** : Configuration du serveur Express et des routes API.
- **package.json** : Dépendances et scripts pour le serveur.

## Remarques 

- Assurez-vous que MongoDB est en cours d'éxécution et que vous êtes connecté à la base de données appropriée.
- Vous pouvez gérer la base de données avec MongoDB Compass pour visualiser vos tâches.





