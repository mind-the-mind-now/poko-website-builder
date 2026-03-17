---
translationKey: index
lang: en
createdAt: 2025-10-29T12:33:00.000Z
uuid: 34d75906b733
localizationKey: fe784f9b8041
name: Home
eleventyNavigation:
  order: 1
metadata:
  title: ''
  description: Initiative for a Universal Declaration of the Rights of the Human Mind
pageLayout: menuless
vars: null
---

{% component "home-header.md", { preHeading: "Rise for the Mind!", heading: "Initiative for a Universal Declaration of the Rights of the Human Mind", bottom: "[**A Declaration, what for?**](#a-declaration-what-for) { style=text-align:center;font-size:var(--step--1-0);}\n\n[Our goal](#our-goal) [Our team](#the-steering-committee) [Ethics and scientific committee](#the-ethics-and-scientific-committee) [Contact us](/en/contact/) {.cluster style=justify-content:center;row-gap:.2em;font-size:var(--step--1-0);}\n\n[Sign the Petition!](/en/la-tribune/)" } %}

::: section { .section .text-center .flex .flex-col .gap-[--step-2] .palette-contrast-terracotta .full-bleed-bg}

## Let's rise to declare the rights of the human mind! { .h1 }

{% link url="la-tribune", text="Signing is already acting", linkType="internal", collection="pages", class="button" %} { .font-size-[--step-1] }

:::

::: section { #demarche }

## A Declaration, what for?

A <b>Declaration</b> sets a course.

A <b>universal</b> Declaration sets a course for the future of humanity.

The Universal Declaration <b>of the Rights of the Human Mind</b> guarantees future humanity the sovereignty of the human mind over the technologies with which it must now coexist.

Technological evolution progresses as inevitably as a child grows; but faced with its now exponential progression, we must ensure that its trajectory preserves the sovereignty and integrity of the human mind. This is what the <b>Universal Declaration of the Rights of the Human Mind</b> aims to guarantee.

<b>**_Rise for the Mind!_**</b> is the name of the approach that drives the process of this ambitious, visionary, and necessary project.

[Learn more about the Declaration]({{ "pourquoi" | locale_url }})

{% sectionTwoColumns %}
{% sectionHeader %}
## The initiative is based on the work of Mark Hunyadi, philosopher and author.
{% endsectionHeader %}
{% twoColumns type="fixedFluid", class="prose", widthFixed="var(--width-card)", fixedSide="fixedLeft" %}
{% twoColumnsItem %}
{% image src="/_images/declaration.webp", alt="Mark Hunyadi Universal Declaration of the Rights of the Human Mind", width="200" %}
{% endtwoColumnsItem %}
{% twoColumnsItem %}
Digital technology and metatechnologies are colonizing the most human part of man: his mind, which encompasses far more than just his cognitive functions. Now, if it is the mind that is under attack, it is the mind that must be protected. Such is the meaning of this proposal (published: May 2024.)

[Read the presentation interview in Philosophie Magazine (May 2024)](https://markhunyadi.wordpress.com/wp-content/uploads/2024/04/mai_philosophie-magazine_declaration-universelle-des-droits-de-lesprit-humain-1.pdf)

[www.markhunyadi.be](https://www.markhunyadi.be)
{% endtwoColumnsItem %}
{% endtwoColumns %}

{% endsectionTwoColumns %}

:::

::: section { #demarche .section .palette-contrast-terracotta .full-bleed-bg}

## Our Goal

Concretely, we first want to create a movement of opinion to refocus the debate on technological innovations around essential anthropological questions. The ultimate goal is to achieve universal recognition of the principle of the sovereignty of the mind. We believe that current developments call for a historical marker of equivalent magnitude to what human rights were at the dawn of the industrial revolution.

Let us raise our common ethics to the level of the challenges our era imposes on us.

[Learn more about our goal]({{ "objectif" | locale_url }})

:::

::: section

## The Petition

> It is not about rejecting progress, but about guiding it.
> >
> It is not about slowing down innovation, but about giving it direction.
> >
> It is not about feeding fear, but about affirming an ambition: that of a harmonious coexistence between human intelligence and the technologies it has created.
> >
> We believe that such a Declaration would constitute a common reference point and a direction capable of uniting educational, legal, scientific, and civic initiatives that are currently scattered. It would be a clear signal to institutions, technology companies, and citizens of the world: the sovereignty of the mind is a non-negotiable principle.

[Learn more about the Petition to sign]({{ "la-tribune" | locale_url }})

:::

::: section { #who-section .section .palette-contrast-terracotta .full-bleed-bg}

## Who Are We?

We are a collective seeking to promote the idea of a _Universal Declaration of the Rights of the Human Mind_.

### The Steering Committee

{% partial "founders.md" %}

[Learn more about the steering committee]({{ "a-propos" | locale_url }}#the-steering-committee){.button} {.center .intrinsic}

### The Ethics and Scientific Committee

{% partial "committee.md" %}

[Learn more about the ethics and scientific committee]({{ "a-propos" | locale_url }}#the-ethics-and-scientific-committee){.button} {.center .intrinsic}

:::

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
