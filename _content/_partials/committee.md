
{% set committee = collections.committee | asc('order') %}
{% set committeeArray = committee.concat(committee).concat(committee) %}

<ul role="list" class="grid-fluid" style="max-inline-size:var(--width-max); --columns:8;">

{% for member in committeeArray %}

<li class="flow" style="--flow-space:0.2rem;">

{% if member.data.pagePreview.image.src %}<img src="{{member.data.pagePreview.image.src}}" alt="{{member.data.pagePreview.title}}" width="550" />{% endif %}

<p class="name">{{member.data.pagePreview.title}}</p>

{{member.data.pagePreview.description | md}}

</li>

{% endfor %}

</ul>
