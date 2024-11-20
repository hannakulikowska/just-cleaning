import { createBurgerButton } from '../components/burgerButton';
import { createLogo } from '../components/logo';
import { createNav } from '../components/nav';
import { createOverlay } from '../components/overlay';
import { createPhoneButton } from '../components/phoneButton';

export function createHeader() {
  const header = document.createElement('header');
  header.className =
    'max-w-9xl absolute left-0 right-0 mx-auto w-full flex items-center justify-between bg-transparent pt-6';

  const burgerButton = createBurgerButton();
  const nav = createNav();
  const overlay = createOverlay();

  burgerButton.addEventListener('click', () => {
    nav.classList.add('transition-all', 'duration-300', 'delay-200');
    nav.classList.toggle('translate-x-full');
    overlay.classList.toggle('translate-x-full');
  });

  overlay.addEventListener('click', () => {
    nav.classList.toggle('translate-x-full');
    overlay.classList.toggle('translate-x-full');
    nav.classList.remove('delay-200');
    setTimeout(() => {
      nav.classList.remove('transition-all', 'duration-300');
    }, 300);
  });

  document.body.appendChild(overlay);

  header.appendChild(createLogo());
  header.appendChild(createPhoneButton());
  header.appendChild(burgerButton);
  header.appendChild(nav);

  return header;
}
