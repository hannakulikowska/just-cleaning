import { createFooter } from '../components/footer/footer';
import { createHeader } from '../components/header/header';
import { createHero } from '../components/pages/price-page/hero';
import { insertAdditionalInfo } from '../components/pages/price-page/info';
import { createContent } from '../components/pages/price-page/prices';

export function loadPricePage() {
  const mainContainer = document.createElement('div');
  const mainContent = document.createElement('main');

  mainContainer.id = 'price-page';
  mainContainer.className = 'relative min-h-screen bg-white pt-2 sm:pt-6';
  mainContent.className = 'px-2 sm:px-6 flex flex-col gap-y-12 md:gap-y-24';

  mainContainer.appendChild(createHeader());
  mainContainer.appendChild(mainContent);
  mainContainer.appendChild(createFooter());
  mainContent.appendChild(createHero());
  mainContent.appendChild(createContent());
  mainContent.appendChild(insertAdditionalInfo());

  document.body.prepend(mainContainer);
}
