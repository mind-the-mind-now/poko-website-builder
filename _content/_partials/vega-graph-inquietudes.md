```vegalite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
  "width": 300,
  "height": 200,
  "data": {
    "values": [
      {"year": "2022-01-01", "worried": 32},
      {"year": "2024-01-01", "worried": 45},
      {"year": "2025-01-01", "worried": 61}
    ]
  },
  "encoding": {
    "x": {
      "field": "year",
      "type": "temporal",
      "timeUnit": "year",
      "axis": {"labelFontSize": 10, "titleFontSize": 12},
      "title": "Année"
    },
    "y": {
      "field": "worried",
      "type": "quantitative",
      "scale": {"domainMin": 30},
      "axis": {"labelFontSize": 10, "titleFontSize": 12},
      "title": "Inquiets (%)"
    }
  },
  "layer": [
    {
      "mark": {
        "type": "line",
        "color": "var(--terracotta)"
      }
    },
    {
      "mark": {
        "type": "text",
        "dy": 5,
        "dx": 8,
        "fontSize": 8,
        "fill": "var(--terracotta)"
      },
      "encoding": {
        "text": {
          "field": "worried",
          "type": "quantitative"
        }
      }
    }
  ]
}
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
& text[fill="#000"] {
fill: currentColor;
}
}

{% endcss %}
