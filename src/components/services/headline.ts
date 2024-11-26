export function createHeadline() {
  const container = document.createElement('div');
  const eyebrow = document.createElement('h4');
  const title = document.createElement('h2');

  container.className = 'lg:mx-auto max-w-3xl xs:text-center';
  eyebrow.className = 'i-before h4-eyebrow';
  title.className = 'h2-title';

  eyebrow.textContent = 'Zakres działania';
  title.textContent = 'Świadczymy usługi na terenie Szczecina, Stargardu i okolic';

  container.appendChild(eyebrow);
  container.appendChild(title);

  return container;
}
