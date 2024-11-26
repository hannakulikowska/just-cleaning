export function createCard(title: string, text: string, icon: string) {
  const card = document.createElement('div');
  const titleContainer = document.createElement('div');
  const iconBackground = document.createElement('div');
  const cardIcon = document.createElement('img');
  const cardTitle = document.createElement('dt');
  const cardText = document.createElement('dd');

  cardTitle.textContent = title;
  cardText.textContent = text;
  cardIcon.src = icon;

  card.className =
    'flex flex-col p-6 bg-neutral rounded-3xl xs:p-10 group hover:origin-bottom hover:-translate-y-6 transition-all duration-300 is-in-out';
  titleContainer.className = 'flex items-center justify-start gap-6 flex-wrap';
  iconBackground.className =
    'flex items-center justify-center size-24 rounded-2xl bg-dark shrink-0 group-hover:bg-primary transition-all duration-300 is-in-out';
  cardIcon.className = 'size-16 shrink-0';
  cardTitle.className = 'text-3xl font-bold text-dark font-quicksand min-w-[139px]';
  cardText.className = 'mt-4 text-base/7 text-indigo text-balance';

  card.appendChild(titleContainer);
  titleContainer.appendChild(iconBackground);
  titleContainer.appendChild(cardTitle);
  iconBackground.appendChild(cardIcon);
  card.appendChild(cardText);

  return card;
}
