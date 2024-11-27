import { appendChildren } from '../utils/appendChildren';

export function createSection(
  children?: HTMLElement | HTMLElement[],
  additionalClasses?: string,
  id?: string
) {
  const container = document.createElement('div');
  const section = document.createElement('section');

  container.id = `${id}`;
  container.className = `w-full py-12 lg:py-32 ${additionalClasses || ''}`;
  section.className = 'max-w-9xl mx-auto px-2 sm:px-6';

  if (children) {
    appendChildren(section, children);
  }

  container.appendChild(section);

  return container;
}
