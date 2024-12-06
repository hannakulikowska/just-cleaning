import { createHeadlineBlock } from './headline';
import { createSection } from '../section';
import { createImage } from './image';

export function createAboutSection() {
  const innerContainer = document.createElement('div');
  innerContainer.className = 'grid grid-cols-1 gap-x-8 lg:gap-x-16 gap-y-8 md:grid-cols-2';

  const section = createSection(innerContainer, 'home-about');
  innerContainer.appendChild(createImage());
  innerContainer.appendChild(createHeadlineBlock());

  return section;
}
