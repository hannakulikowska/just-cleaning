export function createHeadline() {
  const container = document.createElement('div');
  const eyebrow = document.createElement('h4');
  const title = document.createElement('h2');

  container.className = 'lg:mx-auto max-w-3xl xs:text-center';
  eyebrow.className = 'i-before h4-eyebrow text-white';
  title.className = 'h2-title text-white';

  eyebrow.textContent = 'Etapy pracy';
  title.textContent = 'Proces, który zapewnia doskonałe rezultaty';

  container.appendChild(eyebrow);
  container.appendChild(title);

  return container;
}
