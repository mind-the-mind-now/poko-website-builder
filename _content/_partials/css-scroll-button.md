{% css %}
.scroll {
--_proportions: var(--step-2);
inline-size: var(--_proportions);
block-size: var(--_proportions);
margin-inline: auto;
margin-block: calc(var(--_proportions) / 2);
animation: down 1.5s infinite;
align-items: center;
justify-items: center;
&::before {
content: '';
width: var(--_proportions);
height: var(--_proportions);
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
transform: translateY(calc(var(--_proportions) / 4));
}
40% {
transform: translate(0);
}
}
{% endcss %}
