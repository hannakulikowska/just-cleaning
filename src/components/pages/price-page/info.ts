import { createSection } from '../../section';
import { createSocialLinks } from '../../price/social';

export function insertAdditionalInfo() {
  const container = document.createElement('div');
  container.className = 'px-4 sm:px-8';

  const heading = document.createElement('h2');
  heading.className = 'text-xl font-bold text-dark mb-4';
  heading.textContent = 'Informacje dodatkowe';

  const infoItems = [
    { text: 'Dojazd na terenie Stargardu: Gratis.' },
    { text: 'Dojazd poza Stargard: 1 zł/km.' },
    { text: 'Minimalna wartość zamówienia: 150 zł.' },
    {
      text: 'Jeśli mają Państwo pytania lub potrzebują indywidualnej wyceny, zapraszamy do kontaktu z nami.',
    },
  ];

  const list = document.createElement('ul');
  list.className = 'list-none space-y-2';

  infoItems.forEach(({ text }) => {
    const listItem = document.createElement('li');
    listItem.className = 'flex items-start';

    const textElement = document.createElement('p');
    textElement.className = 'text-indigo';
    textElement.textContent = text;
    listItem.appendChild(textElement);

    list.appendChild(listItem);
  });

  container.appendChild(heading);
  container.appendChild(list);
  container.appendChild(createSocialLinks());
  return createSection(container, 'price-additional-info', 'mb-12');
}
