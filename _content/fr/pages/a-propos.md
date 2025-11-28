---
translationKey: a-propos
lang: fr
createdAt: 2025-11-28T11:44:00.000Z
uuid: 7c8881546366
localizationKey: 1f65cb374700
name: A propos
eleventyNavigation:
  order: 9
---
# La structure

## L’équipe opérationnelle

Le projet est porté par une équipe pluridisciplinaire composée de [chercheurs et de professionnels de l’industrie].

<ul role="list" class="founders grid-fluid">
{% for founder in collections.founders | asc('order') %}
<li class="founder box">
<img src="{{founder.data.pagePreview.image.src}}" alt="{{founder.data.pagePreview.title}}" width="500" />
<h3 class="h4">{{ founder.data.title }}</h3>
<p><strong>{{ founder.data.shortDescription }}</strong></p>

{{ founder.content | md }}

</li>
{% endfor %}
</ul>

## Le comité scientifique

Le comité éthique et scientifique est l'organe de réflexion interdisciplinaire qui a pour rôle de conseil et de diffusion de l’idée d’une Déclaration Universelle des Droits de l’Esprit Humain.

{% set committee = collections.committee | asc('order') %}
{% set committeeArray = committee.concat(committee).concat(committee) %}

<ul role="list" class="committee-members grid-fluid">
{% for member in committeeArray %}
<li class="committee-member box">
<img src="{{member.data.pagePreview.image.src}}" alt="{{member.data.pagePreview.title}}" width="500" />
<h3 class="h4">{{ member.data.title }}</h3>
<p>{{ member.data.shortDescription }}</p>
</li>
{% endfor %}
</ul>

{% css %}
.founders, .committee-members {
max-width: var(--max-width);
--columns: 2;
}

.committee-members {
--columns: 5;
}

.founder, .committee-member {
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
padding: var(--step--1);
border: 1px solid #ccc;
border-radius: 5px;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.founder img, .committee-member img {
aspect-ratio: 1;
object-position: top;
border-radius: 100%;
max-inline-size: 250px;
}

{% endcss %}
