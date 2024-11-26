import { cardsData } from './cardsData';
import { createCard } from './card';

export function createCards() {
  const container = document.createElement('div');
  const list = document.createElement('dl');

  container.className = 'mx-auto mt-16 max-w-9xl sm:mt-20 lg:mt-24';
  list.className = 'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8';

  cardsData.forEach(({ title, text, icon }) => {
    const card = createCard(title, text, icon);
    list.appendChild(card);
  });

  container.appendChild(list);

  return container;
}
