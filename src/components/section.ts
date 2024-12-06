import { appendChildren } from '../utils/appendChildren';

export function createSection(
  children?: HTMLElement | HTMLElement[],
  id?: string,
  additionalClasses?: string
) {
  const section = document.createElement('section');
  const container = document.createElement('div');

  section.id = `${id}`;
  section.className = `w-full ${additionalClasses || ''}`;
  container.className = 'max-w-9xl mx-auto';

  if (children) {
    appendChildren(container, children);
  }

  section.appendChild(container);

  return section;
}
