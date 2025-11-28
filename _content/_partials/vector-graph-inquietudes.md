
```line-chart
---
temporal: true
color: var(--terracotta)
width: 200
height: 100
---
Année,Inquiets (%)
2022-01-01,32
2024-01-01,45
2025-01-01,61
```

{% css %}

.chart {
max-inline-size: var(--width-prose);
margin-inline: auto;
padding-block: var(--step-3);
}
.chart svg {
max-inline-size: 500px;

& .background {
  stroke: transparent;
} 

& > rect {
    fill: transparent;
}
& .mark-rule.role-axis line,
& .mark-rule.role-axis-domain line,
& .mark-rule.role-axis-tick line {
  stroke: currentColor;
}
& .mark-rule.role-axis-grid line {
  stroke: hsl(from var(--terracotta) h s l/0.2);
}
& text {
  fill: currentColor;
}
}

{% endcss %}
