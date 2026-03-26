::::: cover { .home-header }
<!-- Language navigation -->
{% if page.url | locale_links | length %}
<ul role="list" id="lang-nav" class="flex flex-nowrap justify-center gap-[--step--2]">
{% for link in page.url | locale_links("all") %}
<li>
<a href="{{link.url}}" hreflang="{{link.lang}}" aria-current="{{ 'page' if link.lang === page.lang else 'false' }}"
><abbr lang="{{link.lang}}" title="{{link.label}}"
>{{link.lang | upper}}</abbr></a>
</li>
{% endfor %}
</ul>
{% endif %}

::: hgroup { .centered }
# {{ preHeading }} { .mbs-reset style=color:var(--terracotta);font-size:var(--step-1-5);}

{{ heading }} { .h3 style=font-size:var(--step-1-4); }
:::

:::: flow { .v--flow-space:0 }

{{ bottom | safe }}

<!-- <p class="center intrinsic"><a href="{{ 'contact' | locale_url }}" class="button">Nous rejoindre</a></p> -->

<a href="#une-declaration-pour-quoi-faire" class="scroll pile"></a>

::::

:::::

{% css %}
.home-header .h1 {
margin-block: 0;
}
.scroll {
--scroll-proportions: var(--step-2);
inline-size: var(--scroll-proportions);
block-size: var(--scroll-proportions);
margin-inline: auto;
margin-block: calc(var(--scroll-proportions) / 2);
animation: down 1.5s infinite;
align-items: center;
justify-items: center;
&::before {
content: '';
width: var(--scroll-proportions);
height: var(--scroll-proportions);
border-left: 2px solid var(--terracotta);
border-bottom: 2px solid var(--terracotta);
transform: rotate(-45deg);
}
}
@keyframes down {
0% {
transform: translate(0);
}
20% {
transform: translateY(calc(var(--scroll-proportions) / 4));
}
40% {
transform: translate(0);
}
}
{% endcss %}
