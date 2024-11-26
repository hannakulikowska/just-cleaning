import { createSection } from '../section';
import { createHeadline } from './headline';
import { createCards } from './cards';

export function createServicesSection() {
  const headline = createHeadline();
  const cards = createCards();

  const section = createSection([headline, cards], 'bg-white');

  return section;
}
