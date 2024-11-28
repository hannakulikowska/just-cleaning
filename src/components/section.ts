import { appendChildren } from '../utils/appendChildren';

export function createSection(
  children?: HTMLElement | HTMLElement[],
  additionalClasses?: string,
  id?: string
) {
  const section = document.createElement('section');
  const container = document.createElement('div');

  section.id = `${id}`;
  section.className = `w-full py-12 lg:py-32 ${additionalClasses || ''}`;
  container.className = 'max-w-9xl mx-auto px-2 sm:px-6';

  if (children) {
    appendChildren(container, children);
  }

  section.appendChild(container);

  return section;
}
