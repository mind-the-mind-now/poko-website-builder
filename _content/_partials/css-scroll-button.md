{% css %}
.scroll {
--_proportions: var(--step-2);
inline-size: var(--_proportions);
block-size: var(--_proportions);
margin-inline: auto;
border: 2px solid currentColor;
border-radius: 50%;
animation: down 1.5s infinite;
align-items: center;
justify-items: center;
&::before {
content: '';
width: calc(var(--_proportions) / 4);
height: calc(var(--_proportions) / 4);
border-left: 2px solid currentColor;
border-bottom: 2px solid currentColor;
transform: rotate(-45deg);
margin-top: calc(var(--_proportions) \* -0.05);
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
