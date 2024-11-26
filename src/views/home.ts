import { createHeroSection } from '../components/hero/hero';
import { createHeader } from '../components/header/header';
import { createFeatureSection } from '../components/feature/feature';
import { createAboutSection } from '../components/about/about';
import { createServicesSection } from '../components/services/services';
import { createStepsSection } from '../components/steps/steps';

export function loadHomePage() {
  const mainContainer = document.createElement('div');
  const mainContent = document.createElement('main');

  mainContainer.id = 'home-page';
  mainContainer.className = 'relative min-h-screen bg-neutral';

  mainContainer.appendChild(createHeader());
  mainContainer.appendChild(mainContent);
  mainContent.appendChild(createHeroSection());
  mainContent.appendChild(createAboutSection());
  mainContent.appendChild(createServicesSection());
  mainContent.appendChild(createFeatureSection());
  mainContent.appendChild(createStepsSection());

  document.body.prepend(mainContainer);
}
