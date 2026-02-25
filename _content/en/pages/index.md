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
  description: Initiative for a Universal Declaration of the Rights of the Human Mind
tags: []
status: ""
pageLayout: menuless
generatePage: ""
vars: null
dataList: []
---

{% component "home-header.md", { preHeading: "Initiative for a", heading: "Universal Declaration of the Rights of the Human Mind", bottom: "[**A Declaration, what for?**](#a-declaration-what-for) { style=text-align:center;font-size:var(--step--1-0);}\n\n[Our approach](#our-approach) [Our goal](#our-goal) [Our team](#the-steering-committee) [Ethics and scientific committee](#the-ethics-and-scientific-committee) [Contact us](/contact/) {.cluster style=justify-content:center;row-gap:.2em;font-size:var(--step--1-0);}" } %}

## A Declaration, what for?

A new <b>Declaration</b> sets a new course.

A <b>universal</b> Declaration sets a new course for the future of humanity.

The Universal Declaration <b>of the Rights of the Human Mind</b> guarantees future humanity the sovereignty of the human mind over the technologies with which it must now coexist.

Technological evolution progresses as inevitably as a child grows; but faced with its now exponential progression, we must ensure that its trajectory preserves the sovereignty and integrity of the human mind. This is what the <b>Universal Declaration of the Rights of the Human Mind</b> aims to guarantee.

<b>**_Mind the Mind Now!_**</b> is the name of the approach that drives the process of this ambitious, visionary, and necessary project.

[Learn more about the Declaration]({{ "pourquoi" | locale_url }})

::: div { #demarche .section .palette-contrast-terracotta .full-bleed-bg}

## Our Approach

A 3-stage rocket {.h3}

1. Creation of a label marking adherence to the values of the Declaration
2. Actions that will help make the principles of the Declaration a shared policy
3. Universal Declaration of the Rights of the Human Mind: An ideal and visionary stage, but urgent and necessary, that sets the course for the entire approach

[Learn more about our approach]({{ "demarche" | locale_url }})

:::

## Our Goal

Concretely, we first want to create a _Mind the Mind Now_ label. We want users to know, when they use a connected device, what and who they are dealing with.

Users generally have confidence, by default, in the digital _tools_ they use. But they have much less confidence in the future shaped by technology's grip on life and society, in other words, in the future digital ecosystem as a whole.

**Our label is a small contribution to this great design: steering innovation towards a future that deserves our long-term trust.**

[Learn more about our goal]({{ "objectif" | locale_url }})

::: div { #who-section .section .palette-contrast-terracotta .full-bleed-bg}

## Who Are We?

We are a collective seeking to promote the idea of a _Universal Declaration of the Rights of the Human Mind_.

### The Steering Committee

{% partial "founders.md" %}

[Learn more about the steering committee]({{ "a-propos" | locale_url }}#the-steering-committee){.button} {.center .intrinsic}

### The Ethics and Scientific Committee

{% partial "committee.md" %}

[Learn more about the ethics and scientific committee]({{ "a-propos" | locale_url }}#the-ethics-and-scientific-committee){.button} {.center .intrinsic}

:::

## How to Join Us?

The Universal Declaration of the Rights of the Human Mind project is ambitious and visionary.

Supporting the project means participating in the foundation of a planetary ethical framework for current and future generations.

[Contact us]({{ "contact" | locale_url }}){.button} {.center .intrinsic}

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
