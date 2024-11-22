export function createButton(
  text: string,
  href: string,
  additionalClasses?: string,
  ariaLabel?: string
) {
  const link = document.createElement('a');
  link.href = href;
  link.className = `btn text-xs sm:text-sm px-[28px] py-[12px] sm:px-10 sm:py-4 ${additionalClasses}`;
  link.textContent = text;

  if (ariaLabel) {
    link.setAttribute('aria-label', ariaLabel);
  }

  return link;
}
