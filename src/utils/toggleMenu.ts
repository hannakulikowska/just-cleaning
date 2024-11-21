export const toggleMenu = (
  nav: HTMLElement,
  overlay: HTMLElement,
  animationDuration: number = 300
) => {
  const isMenuOpen = !nav.classList.contains('translate-x-full');

  nav.classList.toggle('translate-x-full');
  overlay.classList.toggle('translate-x-full');

  if (isMenuOpen) {
    nav.classList.remove('delay-200');
    setTimeout(() => {
      nav.classList.remove('transition-all', 'duration-300');
    }, animationDuration);
  } else {
    nav.classList.add('transition-all', 'duration-300', 'delay-200');
  }
};
