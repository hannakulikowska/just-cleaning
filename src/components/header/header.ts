import { createBurgerButton } from './burgerButton';
import { createLogo } from '../logo';
import { createNav } from './nav';
import { createOverlay } from './overlay';
import { createPhoneButton } from './phoneButton';
import { toggleMenu } from '../../utils/toggleMenu';

export function createHeader() {
  const header = document.createElement('header');
  header.className =
    'max-w-9xl absolute z-[8] left-0 right-0 mx-auto w-full flex items-center justify-between bg-transparent px-6 sm:px-12';

  const burgerButton = createBurgerButton();
  const { nav, closeButton } = createNav();
  const overlay = createOverlay();

  const ANIMATION_DURATION = 300;

  burgerButton.addEventListener('click', () => toggleMenu(nav, overlay, ANIMATION_DURATION));
  overlay.addEventListener('click', () => toggleMenu(nav, overlay, ANIMATION_DURATION));
  closeButton.addEventListener('click', () => toggleMenu(nav, overlay, ANIMATION_DURATION));

  header.appendChild(createLogo());
  header.appendChild(createPhoneButton());
  header.appendChild(burgerButton);
  header.appendChild(nav);
  header.appendChild(overlay);

  return header;
}
