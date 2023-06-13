
## Calage des éléments optiques

Les dimensions limitées de la remorque nous imposent un léger gradinage (20 cm par rang) et une rétroprojection. C'est avec cette configuration que nous obtenons le meilleur confort de vision pour une taille de remorque raisonnable.

### Contraintes liées au spectacle

- La régie : Nous voulons un espace de jeu d'1 m dans la remorque à l'arrière de l'écran.

- Nous visons une taille d’image de 2 m × 1,46 m (format 1,37) sans trop de vignettage.


### Choix des objectifs

- Nous aimerions utiliser plusieurs objectifs avec des focales différentes et des renvois d’angle, et alterner leur usage avec un système de caches manuels afin de reproduire l’illusion d’un montage type cinéma où plusieurs plans différents s’enchaînent.

- Nous n'avons pas rencontrés d'objectifs qui nous permetterait d'obtenir une image assez grande malgrès plusieurs essais, nous envisageons d'utiliser des lentilles simples qui produisent une image de moins bonne qualité mais qui couvrent toute l'image, et sont plus simple à faire fabriquer sur mesure.


### liste des objectifs et lentilles mis en oeuvre dans les essais :

Objectifs :

- Process lens Wray Lustrar 1060 mm - F16
- Process lens Nikon APO Nikkor 610 mm - F9
- Process lens Ilex Paragon 380 mm - F9 
- Process lens Apo Ronar Rodenscock 360 mm - F9
- Process lens Zeiss S-tessar 300 mm f5,6
- Process lens 	Fax Rokkor 150mm F4.5

Lentilles :

- Lentille brut d’opticien 1500 mm - f/25 (convergeante ménisque)

[Sur cette page](abaque.md), des abaques permettent de corréler distance de mise au point et tirage

### Réglage de la mise au point

- Le réglage de la mise au point sur le sujet qui se trouve à l’extérieur dépend directement de la distance objectif/écran (tirage) et de la focale.

- Nous changeons de focale (changement d'objectif) pour changer radicalement la mise au point.

- Nous déplacons la planchette (l'objectif) sur son axe pour un réglage plus fin de la mise au point. Ce mouvement est possible grace à l'utilisation d'un [soufflet](soufflet.md) d'un débatement de 80 cm.

- Ces deux réglage (selection de l'objectif et translation de la planchette) devront  être commandé depuis la régie.

### Angle de champ

- Pour des raisons pratiques et artistiques nous avons fixé l’angle de champ horizontal à 45°, ce qui correspond à un tirage de 2,4 m pour notre écran de 2 m.

- Contre-intuitivement, le changement de focale n'affecte pas l'angle de champ si le tirage reste le même.

- Cet angle correspond à un objectif de 35mm en photo (format 24x36) et à un objectif de 24mm en cinéma (format 35mm)

### Valeur de plan

- L'option choisie pour obtenir differentes valeurs de plan est de maintenir un tirage constant et de changer la focale.

- Contre-intuitivement, les longues focales nous permetteront de faire les plans large et les courtes focales, les plans serrés.

### Résumé et formules

Valeurs :

- Largeur écran : 2 m
- Angle de champ : 45°
- Tirage (t) : 2,4 m

Formules :
- Relation de conjugaison : `1/2,4 + 1/d = 1/f`
- Distance objet en fonction de la largeur objet : `d = l/(2*tan(22.5)) = l/0.83`
- Focale en fonction de la distance objet : `f = 1/(1/2,4 - 1/d) = 1/(0.42-1/d)`
- Largeur objet en donction de la distance objet : `l = d*(2*tan(22.5)) =  d*0.83`

### Tableaux des focales

Pour un tirage de 2,4 m et un écran de 2 m :

| focale (f) | vergence (1/f)| valeur de plan  | distance objet (d) | largeur objet (l)|
|------------|---------------|-----------------|--------------------|------------------|
| 2,4 m      | 0,42 dioptrie | plan large      | infini             | infini           |
| 1,8 m      | 0,56 dioptrie |  plan moyen     | 7,2 m              | 6 m              |
| 1,2 m      | 0,83 dioptrie |  plan serré     | 2,4 m              | 2 m              |
| 0,8 m      | 1,25 dioptrie |  gros plan      | 1,2 m              | 1 m              |


### Focales pouir la planchette d'essais avec verres d'opticien.

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
| **Largeur écran** | **2000**    |
| **Hauteur écran** | **1460**    |
| **Tirage**        | **2400**    |
| **Amplitude**     | 400         |
| **Tirage min**    | 2200        |
| **Tirage max**    | 2600        |
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

| **Focale** | **Diametre** | **Vergence** | **Ouverture** | **ditance obj** | **Distance max** | **Distance min** | **H**  | **PPN** | **DPN** | **PDF**  | **Grandissement** | **Largeur objet** | **Hauteur objet** |
| ---------- | ------------ | ------------ | ------------- | --------------- | ---------------- | ---------------- | ------ | ------- | ------- | -------- | ----------------- | ----------------- | ----------------- |
| **2250**   | 154          | 0.4          | 14.6          | **36 000**      | \-99 000         | 16 714           | 693000 | 34222   | 37973   | **3750** | **0.07**          | 30 000            | 21 898            |
| **1800**   | 154          | 0.6          | 11.7          | **7 200**       | 9 900            | 5 850            | 554400 | 7108    | 7295    | **187**  | **0.33**          | 6 000             | 4 380             |
| **1200**   | 154          | 0.8          | 7.8           | **2 400**       | 2 640            | 2 229            | 369600 | 2385    | 2416    | **31**   | **1.00**          | 2 000             | 1 460             |
| **1000**   | 154          | 1.0          | 6.5           | **1 714**       | 1 833            | 1 625            | 308000 | 1705    | 1724    | **19**   | **1.40**          | 1 429             | 1 043             |
| **750**    | 154          | 1.3          | 4.9           | **1 091**       | 1 138            | 1 054            | 231000 | 1086    | 1096    | **10**   | **2.20**          | 909               | 664               |
