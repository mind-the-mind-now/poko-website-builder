export default function ({ content, class: className }) {
  return `<section class="section section-two-columns ${className || ""}">
${content}
</section>`;
}
