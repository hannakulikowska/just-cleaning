import { createCards } from './cards';
import { createHeadline } from './headline';

export function createFeatureSection() {
  const container = document.createElement('div');
  const section = document.createElement('section');

  container.className = 'w-full bg-neutral py-12 md:py-12 lg:py-20';
  section.className = 'max-w-9xl mx-auto';

  container.appendChild(section);
  section.appendChild(createHeadline());
  section.appendChild(createCards());

  return container;
}
