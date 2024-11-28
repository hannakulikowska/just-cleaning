export function createCopyright() {
  const copyright = document.createElement('p');

  const currentYear = new Date().getFullYear();
  copyright.textContent = `© 2022-${currentYear} Just Cleaning. Wszystkie prawa zastrzeżone.`;

  copyright.className = 'text-xs pt-6 text-center';

  return copyright;
}
