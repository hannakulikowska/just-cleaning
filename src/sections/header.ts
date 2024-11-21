import { createBurgerButton } from '../components/burgerButton';
import { createLogo } from '../components/logo';
import { createNav } from '../components/nav';
import { createOverlay } from '../components/overlay';
import { createPhoneButton } from '../components/phoneButton';
import { toggleMenu } from '../utils/toggleMenu';

export function createHeader() {
  const header = document.createElement('header');
  header.className =
    'max-w-9xl absolute left-0 right-0 mx-auto w-full flex items-center justify-between bg-transparent pt-6 px-12';

  const burgerButton = createBurgerButton();
  const { nav, closeButton } = createNav();
  const overlay = createOverlay();

  const ANIMATION_DURATION = 300;

  burgerButton.addEventListener('click', () => toggleMenu(nav, overlay, ANIMATION_DURATION));
  overlay.addEventListener('click', () => toggleMenu(nav, overlay, ANIMATION_DURATION));
  closeButton.addEventListener('click', () => toggleMenu(nav, overlay, ANIMATION_DURATION));

  document.body.appendChild(overlay);

  header.appendChild(createLogo());
  header.appendChild(createPhoneButton());
  header.appendChild(burgerButton);
  header.appendChild(nav);

  return header;
}
