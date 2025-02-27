# Schéma d'implantation

Le schéma d'implantation est un document que l'on créé pour chaque lieu ou on implante Camera Obscura, le document montre la position de l'ensemble sur une carte du lieu.

Ces documents peuvent être trouvés dans le [répertoire des plans](https://github.com/LeonLenclos/camera-obscura/tree/main/contenu/plans) et s'appellent `implantation-carte-[NOM_DE_L_ORGA].pdf` (par exemple : [implantation-carte-mima.pdf](https://camera-obscura.cienokill.fr/contenu/plans/implantation-carte-mima.pdf)).

## À propos de l'implantation

L'implantation de la remorque nécessite un espace plat de 10×15m.

L'orientation se décide en fonction de la course du soleil pour avoir un éclairage optimal à tous les horaire de jeu.

Il y a deux axes de prise de vue, axe frontal et axe latéral la médiane entre ces deux axes doit être orienté au nord. La direction de l'axe Latéral est déterminé par la position du miroir d'Amici. On oriente l'avant de la remorque vers le nord-est si le miroir est à l'ouest et vers le nord-ouest si le miroir est à l'est :

La pente maximum qu'on a testé c'était 2%

## Schéma génériques

### Schéma de l'orientation nord-est

{% include pdf.html url="https://camera-obscura.cienokill.fr/contenu/plans/implantation-orientation-NE.pdf" %}

### Schéma de l'orientation nord-nord-est

{% include pdf.html url="https://camera-obscura.cienokill.fr/contenu/plans/implantation-orientation-NNE.pdf" %}

### Schéma de l'orientation nord-ouest

{% include pdf.html url="https://camera-obscura.cienokill.fr/contenu/plans/implantation-orientation-NO.pdf" %}


## Créer un schéma d'implantation à partir d'un plan OSM

1. Aller sur [OpenStreetMap](https://www.openstreetmap.org/)
2. Taper les coordonées du lieu dans le champs de recherche et cliquer sur *Aller*
3. Cliquer sur le bouton Partager (à droite)
4. Indiquer le format **PNG** 
4. Indiquer l'echelle `1280` (Echelle reelle **1:1000**) ou `640` (Echelle reelle **1:500**)
5. Cocher Définir les dimensions personnalisées et ajuster le cadre
6. Enregistrer l'image dans plans/ avec pour titre `carte-[ORGA].png` et l'importer sous Inkscape dans `plans/implantation-carte.svg`
7. Définir la position et l'orientation de la zone d'implantation avec l'outil symetrie
8. Enregistrer sous `plans/implantation-carte-[ORGA].svg` et `plans/implantation-carte-[ORGA].pdf` 

