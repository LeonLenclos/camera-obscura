
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

Le réglage de la mise au point sur le sujet qui se trouve à l’extérieur dépend directement de la distance objectif/écran (tirage) et de la focale.

Nous changeons de focale (changement d'objectif) pour changer radicalement la mise au point.

Nous déplacons la planchette (l'objectif) sur son axe pour un réglage plus fin de la mise au point. Ce mouvement est possible grace à l'utilisation d'un [soufflet](soufflet.md) d'un débatement de 80 cm.

Ces deux réglages (selection de l'objectif et translation de la planchette) devront  être commandé depuis la régie.

### Angle de champ

Pour des raisons pratiques et artistiques nous avons fixé l’angle de champ horizontal à 45°, ce qui correspond à un tirage de 2,2 m pour notre écran de 1,8 m.

Contre-intuitivement, le changement de focale n'affecte pas l'angle de champ si le tirage reste le même.

Cet angle correspond à un objectif de 35mm en photo (format 24x36) et à un objectif de 24mm en cinéma (format 35mm)

### Valeur de plan

L'option choisie pour obtenir differentes valeurs de plan est de maintenir un tirage constant et de changer la focale.

Avec une focale égale à la distance de tirage on aura le point à l'infini et donc un plan large.

Avec une plus courte focale, l'angle ne change pas mais la distance de mise au point diminue et un personnage pourra par exemple apparaître en gros plan.

Contre-intuitivement, les longues focales nous permetteront de faire les plans larges et les courtes focales, les plans serrés.

### Résumé et formules

Valeurs :

- Largeur écran : 1,8 m
- Angle de champ : 45°
- Tirage (t) : 2,2 m

Formules :
- Relation de conjugaison : `1/2,2 + 1/d = 1/f`
- Distance objet en fonction de la largeur objet : `d = l/(2*tan(22.5)) = l/0.83`
- Focale en fonction de la distance objet : `f = 1/(1/2,2 - 1/d) = 1/(0.45-1/d)`
- Largeur objet en donction de la distance objet : `l = d*(2*tan(22.5)) =  d*0.83`


### Tables

Version à jour de ces tableaux : [calcul_otpique.ods](calcul_otpique.ods)

#### Système

|                   |             |
|-------------------|-------------|
| **Ratio**         | **1.37** |
| **Largeur écran** | **1800** |
| **Hauteur écran** | **1314** |
| **Tirage**        | **2200** |
| **Amplitude**     | 200 |
| **Tirage min**    | 2100 |
| **Tirage max**    | 2300 |
| **CdC**           | 0.5 |

#### Angle de champ

| angle      | radian | degré    |
| ---------- | ------ | -------- |
| horizontal | 0.78 | **44.5** |
| min        | 0.81 | 46.4     |
| max        | 0.75 | 42.7     |
| vertical   | 0.58 | **33.3** |
| min        | 0.61 | 34.7     |
| max        | 0.56 | 31.9     |



#### Lentilles


| **Focale**              | **2000**   | **1800**  | **1500**  | **1200**  | **1000**  | **750**   |
| ----------------------- | ---------- | --------- | --------- | --------- | --------- | --------- |
| **Diametre**            | 154        | 154       | 154       | 154       | 154       | 154       |
| **Vergence**            | 0.5        | 0.6       | 0.7       | 0.8       | 1.0       | 1.3       |
| **Ouverture**           | 13.0       | 11.7      | 9.7       | 7.8       | 6.5       | 4.9       |
| **Distances objet**     |            |           |           |           |           |           |
| **ditance obj**         | **22 000** | **9 900** | **4 714** | **2 640** | **1 833** | **1 138** |
| **Distance max**        | 42 000     | 12 600    | 5 250     | 2 800     | 1 909     | 1 167     |
| **Distance min**        | 15 333     | 8 280     | 4 313     | 2 509     | 1 769     | 1 113     |
| **Profondeur de champ** |            |           |           |           |           |           |
| **H**                   | 616000     | 554400    | 462000    | 369600    | 308000    | 231000    |
| **PPN**                 | 21241      | 9726      | 4667      | 2621      | 1822      | 1132      |
| **DPN**                 | 22815      | 10080     | 4763      | 2659      | 1844      | 1144      |
| **PDF**                 | **1573**   | **354**   | **96**    | **38**    | **22**    | **11**    |
| **Dimensions**          |            |           |           |           |           |           |
| **Grandissement**       | **0.10**   | **0.22**  | **0.47**  | **0.83**  | **1.20**  | **1.93**  |
| **Largeur objet**       | 18 000     | 8 100     | 3 857     | 2 160     | 1 500     | 931       |
| **Hauteur objet**       | 13 139     | 5 912     | 2 815     | 1 577     | 1 095     | 680       |
