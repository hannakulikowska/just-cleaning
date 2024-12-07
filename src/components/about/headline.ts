export function createHeadlineBlock() {
  const container = document.createElement('div');
  const eyebrow = document.createElement('h4');
  const title = document.createElement('h2');
  const subtitle = document.createElement('p');

  container.className = 'lg:pr-8 lg:max-w-6xl';
  eyebrow.className = 'i-before h4-eyebrow';
  title.className = 'h2-title';
  subtitle.className = 'p-subtitle';

  eyebrow.textContent = 'O nas';
  title.textContent = 'Profesjonalna chemia i doświadczenie';

  const subtitleTextParts = [
    'Jesteśmy lokalną firmą, która specjalizuje się w ',
    'czyszczeniu i praniu tapicerki meblowej, dywanów i wykładzin. ',
    'Naszą misją jest dostarczanie usług najwyższej jakości, które spełniają oczekiwania nawet najbardziej wymagających klientów. Dbamy o każdy szczegół, przestrzegając wszystkich etapów technologii czyszczenia i prania. Korzystamy wyłącznie z profesjonalnego sprzętu oraz preparatów renomowanych marek, które skutecznie usuwają nawet najtrudniejsze zabrudzenia.',
  ];

  subtitleTextParts.forEach((text, index) => {
    const span = document.createElement('span');
    if (index === 1) {
      span.className = 'font-bold';
    }
    if (index === 3) {
      span.className = 'font-bold underline decoration-primary decoration-2 underline-offset-8';
    }
    span.textContent = text;
    subtitle.appendChild(span);
  });

  container.appendChild(eyebrow);
  container.appendChild(title);
  container.appendChild(subtitle);

  return container;
}
