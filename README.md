# StockHandling
Projet gestion de placard

## Introduction 

Le but du projet et de faire une application de gestions de produits dans vos placards / frigo / congèles etc.

L'application devrait être composé de 2 partie:

- Un partie front qui va gérer l'affichage des données / formulaires etc, en HTML / CSS
- Un API reste pour faire les actions back.

L'application devra proposer :
- Un formulaire d'ajout de rangement (frigo, placard 1 etc) (Juste un nom ça suffit)
- Une page qui va lister les rangements disponible, et pour chaque rangement proposer des boutons pour faire des actions:
    - Ajouter un produit
    - Enlever un produit
    - Editer le nom du rangement
    - Supprimer le rangement
- Un page pour afficher un rangement et tous les produits qui sont associés avec la quantité
- L'ajout de produit devra proposer un formulaire avec 2 champs: 
    - Un champs code barre qui devra afficher l'aperçus du produit en utilant l'API openfood fact en front
    - Un champs quantité
- La suppression du produit devra supprimer le produit du rangement
- L'édition du rangement devra proposer un formulaire pour éditer le nom du rangement
- La suppression du ragement devra supprimer le rangement et tous les produits qui lui sont associés
- Sur la page d'accueil, l'application devra proposer un champs texte pour mettre un produit a incrémenter ou décrémenter. Le choix de l'incrémentation ou la décrémentation devrait se faire avec une select liste ou un bouton radio.
- Pour distinguer la partie API de la partie frontend, vous devrez utiliser des routeurs express (Un pour l'api et un pour le front).
- Le stockage des informations se fera en base via l'ORM Sequelize, le choix du type de base est libre du moment qu'il est géré par sequelize.

<details>
    <summary>Construction de l'API</summary>

Vous pouvez construire l'API comme ceci:
- GET: /storage/ : Liste les rangements
- POST: /storage/: Ajoute un rangement
- GET: /storage/{idStorage}: Récupère les information d'un rangement (Ajouter la liste des produits associés directement dans le json)
- PUT: /storage/{idStorage}: Mettre à jour le storage
- DELETE: /storage/{idStorage}: Supprime le rangement
- POST: /storage/{idStorage}/product/: Va chercher sur l'api OpenFoodFacts les informations sur le produit, stock les données utiles du produit en base, et créé la relation avec le rangement.
- DELETE:  /storage/{idStorage}/product/:barcode: Supprimer le produit
- POST: /product/:barcode/increment: Cherche si le produit existe en base, et si il existe, incrément la quantité de la quantité passé dans la requête
- POST: /product/:barcode/decrement: Cherche si le produit existe en base, et si il existe, décrémente la quantité de la quantité passé dans la requête
</details>


## Optionnel

- Dans la page d'accueil, ajouter un état des stocks des différents produits en mettant en évidence les produits qui ne sont plus en stock.
- Ajout une gestion d'historique 
