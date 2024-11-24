export function createCard(title: string, text: string, icon: string) {
  const card = document.createElement('div');
  const cardTitle = document.createElement('dt');
  const iconContainer = document.createElement('div');
  const cardText = document.createElement('dd');

  cardTitle.textContent = title;
  cardText.textContent = text;

  card.className = 'relative pl-16';
  cardTitle.className = 'text-lg font-semibold text-indigo';
  iconContainer.className = `absolute left-0 top-0 flex items-center justify-center size-10 rounded-lg bg-white ${icon} pt-2`;
  cardText.className = 'mt-2 text-base/7 text-indigo';

  card.appendChild(cardTitle);
  cardTitle.appendChild(iconContainer);
  card.appendChild(cardText);

  return card;
}
