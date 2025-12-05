::::: cover

# [{{ preHeading }}]{style=color:var(--terracotta);font-size:var(--step-1-5);}<br>{{ heading }} {.centered style=font-size:var(--step-4-6);}

:::: flow

{{ bottom | safe }}

<!-- <p class="center intrinsic"><a href="{{ 'contact' | locale_url }}" class="button">Nous rejoindre</a></p> -->

<a href="#une-declaration-pour-quoi-faire" class="scroll pile"></a>

::::

:::::

{% css %}
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
