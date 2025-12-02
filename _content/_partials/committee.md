<ul role="list" class="committee-list-summary grid-fluid" style="max-inline-size:var(--width-max); --columns:8;">

{% for member in collections.committee | asc('order') %}

<li class="flow" style="--flow-space:0.2rem;">

{% if member.data.pagePreview.image.src %}<img src="{{member.data.pagePreview.image.src}}" alt="{{member.data.pagePreview.title}}" width="550" />{% endif %}

<p class="name">{{member.data.pagePreview.title}}</p>

{{member.data.pagePreview.description | md}}

</li>

{% endfor %}

</ul>
