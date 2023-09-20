
## Calage des éléments optiques

Les dimensions limitées de la remorque nous imposent un léger gradinage (20 cm par rang) et une rétroprojection. C'est avec cette configuration que nous obtenons le meilleur confort de vision pour une taille de remorque raisonnable.

### Contraintes liées au spectacle

- La régie : Nous voulons un espace de jeu d'1,4 m dans la remorque à l'arrière de l'écran.

- Nous visons une taille d’image de 1,80 m × 1,31 m (format 1,37) sans trop de vignettage.


### Choix des objectifs

- Nous aimerions utiliser plusieurs objectifs avec des focales différentes et des renvois d’angle, et alterner leur usage avec un système de caches manuels afin de reproduire l’illusion d’un montage type cinéma où plusieurs plans différents s’enchaînent.

- Nous sommes encore à la recherche de lentilles parfaitement adaptées à notre usage.


### liste des objectifs et lentilles mis en oeuvre dans les essais :

Objectifs et lentilles :

- Process lens Fax Rokkor 150mm F4.5
- Process lens Zeiss S-tessar 300 mm f5,6
- Process lens Apo Ronar Rodenscock 360 mm - F9
- Process lens Ilex Paragon 380 mm - F9 
- Process lens Nikon APO Nikkor 610 mm - F9
- Process lens Wray Lustrar 1060 mm - F16
- Lentilles brut d'opticien dia : 60 mm - 2000mm / 1500 mm / 1000 mm / 750 mm
- Doublet achromatique 2250 mm - F14,6


[Sur cette page](abaque.md), des abaques permettent de corréler distance de mise au point et tirage

### Réglage de la mise au point

- Le réglage de la mise au point sur le sujet qui se trouve à l’extérieur dépend directement de la distance objectif/écran (tirage) et de la focale.

- Nous changeons de focale (changement d'objectif) pour changer radicalement la mise au point.

- Nous déplacons la planchette (l'objectif) sur son axe pour un réglage plus fin de la mise au point. Ce mouvement est possible grace à l'utilisation d'un [soufflet](soufflet.md) d'un débatement de 80 cm.

- Ces deux réglages (selection de l'objectif et translation de la planchette) devront  être commandé depuis la régie.

### Angle de champ

- Pour des raisons pratiques et artistiques nous avons fixé l’angle de champ horizontal à 45°, ce qui correspond à un tirage de 2,2 m pour notre écran de 1,8 m.

- Contre-intuitivement, le changement de focale n'affecte pas l'angle de champ si le tirage reste le même.

- Cet angle correspond à un objectif de 35mm en photo (format 24x36) et à un objectif de 24mm en cinéma (format 35mm)

### Valeur de plan

- L'option choisie pour obtenir differentes valeurs de plan est de maintenir un tirage constant et de changer la focale.

- Contre-intuitivement, les longues focales nous permetteront de faire les plans larges et les courtes focales, les plans serrés.

### Résumé et formules

Valeurs :

- Largeur écran : 1,8 m
- Angle de champ : 45°
- Tirage (t) : 2,2 m

Formules :
- Relation de conjugaison : `1/2,4 + 1/d = 1/f`
- Distance objet en fonction de la largeur objet : `d = l/(2*tan(22.5)) = l/0.83`
- Focale en fonction de la distance objet : `f = 1/(1/2,2 - 1/d) = 1/(0.45-1/d)`
- Largeur objet en donction de la distance objet : `l = d*(2*tan(22.5)) =  d*0.83`

### Tableaux des focales

Pour un tirage de 2,2 m et un écran de 1,8 m :

| focale (f) | vergence (1/f)| valeur de plan  | distance objet (d) | largeur objet (l)|
|------------|---------------|-----------------|--------------------|------------------|
| 2,4 m      | 0,42 dioptrie | plan large      | infini             | infini           |
| 1,8 m      | 0,56 dioptrie |  plan moyen     | 7,2 m              | 6 m              |
| 1,2 m      | 0,83 dioptrie |  plan serré     | 2,4 m              | 2 m              |
| 0,8 m      | 1,25 dioptrie |  gros plan      | 1,2 m              | 1 m              |


### Focales pour la planchette d'essais avec verres d'opticien.

| focale (f) | vergence (1/f)| valeur de plan  | distance objet (d) | largeur objet (l)|
|------------|---------------|-----------------|--------------------|------------------|
| 2 m        | 0,5 dioptrie  |  plan large     |                    |                  |
| 1,5 m      | 0,75 dioptrie |  plan moyen     |                    |                  |
| 1 m        | 0,1 dioptrie  |  plan serré     |                    |                  |
| 0,750 m    | 1,5 dioptrie  |  gros plan      |                    |                  |




### Tables

#### Système

|                   |             |
|-------------------|-------------|
| **Ratio**         | **1.37**    |
| **Largeur écran** | **1800**    |
| **Hauteur écran** | **1310**    |
| **Tirage**        | **2200**    |
| **Amplitude**     | 300         |
| **Tirage min**    | 1900        |
| **Tirage max**    | 2500        |
| **CdC**           | 0.5         |

#### Angle de champ

| angle      | radian | degré    |
| ---------- | ------ | -------- |
| horizontal | 0.79   | **45.2** |
| min        | 0.85   | 48.9     |
| max        | 0.73   | 42.1     |
| vertical   | 0.59   | **33.8** |
| min        | 0.64   | 36.7     |
| max        | 0.55   | 31.4     |


#### Lentilles



|                             |            |           |           |           |           |
| --------------------------- | ---------- | --------- | --------- | --------- | --------- |
| **Identité de la lentille** |            |           |           |           |           |
| **Focale**                  | **2250**   | **1800**  | **1200**  | **1000**  | **750**   |
| **Diametre**                | 154        | 154       | 154       | 154       | 154       |
| **Vergence**                | 0.4        | 0.6       | 0.8       | 1.0       | 1.3       |
| **Ouverture**               | 14.6       | 11.7      | 7.8       | 6.5       | 4.9       |
| **Distances objet**         |            |           |           |           |           |
| **ditance obj**             | **36 000** | **7 200** | **2 400** | **1 714** | **1 091** |
| **Distance max**            | \-99 000   | 9 900     | 2 640     | 1 833     | 1 138     |
| **Distance min**            | 16 714     | 5 850     | 2 229     | 1 625     | 1 054     |
| **Profondeur de champ**     |            |           |           |           |           |
| **H**                       | 693000     | 554400    | 369600    | 308000    | 231000    |
| **PPN**                     | 34222      | 7108      | 2385      | 1705      | 1086      |
| **DPN**                     | 37973      | 7295      | 2416      | 1724      | 1096      |
| **PDF**                     | **3750**   | **187**   | **31**    | **19**    | **10**    |
| **Dimensions**              |            |           |           |           |           |
| **Grandissement**           | **0.07**   | **0.33**  | **1.00**  | **1.40**  | **2.20**  |
| **Largeur objet**           | 30 000     | 6 000     | 2 000     | 1 429     | 909       |
| **Hauteur objet**           | 21 898     | 4 380     | 1 460     | 1 043     | 664       |
