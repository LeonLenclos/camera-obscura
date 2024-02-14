# Machinerie optique

À l'avant de la camera obscura on monte un système mécanique et optique complexe, roues, pignons, pistons, courroie, rails, soufflet, lentilles, miroirs... Ce système répond à plusieurs besoins liés à l'image, il nous permet de jongler entre différentes valeurs de plan, de régler la mise au point, de faire des surimpressions, d'avoir différents axes de prise de vue, etc.

## Réglage

Certains paramètres se règlent depuis la régie (espace situé derrière l'écran à l'intérieur de la camera obscura) :

- réglage du tirage (mise au point)
- choix de la lentille (focale)
- commande des obturateurs (cuts, fondus, noirs, surimpressions)

D'autres réglages se font depuis l'extérieur :

- Manoeuvre des miroirs (axe de prise de vue/renversement)

La commande des obturateurs et du choix de la lentille peut aussi se faire à l'extérieur.

## Éléments

Des **rails** sont placé à environ 1 m 50 du sol. sur ces rails roule un **chariot**. Sur le chariot sont fixées différents accessoires (miroirs, etc.) ainsi que la **planchette**.

La planchette est le support de la **tourelle d'objectifs** et des **obturateurs**.

La planchette est fixée à l'avant du [[soufflet]](soufflets.md) et raccordé aux organes de commande qui font le lien avec les **télécommandes** en régie. 

#### Rails

- Deux rails en tube alu rond de 50 reliés par des traverses.
- Entraxe : 1000
- Longueur : Taille du chariot (550) + amplitude soufflet (400) ≃ 1000

## Éléments mobiles

Les éléments mobiles sont tous les éléments qui bougent en même temps que les optiques lors des réglages de mise au point.

L'élément mobile principal est le chariot.

Éléments mobiles qui ne sont pas démontés du chariot au stockage/transports :

- La partie nord de l'arbre rigide de commande
- La planchette
- La tourelle d'objectifs
- La courroie

Éléments mobiles que l'on démonte du chariot :

- Miroir Amici
- Miroir 45°
- La partie sud de l'arbre rigide de commande
- Les arbres flexibles de commande

### Chariot

![plan du chariot](../plans/chariot.png)

Les dimensions du chariot répondent à des contraintes liées au champ (les barres verticales ne doivent pas apparaître à l'image). La base est plus large pour assurer une meilleure stabilité du charriot sur le rail (porte-à-faux du miroir Amici).

- Fait en tube alu rond de 35 (~ 10 m).
- Les dimensions du plans sont les dimensions entre axes.
- En vert : 2 × 4 Roues de skate montées en biais sur BW et BE.
- En rouge : 12 raccords en té (ref. [JM101-B34](https://www.assemblagetubulaire.fr/raccord-te-court-jm101-b34.html)).
- En bleu : 2 raccords à 90° (ref. [JM116-B34](https://www.assemblagetubulaire.fr/raccord-angle-90-degres-jm116-b34.html)).
- En magenta : 2 paliers à semelle de l'arbre rigide de commande au centre de BS et de BN. (ref. [KSTM-10-CL](https://www.igus.fr/product/igubal_KSTM-CL?artnr=KSTM-10-CL))
- Prévoir triangulation pour maintenir la planchette verticale avec des câbles en acier pour un minimum de poids et d'encombrement.
- La planchette se fixe sur SW et SE avec des crochets.
- Une barre se fixe en biais entre HS et HW ou entre HS et HE pour soutenir Amici.
- Régler la hauteur du cadre du haut (HS, HW, HN, HE) permet de caler Amici verticalement.

#### Planchette

![plan de la planchette](../plans/planchette.png)

- La planchette est fixée sur le chariot à l'aide de 4 crochets.
- Le soufflet est fixé à l'arrière de la planchette.
- La planchette sert de support à la tourelle. La tourelle est à l'intérieur (sud) de la planchette la poulie est à l'extérieur (nord).
- C'est parallélépipède de 740×540×100 ouvert au sud (côté soufflet).
- 1 palier en applique en son centre pour accueillir l'arbre de la tourelle (ref. [EFSM-10-J4](https://www.igus.fr/product/igubal-EFSM?artnr=EFSM-10-J4)).
- 2 ouvertures de ø141 en face des objectifs de la tourelles. (266 entre axes).

À concevoir :

- À l'extérieur : 2 obturateurs
- À l'intérieur : système d'alignement de la tourelle

#### Arbre tourelle

![Plan de l'arbre de la tourelle](../plans/tourelle-arbre.png)

- Tige filetée de 10 longueur 100.
- Maintenu par le palier au centre de la planchette.
- Au sud de la planchette, supporte la tourelle.
- Au nord de la planchette, supporte une poulie pour courroie dentée.
- Les éléments supportés par la courroie sont maintenus par des écrous.

#### Courroie tourelle

![Plan de la courroie de la tourelle](../plans/tourelle-courroie.png)

La courroie permet de transmettre le mouvement de rotation de l'arbre de commande à l'arbre de la tourelle.

- Entraxe arbres : 686.5 

2 Poulies dentées moyeux amovibles (ref. [PD8M24-20MA](https://www.123courroies.com/type-8m-pas-metrique/72969-poulie-dentee-htd-moyeu-amovible-pd8m24-20ma-4014486230437.html))

- Pas : 8M
- Nombre de dents : 24
- Largeur courroie : 20
- Diamètre extérieur : 66
- Diamètre primitif : 61.12

2 Moyeux amovibles type 1108 (ref. [MA1108-10](https://www.123courroies.com/moyeu-amovible/71593-moyeu-amovible-ma1108-10-4014486251463.html))

- Diamètre d'arbre : 10
- Épaisseur : 22.2

1 Courroie dentée simple 1440 (ref. [1440-8M20](https://www.123courroies.com/courroie-dentee-8m-pas-8mm/41826-courroie-dentee-1440-8m20.html))

- Calcul théorique de la longueur de la courroie = diamètre primitif d'une poulie + 2 × entraxe arbres = 61.12 + 2 × 686.5 = 1434.12 = ~1440
- Note : la courroie dentée est moins puissante que la courroie trapézoïdale mais elle permet d'assurer la synchronisation du système.


### Tourelle

{% include pdf.html url="/contenu/plans/tourelle.pdf" %}

- Diamètre : ø490.
- 4 emplacements d'objectifs ø160. (Entraxe objectifs: ø266) 
- Au centre un trou de ø10 pour l'arbre.
- 4 gorges pour le callage
- (serrage par écrous)


#### Fûts des lentilles

![Schéma fût](../plans/fut-lentilles.png)

Dimensions :

- Diamètre de la partie qui s'emboîte : 160
- Diamètre total (encombrement) : 188
- Diamètre intérieur (ouverture) : 141.4
- Diamètre des lentilles : 154
- Largeur : ~50
- Boulons de 5 pour la fixation du fût sur la tourelle

Matériaux :

- Manchon D 160 PN16 FF à coller (ref. [ARM1B160AE](https://connexion-pression.com/raccords-pvc-pression/442-manchon-d-160-pn16-ff-a-coller.html)) (1/2 pce par fût)
- Tube D 160 PN16 PVC Pression (ref. [ATU1B160AU](https://connexion-pression.com/tubes-tuyaux-pvc-pression/69-951-tube-d-160-pn16-pvc-pression.html)) (~50 mm par fût)

#### Arbre de commande rigide

![Schéma arbre de commande](../plans/commande-arbre.png)

Fonctions :

- L'arbre est une barre ronde de 10 que l'on peut tirer et pousser pour déplacer le soufflet (Translation).
- L'arbre peut tourner sur lui même pour changer de focale sur la tourelle d'objectifs (Rotation).
- L'arbre de transmission rigide relie la planchette à la télécommande

Position :

- L'arbre de transmission doit être à 320 mm du bas de la vitre de projection afin de garantir sous le plafond de la régie un encombrement de 200 mm de rayon à 500 mm de l'isolant (marge de 100 mm par rapport aux 400 mm d'amplitude souhaités.)
- 320 sous le bas de la vitre = L'arbre de transmission à 686.5 sous l'axe optique
- Si on utilise des paliers igus KSTM-10-CL il faut compter 31.5 entre l'axe de l'arbre et l'axe du tube du bas de la petite cage

Partie nord de l'arbre :

- longueur = ~600
- Maintenue au chariot par 2 paliers à semelle de l'arbre rigide de commande au centre de BS et de BN. (ref. [KSTM-10-CL](https://www.igus.fr/product/igubal_KSTM-CL?artnr=KSTM-10-CL))
- Supporte une poulie
- Un coupleur rigide 10×10 L25 D16 pour accoupler la partie sud de l'arbre ([ebay](https://www.ebay.fr/itm/184928316764?itmmeta=01HPKEQPG4G144EB9XN2P3PADK&hash=item2b0e962d5c:g:JIoAAOSwUpFg5bVi&itmprp=enc%3AAQAIAAAA4F%2B2bicTdhLiIURZ48VUP7DRbrk5wtQRekNjeAbEsi8SLtfNO0QlPChnVNarOj3vsAcsQq6w401%2F789PGWM%2FcZLor6FCl5Zpg9x8TG2VlaoKgW7qy%2FHleYa6vzn9ZxfLPFmw0Ljd2KY98KmpOOi4j2K8JusyJdKGXb8Zb%2FcVKfLHophb5BCmL%2F4N%2BoewfOuI3orqYfFs0nEOI07AwjdUrQ2oNPDvNkDtbCzSxYdQZXAwPdBXq0NHjCSBi4LkjvdW5jzFisQOskIjSqhpvnipXZjbu%2FWWbxCj6qpMLbvCspRc%7Ctkp%3ABk9SR5jo3u60Yw))

Partie nord de l'arbre :

- longueur = ~1000
- Maintenue par 1 palier en applique fixé sur la proie intérieure de la remorque (ref. [EFSM-10-J4](https://www.igus.fr/product/igubal-EFSM?artnr=EFSM-10-J4)).
- Supporte un volant (par exemple : ref. [78521-R](https://www.elesa.com/ProductDisplay?storeId=10152&urlLangId=-2&parentCatEntryId=48502&productId=431042&categoryId=21502&top_category=21501&urlRequestType=Base&pageName=CatalogEntryPage&langId=-2&catalogId=10058))

Ouverture dans la paroi de la remorque :

- 1 bouchon Taraudé D 3/4 po. (ref. [ARB2B025BU](https://connexion-pression.com/raccords-pvc-pression/122-bouchon-taraude-d-3-4-po.html))
- 1 embout D 25/20 × 3/4 po. mixte fileté (ref. [ARE2B025CE](https://connexion-pression.com/raccords-pvc-pression/322-embout-d-25-20x3-4-po-mixte-filete.html))
- 1 collet Strié D 25 PN16 PVC (ref. [ACC1B025AU](https://connexion-pression.com/collets-brides-pvc-pression/868-collet-strie-d-25-pn16-pvc.html))
- 1 bride Libre D 32 DN 25 (ref. [ACB1B032ZU](https://connexion-pression.com/collets-brides-pvc-pression/821-bride-libre-d-32-dn-25.html))
- 1 joint EPDM D 32 PN16 Pleine Bride (ref. [ACJ1Z032ZU](https://connexion-pression.com/joints-pression/899-joint-epdm-d-32-pn16-pleine-bride.html))
- 1 tube D 25 L=~100 (ref. [ATU1D025AU](https://connexion-pression.com/tubes-tuyaux-pvc-pression/78-970-tube-d-25-pn25-pvc-pression.html#/13-taille_de_la_decoupe-decoupe_1_metre))

#### Arbres flexibles

- 1 arbre flexible par obturateur.
- Les arbres doivent être assez souples pour encaisser le déplacement de la planchette (amplitude 400mm)



