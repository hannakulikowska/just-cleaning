import { createBanner } from '../components/banner/banner';
import { createHeader } from '../components/header/header';
import { createFeatureSection } from '../components/feature/feature';
import { createAboutSection } from '../components/about/about';

export function loadHomePage() {
  const mainContainer = document.createElement('div');
  const mainContent = document.createElement('main');

  mainContainer.id = 'home-page';
  mainContainer.className = 'relative min-h-screen bg-neutral px-2 sm:px-6';

  mainContainer.appendChild(createHeader());
  mainContainer.appendChild(mainContent);
  mainContent.appendChild(createBanner());
  mainContent.appendChild(createAboutSection());
  mainContent.appendChild(createFeatureSection());

  document.body.prepend(mainContainer);
}
