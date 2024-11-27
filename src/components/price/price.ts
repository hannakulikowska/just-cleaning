import { createSection } from '../section';
import { createHeadline } from './headline';
import { createImage } from './img';

export function createPriceSection() {
  const container = document.createElement('div');
  const headline = createHeadline();
  const img = createImage();

  container.className = 'grid grid-cols-1 lg:grid-cols-2 gap-4';

  const section = createSection(container, 'bg-white', 'price');
  container.appendChild(headline);
  container.appendChild(img);

  return section;
}
