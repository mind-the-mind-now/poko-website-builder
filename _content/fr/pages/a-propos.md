---
translationKey: a-propos
lang: fr
createdAt: 2025-11-28T11:44:00.000Z
uuid: 7c8881546366
localizationKey: 1f65cb374700
name: Nos équipes
eleventyNavigation:
  order: 9
---

# Nos équipes

::: div { .section .palette-contrast-terracotta .full-bleed-bg }

## Le comité de pilotage

<ul role="list" class="founders grid-fluid mbs-reset">
{% for founder in collections.founders | asc('order') %}
<li class="founder box palette-main">
<img src="{{founder.data.pagePreview.image.src}}" alt="{{founder.data.pagePreview.title}}" width="500" />
<h3 class="name h4">{{ founder.data.title }}</h3>

{{ founder.content | md }}

</li>
{% endfor %}
</ul>

:::

## Le comité éthique et scientifique

Le comité éthique et scientifique est l'organe de réflexion interdisciplinaire qui a pour rôle de conseil et de diffusion de l’idée d’une Déclaration Universelle des Droits de l’Esprit Humain.

<ul role="list" class="committee-members grid-fluid mbs-reset">
{% for member in collections.committee | asc('order') %}
<li class="committee-member box palette-main">
<img src="{{member.data.pagePreview.image.src}}" alt="{{member.data.pagePreview.title}}" width="500" />
<h3 class="name h4">{{ member.data.title }}</h3>

{{ member.content | md }}

</li>
{% endfor %}
</ul>

{% css %}
.founders, .committee-members {
max-inline-size: var(--width-max);
--columns: 2;
}

.founder, .committee-member {
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
padding: var(--step--1);
border-radius: var(--radius-m);
box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, .3);
background-color: var(--cream-light);
min-width: 0;
}

.founder img, .committee-member img {
aspect-ratio: 1;
object-position: top;
border-radius: 100%;
max-inline-size: 250px;
}

.founder .flow, .committee-member .flow {
font-size: var(--step--1);
--flow-space: calc(1em / 3);
inline-size: 100%;
}

.founder .name + \*, .committee-member .name + \* {
margin-block-start: 0.5em;
}

{% endcss %}
