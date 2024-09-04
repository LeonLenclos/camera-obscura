# Objet
![Photo de la remorque à l'Abbaye de l'Escaladieu](photos/co-escaladieu-1.JPG)

Objets utilisés dans le film [*Souvenirs du futur*](../ecriture/souvenirs-du-futur.md).

- [Décors et accessoires](decors-accessoires.md)
- [Costumes](costumes.md) (et maquillage, coiffure)
- [Maquettes](maquettes.md)
- [Animations](animations.md) (plaques animées et marionettes)
- [Photos](photos.md)

## Rouleaux

- [titre](rouleau-titre.md) (source)
- [titre](rouleau-titre.pdf) (pdf)
- [photo](rouleau-photo.md) (source)
- [photo](rouleau-photo.pdf) (pdf)

```
# Créer pdf rouleau titre
wkhtmltopdf -T 0mm -B 0mm -L 0mm -R 0mm \
--page-width 500 --page-height 7010mm \
"https://camera-obscura.cienokill.fr/contenu/objet/rouleau-titre" rouleau-titre.pdf

# Créer pdf rouleau photo
wkhtmltopdf -T 0mm -B 0mm -L 0mm -R 0mm \
--page-width 780 --page-height 4010mm \
"https://camera-obscura.cienokill.fr/contenu/objet/rouleau-photo" rouleau-photo.pdf
```
