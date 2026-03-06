export default async function ({ content, class: className }) {
  // const renderedPartial = await this.partial("styles/_sectionGrid");
  return `<section class="section section-grid ${className || ""}">
${content}
</section>`;
}
