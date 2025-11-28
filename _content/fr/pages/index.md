---
translationKey: index
lang: fr
createdAt: 2025-10-29T12:33:00.000Z
uuid: 34d75906b733
localizationKey: fe784f9b8041
pageLayout: menuless
name: Accueil
eleventyNavigation:
  order: 1
---
{# {% section type="cover", vars={"minHeight":"","noPadding":false,"gap":""}, blocks=[{"value":"# [Initiative pour une]{style=color:var(--terracotta);font-size:var(--step-1-5);}<br>Déclaration Universelle des Droits de l’Esprit Humain {.centered style=font-size:var(--step-4-6);}\n\n[Nous rejoindre](#contact-form){.button} {.center .intrinsic}\n\n<a href=\"#sub-title\" class=\"scroll pile\"></a>","type":"markdown"}], advanced={} %} #}

{% component "home-header.md", { preHeading: "Initiative pour une", heading: "Déclaration Universelle des Droits de l’Esprit Humain", bottom: "[Pourquoi?](#une-declaration-pour-quoi-faire) [Notre démarche](#notre-demarche) [Notre objectif](#notre-objectif) [Nous contacter](/contact/) {.cluster style=justify-content:center;}" } %}

Numérique, IA & métatechnologies: quel avenir voulons-pour l’humanité? {.h2 #sub-title}

Nous sommes débordés par les avancées exponentielles des métatechnologies.
Sans un nouveau cadre éthique global, toutes nos mesures, réglementations et dispositions sont vouées à rester locales, parcellaires et au total inefficaces.

Soutenir la DUDEH, c'est participer à la fondation d'un cadre éthique planétaire pour les générations actuelles et futures.

## Une Déclaration, pour quoi faire?

Une Déclaration universelle donne un nouveau cap pour l’humanité future.

La Déclaration universelle des droits de l’esprit humain garantit à l’humanité future la souveraineté de l’esprit humain sur les technologies avec lesquelles il doit désormais cohabiter.

L’évolution technologique progresse, aussi inévitablement qu’un enfant grandit ; mais face à sa progression désormais exponentielle, veillons à ce que sa trajectoire préserve la souveraineté et l’intégrité de l’esprit humain. Voilà ce que vise à garantir la Déclaration universelle des droits de l’esprit humain.

Mind the Mind Now est le nom de la démarche et du collectif qui porte le processus de ce projet ambitieux, visionnaire, et nécessaire.

[En savoir plus sur le "pourquoi"]({{ "pourquoi" | locale_url }})

::: div { #demarche .section .palette-contrast-terracotta .full-bleed-before}

## Notre démarche

Une fusée à 3 étages {.h3}

1. Création d’un label marquant l’adhésion aux valeurs de la Déclaration
2. Actions qui contribueront à faire des principes de la Déclaration une politique partagée
3. Déclaration universelle des droits de l’esprit humain: Etage idéal et visionnaire, mais urgent et nécessaire, qui donne le cap à l’ensemble de la démarche

[En savoir plus sur notre démarche]({{ "demarche" | locale_url }})

:::

## Notre objectif

Concrètement, nous voulons d’abord créer un label _Mind the Mind Now_. Nous voulons que les utilisateurs sachent, lorsqu’ils utilisent un dispositif connecté, à quoi et à qui ils ont à faire.

Les utilisateurs ont globalement confiance, par défaut, dans les _outils_ numériques qu’ils utilisent. Mais ils ont beaucoup moins confiance dans l’avenir que dessine l’emprise des technologies sur la vie et la société, autrement dit dans l’écosystème numérique futur pris dans son ensemble.

**Notre label est une petite contribution à ce grand dessein: orienter l’innovation vers un avenir qui mérite notre confiance de long terme.**

[En savoir plus sur notre objectif]({{ "objectif" | locale_url }})

::: div { #who-section .section .palette-contrast-terracotta .full-bleed-before}

## Qui sommes-nous?

Nous sommes un collectif cherchant à promouvoir l’idée d’une DUDEH.

### Les membres fondateurs

{% partial "founders.md" %}

[Découvrez les acteurs du projet]({{ "a-propos" | locale_url }}){.button} {.center .intrinsic}


### Le comité scientifique

{% partial "committee.md" %}

[Découvrez les acteurs du projet]({{ "a-propos" | locale_url }}){.button} {.center .intrinsic}

:::

## Comment nous rejoindre?

Le projet de la DUDEH est ambitieux, et visionnaire.

Soutenir la DUDEH, c'est participer à la fondation d'un cadre éthique planétaire pour les générations actuelles et futures.

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
