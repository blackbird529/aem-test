export default function decorate(block) {
  let sectionTitle, unexpandedText, expandedText;

  // get the section title, unexpanded text, and expanded text from the first row
  const [title, unexpanded, expanded] = block.children[0].children;
  sectionTitle = title.textContent;
  unexpandedText = unexpanded.textContent;
  expandedText = expanded.textContent;
}
