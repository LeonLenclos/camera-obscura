{% include alert.html type="pas-interessant" %}

# Meta

Ce fichier contient des notes et des ressources utiles à la rédaction du site

## Markdown

- [Markdown cheat sheet](https://www.markdownguide.org/cheat-sheet/) : rapide mémo pour la syntaxe Markdown
- [gfm doc](https://github.github.com/gfm/) : documentation complète de la syntaxe étendue de Markdown utilisée par github
- [Table to Markdown](https://tabletomarkdown.com/) : copier-coller depuis un logiciel de tableur et obtenir un tableau markdown

## Includes

### PDF

Pour intégrer un fichier pdf :

{% raw %}
```liquid
{% include pdf.html url="URL DU PDF" %}
```
{% endraw %}

#### Resultat :

Avec l'url ```/contenu/technique/fiche-technique.pdf``` :

{% include pdf.html url="/contenu/technique/fiche-technique.pdf" %}

### Avertissement

Pour intégrer un avertissement :

{% raw %}
```liquid
{% include alert.html title="TITRE" text="TEXTE" %}
```
{% endraw %}

Pour intégrer un avertissement pré-remplis :

{% raw %}
```liquid
{% include alert.html type="TYPE DE L'AVERTISSEMENT" %}
```
{% endraw %}

Les types dispo sont :

- mettre-a-jour : {% raw %}``` {% include alert.html type="mettre-a-jour" %} ``` {% endraw %}
- archive : {% raw %}``` {% include alert.html type="archive" %} ``` {% endraw %}
- redaction-en-cours : {% raw %}``` {% include alert.html type="redaction-en-cours" %} ``` {% endraw %}
- pas-interessant : {% raw %}``` {% include alert.html type="pas-interessant" %} ``` {% endraw %}

#### Resultat :

Avec le titre ```Attention``` et le texte ```Ceci est un avertissement``` :

{% include pdf.html url="contenu/technique/fiche-technique.pdf" %}

Avec le type ```mettre-a-jour``` :

{% include alert.html type="mettre-a-jour" %}

Avec le type ```archive``` :

{% include alert.html type="archive" %}

Avec le type ```redaction-en-cours``` :

{% include alert.html type="redaction-en-cours" %}

Avec le type ```pas-interessant``` :

{% include alert.html type="pas-interessant" %}

