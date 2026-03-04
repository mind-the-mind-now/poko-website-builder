---
translationKey: index
lang: fr
createdAt: 2025-10-29T12:33:00.000Z
uuid: 34d75906b733
localizationKey: fe784f9b8041
name: Accueil
eleventyNavigation:
  order: 1
metadata:
  title: ''
  description: Initiative pour une Déclaration Universelle des Droits de l’Esprit Humain
pageLayout: menuless
vars: null
---

{% component "home-header.md", { preHeading: "Rise for the Mind !", heading: "Initiative pour une Déclaration Universelle des Droits de l’Esprit Humain", bottom: "[**Une Déclaration, pour quoi faire?**](#une-declaration-pour-quoi-faire) { style=text-align:center;font-size:var(--step--1-0);}\n\n[Notre démarche](#notre-demarche) [Notre objectif](#notre-objectif) [Notre équipe](#le-comite-de-pilotage) [Comité éthique et scientifique](#le-comite-ethique-et-scientifique) [Nous contacter](/contact/) [Signez notre Tribune](https://preview.mindthemind-now.pages.dev/la-tribune/)\n\n{.cluster style=justify-content:center;row-gap:.2em;font-size:var(--step--1-0);}" } %}

{% partial "tribune-cta.md" %}

##

Une Déclaration, pour quoi faire?

Une nouvelle <b>Déclaration</b> donne un nouveau cap.

Une Déclaration <b>universelle</b> donne un nouveau cap pour l’humanité future.

La Déclaration universelle <b>des droits de l’esprit humain</b> garantit à l’humanité future la souveraineté de l’esprit humain sur les technologies avec lesquelles il doit désormais cohabiter.

L’évolution technologique progresse, aussi inévitablement qu’un enfant grandit ; mais face à sa progression désormais exponentielle, nous devons veiller à ce que sa trajectoire préserve la souveraineté et l’intégrité de l’esprit humain. Voilà ce que vise à garantir la <b>Déclaration universelle des droits de l’esprit humain</b>.

<b>**_Rise for the Mind  !_**</b> est le nom de la démarche qui porte le processus de ce projet ambitieux, visionnaire, et nécessaire.

[En savoir plus sur la Déclaration]({{ "pourquoi" | locale_url }})

::: div { #demarche .section .palette-contrast-terracotta .full-bleed-bg}

## Notre objectif

Concrètement, nous souhaitons d'abord créer un mouvement d'opinion pour recentrer le débat des innovations technologiques sur les questions anthropologiques essentielles. La perspective finale est d'aboutir à une reconnaissance universelle du principe de la souveraineté de l'esprit. Nous pensons que les évolutions actuelles appellent un marqueur historique d'ampleur équivalente à celle que furent les droits de l'homme à l'aube de la révolution industrielle.

Il faut mettre notre éthique commune à la hauteur des enjeux que nous impose notre époque.

[En savoir plus sur notre objectif]({{ "objectif" | locale_url }})

:::

{% partial "tribune-cta-maxi.md" %}

::: div { #who-section .section .palette-contrast-terracotta .full-bleed-bg}

## Qui sommes-nous?

Nous sommes un collectif cherchant à promouvoir l’idée d’une _Déclaration Universelle des Droits de l’Esprit Humain_.

### Le comité de pilotage

{% partial "founders.md" %}

[En savoir plus sur le comité de pilotage]({{ "a-propos" | locale_url }}#le-comite-de-pilotage){.button} {.center .intrinsic}

### Le comité éthique et scientifique

{% partial "committee.md" %}

[En savoir plus sur le comité éthique et scientifique]({{ "a-propos" | locale_url }}#le-comite-ethique-et-scientifique){.button} {.center .intrinsic}

:::

## Comment nous joindre ?

Le projet de la Déclaration Universelle des Droits de l’Esprit Humain est ambitieux, et visionnaire.

Soutenir le projet, c'est participer à la fondation d'un cadre éthique planétaire pour les générations actuelles et futures.

[Contactez-nous]({{ "contact" | locale_url }}){.button} {.center .intrinsic}

{% css %}

#who-section {
& ul {margin-block-start: var(--step-2);}
& li {text-align: center;font-size:var(--step--1);}
& p {line-height: 1.1;}
& .name {font-weight:bold;font-size:var(--step-1);}
& img {
aspect-ratio: 1;
border-radius: 100%;
background-color: currentColor;
}
}

{% endcss %}
