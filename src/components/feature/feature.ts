import { createCards } from './cards';
import { createHeadline } from './headline';
import { createSection } from '../section';

export function createFeatureSection() {
  const headline = createHeadline();
  const cards = createCards();

  const section = createSection([headline, cards], 'bg-neutral');

  return section;
}
