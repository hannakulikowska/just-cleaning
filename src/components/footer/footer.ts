import { createContent } from './content';
import { createCopyright } from './copyright';

export function createFooter() {
  const footer = document.createElement('footer');
  const container = document.createElement('div');
  const background = document.createElement('div');

  footer.id = 'footer';

  footer.className = 'w-full bg-white';
  container.className = 'max-w-9xl mx-auto px-2 py-6 sm:px-6';
  background.className =
    'bg-dark bg-footer bg-no-repeat bg-left-bottom px-4 py-12 sm:p-12 lg:py-32 rounded-3xl';

  footer.appendChild(container);
  container.appendChild(background);
  container.appendChild(createCopyright());
  background.appendChild(createContent());

  return footer;
}
