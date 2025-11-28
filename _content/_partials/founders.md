<ul role="list" class="grid-fluid" style="max-inline-size:var(--width-max); --columns:8;">

{% for founder in collections.founders | asc('order') %}

<li class="flow" style="--flow-space:0.2rem;">

{% if founder.data.pagePreview.image.src %}<img src="{{founder.data.pagePreview.image.src}}" alt="{{founder.data.pagePreview.title}}" width="550" />{% endif %}

<p class="name">{{founder.data.pagePreview.title}}</p>

{{founder.data.pagePreview.description | md}}

</li>

{% endfor %}

</ul>
