export function createHeadline() {
  const container = document.createElement('div');
  const eyebrow = document.createElement('h4');
  const title = document.createElement('h2');
  const subtitle = document.createElement('p');

  container.className = 'lg:mx-auto max-w-3xl lg:text-center';
  eyebrow.className = 'i-before h4-eyebrow';
  title.className = 'h2-title';
  subtitle.className = 'p-subtitle';

  eyebrow.textContent = 'Dlaczego warto nas wybrać';
  title.textContent = 'Nasze atuty, które zapewniają Twoją satysfakcję';
  subtitle.textContent =
    'Zaufaj naszemu doświadczeniu i profesjonalizmowi. Nasze usługi opierają się na nowoczesnym sprzęcie oraz skutecznych środkach chemicznych, które gwarantują najwyższą jakość prania tapicerki.';

  container.appendChild(eyebrow);
  container.appendChild(title);
  container.appendChild(subtitle);

  return container;
}
