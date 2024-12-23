import { createHeroSection } from '../components/hero/hero';
import { createHeader } from '../components/header/header';
import { createFeatureSection } from '../components/feature/feature';
import { createAboutSection } from '../components/about/about';
import { createServicesSection } from '../components/services/services';
import { createStepsSection } from '../components/steps/steps';
import { createPriceSection } from '../components/price/price';
import { createFooter } from '../components/footer/footer';

export function loadHomePage() {
  const mainContainer = document.createElement('div');
  const mainContent = document.createElement('main');

  mainContainer.id = 'home-page';
  mainContainer.className = 'relative min-h-screen bg-white pt-2 sm:pt-6';
  mainContent.className = 'px-2 sm:px-6 flex flex-col gap-y-20 md:gap-y-44';

  mainContainer.appendChild(createHeader());
  mainContainer.appendChild(mainContent);
  mainContent.appendChild(createHeroSection());
  mainContent.appendChild(createAboutSection());
  mainContent.appendChild(createServicesSection());
  mainContent.appendChild(createFeatureSection());
  mainContent.appendChild(createStepsSection());
  mainContent.appendChild(createPriceSection());

  mainContainer.appendChild(createFooter());

  document.body.prepend(mainContainer);
}
