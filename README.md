# README - Club de Tennis de Table de la Métropole Lilloise

## Table des Matières

1. [Introduction](#introduction)
2. [Objectifs du Projet](#objectifs-du-projet)
3. [Technologies Utilisées](#technologies-utilisées)
4. [Répartition des Tâches](#répartition-des-tâches)
5. [Fonctionnalités](#fonctionnalités)
6. [Outils Collaboratifs](#outils-collaboratifs)
7. [Installation et Configuration](#installation-et-configuration)
8. [Utilisation](#utilisation)
9. [Contributeurs](#contributeurs)
10. [Conclusion](#conclusion)

## Introduction

Le Club de Tennis de Table de la Métropole Lilloise a développé un site web pour améliorer la communication et la gestion des événements pour ses membres. Ce site permet aux administrateurs de publier des actualités, de créer et gérer des événements, et d'assurer une inscription facile pour les membres.

## Objectifs du Projet

- **Communication**: Garantir que tous les membres reçoivent les informations pertinentes concernant le club.
- **Gestion d'Événements**: Permettre une inscription facile aux tournois et autres activités du club.

## Technologies Utilisées

- **Frontend**: Angular
- **Backend**: Node.js avec Express
- **Base de Données**: MongoDB

## Répartition des Tâches

### Développeur Back-End

- **Création des Routes API**: Développement de toutes les routes nécessaires pour les fonctionnalités de l'application, telles que l'authentification des utilisateurs, la gestion des événements, et la publication de news.
- **Sécurisation des Routes**: Mise en place des politiques de sécurité, y compris l'authentification JWT et les politiques CORS.
- **Intégration avec la Base de Données**: Connexion des routes à la base de données MongoDB, permettant la gestion des données de manière efficace et sécurisée.

### Développeurs Front-End

- **Mise en Place de l'Application Web**: Développement de l'architecture front-end de l'application en utilisant Angular.
- **Création de Composants**: Développement de composants réutilisables pour différentes parties de l'application, comme les formulaires d'inscription, les listes d'événements, et les interfaces de publication de news.
- **Intégration des Services**: Communication avec les routes API fournies par le développeur back-end pour interagir avec la base de données et gérer les données utilisateur.
- **UI/UX Design**: Implémentation des meilleures pratiques en matière de design UI/UX pour assurer une expérience utilisateur optimale, en évitant les couleurs vert et orange conformément aux directives de design.

## Fonctionnalités

- **Publication de News**: Permettre aux administrateurs de publier des actualités sur le site.
- **Authentification des utilisateurs**: S'assurer que seuls les membres du club puissent accéder à certaines informations sensibles.
- **Organisation d'Événements**: Fonctionnalité permettant aux administrateurs de créer des événements auxquels les membres peuvent s'inscrire, comme des repas ou des tournois.
- **Inscription par les membres aux événements**: Faciliter l'inscription des membres aux différents événements organisés par le club.
- **Gestion d’administration des événements**: Fournir aux administrateurs les outils nécessaires pour gérer les inscriptions et les détails des événements.
- **Facilité d'inscription pour les membres**: Simplifier le processus d'inscription des membres aux événements pour une expérience utilisateur fluide.
- **Système d'authentification**: Implémenter une authentification sécurisée pour tous les utilisateurs afin de contrôler l'accès au site.

## Outils Collaboratifs

### Trello pour la Gestion de Projet

- **Tableaux de Projet**: Création de tableaux spécifiques pour chaque phase du projet, permettant une vue d'ensemble des tâches en cours et à venir.
- **Listes de Tâches**: Organisation des tâches en listes, telles que "À faire", "En cours" et "Terminé", pour suivre l'avancement du projet.
- **Cartes de Tâches**: Détail des tâches sur des cartes, incluant des descriptions, des dates limites, des checklists et des pièces jointes.
- **Collaboration en Temps Réel**: Chaque membre de l'équipe peut commenter, joindre des fichiers et déplacer des cartes, facilitant la collaboration et la communication.

### Figma pour le Maquettage

- **Design UI/UX**: Création de maquettes haute fidélité pour le site web, incluant tous les éléments d'interface utilisateur nécessaires.
- **Prototypage**: Conception de prototypes interactifs pour simuler la navigation et les interactions utilisateur, permettant de tester et d'affiner l'expérience utilisateur avant le développement.
- **Collaboration en Temps Réel**: Tous les membres de l'équipe peuvent travailler simultanément sur le même fichier, laissant des commentaires et des suggestions, ce qui accélère le processus de design et d'approbation.
- **Partage Facile**: Les designs et prototypes peuvent être facilement partagés avec les parties prenantes pour obtenir des retours rapides et effectuer les ajustements nécessaires.

## Installation et Configuration

### Prérequis

- Node.js
- Angular CLI
- MongoDB

### Installation

1. **Cloner le dépôt**:
   ```bash
   git clone https://github.com/EngueranR/SpingPongClub.git
   
