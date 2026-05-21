---
translationKey: index
order: 1
lang: en
createdAt: 2025-10-29T12:33:00.000Z
name: Home
eleventyNavigation:
  add: Nav
metadata:
  description: Initiative for a Universal Declaration of the Rights of the Human Mind
localizationKey: fe784f9b8041
uuid: 34d75906b733
---

{% sectionTwoColumns class="breathe" %}

{% twoColumns type="fixedFluid", fixedSide="fixedLeft", class="items-center" %}
{% twoColumnsItem  %}
{% image src="/_images/rise-logo-options-v7-03-1.webp", width=300 %}
{% endtwoColumnsItem %}
{% twoColumnsItem  %}

# Initiative for a Universal Declaration of the Rights of the Human Mind

{% endtwoColumnsItem %}
{% endtwoColumns %}

{% endsectionTwoColumns %}

::: section { .section .text-center .flex .flex-col .gap-[--step-2] .palette-contrast-terracotta .bleed-bg}

## Let's rise to declare the rights of the human mind!

{% link url="la-tribune", type="internal", collection="pages", class="button" %}Signing is already acting{% endlink %} { .font-size-[--step-1] }

:::

{% sectionTwoColumns class="width-prose" %}
{% sectionHeader  %}

## The initiative is based on the work of Mark Hunyadi, philosopher and author.

{% endsectionHeader %}
{% twoColumns type="fixedFluid", widthFixed="var(--width-card)", fixedSide="fixedLeft", class="prose" %}
{% twoColumnsItem  %}
{% image src="/_images/mark-book.webp", alt="Mark Hunyadi, Universal Declaration of the Rights of the Human Mind", width="325" %}
{% endtwoColumnsItem %}
{% twoColumnsItem  %}
Digital technology and metatechnologies are colonizing the most human part of man: his mind, which encompasses far more than just his cognitive functions. Now, if it is the mind that is under attack, it is the mind that must be protected. Such is the meaning of this proposal (published: May 2024.)

[Read the presentation interview in Philosophie Magazine (May 2024)](https://markhunyadi.wordpress.com/wp-content/uploads/2024/04/mai_philosophie-magazine_declaration-universelle-des-droits-de-lesprit-humain-1.pdf)

[www.markhunyadi.be](https://www.markhunyadi.be)
{% endtwoColumnsItem %}
{% endtwoColumns %}

{% endsectionTwoColumns %}

::: section { #demarche }

## A Declaration, what for?

A <b>Declaration</b> sets a course.

A <b>universal</b> Declaration sets a course for the future of humanity.

The Universal Declaration <b>of the Rights of the Human Mind</b> guarantees future humanity the sovereignty of the human mind over the technologies with which it must now coexist.

Technological evolution progresses as inevitably as a child grows; but faced with its now exponential progression, we must ensure that its trajectory preserves the sovereignty and integrity of the human mind. This is what the <b>Universal Declaration of the Rights of the Human Mind</b> aims to guarantee.

<b>**_Rise for the Mind!_**</b> is the name of the approach that drives the process of this ambitious, visionary, and necessary project.

[Learn more about the Declaration]({{ "pourquoi" | locale_url }})

:::

::: section { #demarche .section .palette-contrast-terracotta .bleed-bg}

## Our Goal

Concretely, we first want to create a movement of opinion to refocus the debate on technological innovations around essential anthropological questions. The ultimate goal is to achieve universal recognition of the principle of the sovereignty of the mind. We believe that current developments call for a historical marker of equivalent magnitude to what human rights were at the dawn of the industrial revolution.

Let us raise our common ethics to the level of the challenges our era imposes on us.

[Learn more about our goal]({{ "objectif" | locale_url }})

:::

::: section

## The Petition

> It is not about rejecting progress, but about guiding it.
>
> It is not about slowing down innovation, but about giving it direction.
>
> It is not about feeding fear, but about affirming an ambition: that of a harmonious coexistence between human intelligence and the technologies it has created.
>
> We believe that such a Declaration would constitute a common reference point and a direction capable of uniting educational, legal, scientific, and civic initiatives that are currently scattered. It would be a clear signal to institutions, technology companies, and citizens of the world: the sovereignty of the mind is a non-negotiable principle.

{% link url="la-tribune", type="internal", collection="pages" %}Learn more about the Petition to sign{% endlink %}

:::

{% sectionBuilder class="palette-contrast-terracotta full-bleed-bg", id='who-section' %}
{% sectionHeader class="prose" %}

## Who Are We?

We are a collective seeking to promote the idea of a _Universal Declaration of the Rights of the Human Mind_.
{% endsectionHeader %}
{% areaRaw class="area prose" %}

### The Steering Committee

{% endareaRaw %}
{% collection collection="founders", type="grid-fluid", itemPartial="person-card" %}{% endcollection %}
{% areaRaw class="area prose" %}
{% link url="a-propos", anchor="the-steering-committee", type="internal", collection="pages", class="button" %}Learn more about the steering committee{% endlink %}
{% endareaRaw %}
{% areaRaw class="area prose" %}

### The Ethics and Scientific Committee

{% endareaRaw %}
{% collection collection="committee", type="grid-fluid", columns=8, itemPartial="person-card" %}{% endcollection %}
{% areaRaw class="area prose" %}
{% link url="a-propos", anchor="the-ethics-and-scientific-committee", type="internal", collection="pages", class="button" %}Learn more about the ethics and scientific committee{% endlink %}
{% endareaRaw %}
{% areaRaw class="prose" %}

### The Youth Committee

{% endareaRaw %}
{% twoColumns type="fixedFluid", fixedSide="fixedLeft", class="prose items-center" %}
{% twoColumnsItem  %}
{% image src="/_images/img_1796.webp", aspectRatio=1, width=350, class="radius-round" %}
{% endtwoColumnsItem %}
{% twoColumnsItem  %}
::: flow { .font-size-[--step-1] }
Camille Deprez
Virgile Nieuwenhuys
Marion Zimmermann
Sarah Deblocq
Eve Bellemans
Auguste Nieuwenhuys
:::
{% endtwoColumnsItem %}
{% endtwoColumns %}

{% endsectionBuilder %}

::: section

## How to Contact Us?

The Universal Declaration of the Rights of the Human Mind project is ambitious and visionary.

Supporting the project means participating in the foundation of a planetary ethical framework for current and future generations.

[Contact us]({{ "contact" | locale_url }}){.button} {.center .intrinsic}

:::

{% css %}

#who-section {
& ul {margin-block-start: var(--step-2);}
& li {text-align: center;font-size:var(--step--1);}
& p {line-height: 1.1;}
& .name {font-weight:bold;font-size:var(--step-1);}
& img {
aspect-ratio: 1;
border-radius: 100%;
background-color: currentColor;
}
}

{% endcss %}
