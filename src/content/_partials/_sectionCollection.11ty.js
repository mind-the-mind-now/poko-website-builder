export default async function ({ content, class: className }) {
  // const renderedPartial = await this.partial("styles/_sectionCollection");
  return `<section class="section section-collection ${className || ""}">
${content}
</section>`;
}
