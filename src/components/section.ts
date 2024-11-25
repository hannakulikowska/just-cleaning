import { appendChildren } from '../utils/appendChildren';

export function createSection(children?: HTMLElement | HTMLElement[], additionalClasses?: string) {
  const container = document.createElement('div');
  const section = document.createElement('section');

  container.className = `w-full py-12 lg:py-20 ${additionalClasses || ''}`;
  section.className = 'max-w-9xl mx-auto';

  if (children) {
    appendChildren(section, children);
  }

  container.appendChild(section);

  return container;
}
