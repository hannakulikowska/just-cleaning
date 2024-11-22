export function createBurgerButton() {
  const burgerButton = document.createElement('button');
  burgerButton.className =
    'lg:hidden flex flex-col justify-between w-[50px] h-[44px] p-3 mt-4 lg:mr-0 bg-transparent rounded-full group order-3 lg:order-2 z-[9]';
  burgerButton.setAttribute('aria-label', 'Toggle navigation');
  burgerButton.setAttribute('title', 'Menu');

  for (let i = 0; i < 3; i++) {
    const line = document.createElement('span');
    line.className =
      'block w-full h-[2px] bg-neutral rounded group-hover:stretch-lines transition-stretch';
    burgerButton.appendChild(line);
  }

  return burgerButton;
}
