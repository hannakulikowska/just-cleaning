import { createBanner } from '../components/banner/banner';
import { createHeader } from '../components/header/header';

export function loadHomePage() {
  const mainContainer = document.createElement('div');
  const mainContent = document.createElement('main');

  mainContainer.id = 'home-page';
  mainContainer.className = 'relative min-h-screen bg-neutral px-6';

  mainContainer.appendChild(createHeader());
  mainContainer.appendChild(mainContent);
  mainContent.appendChild(createBanner());

  document.body.prepend(mainContainer);
}