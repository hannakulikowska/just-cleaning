import { createCloseButton } from '../closeButton';

export function createNav() {
  const nav = document.createElement('nav');
  nav.className =
    'fixed z-[100] top-0 right-0 translate-x-full lg:translate-x-0 lg:static w-64 lg:w-full lg:max-w-fit h-screen lg:h-full bg-white rounded-none lg:rounded-b-3xl pt-4 lg:px-4 lg:pt-0 basis-1/3';

  const ul = document.createElement('ul');
  ul.className = 'list-none lg:flex lg:items-center justify-around divide-y lg:divide-y-0';
  nav.appendChild(ul);

  const closeButton = createCloseButton();
  nav.appendChild(closeButton);

  const currentPath = window.location.pathname;

  const navLinks = [
    { text: 'Strona główna', href: '/' },
    { text: 'Usługi', href: '/service' },
    { text: 'Cennik', href: '/price' },
    { text: 'Kontakt', href: '/contact' },
  ].map(({ text, href }) => {
    const li = document.createElement('li');
    li.className = 'relative lg:dots group cursor-pointer';

    const link = document.createElement('a');
    li.appendChild(link);
    link.href = href;
    link.textContent = text;

    const isCurrent = currentPath === new URL(href, window.location.origin).pathname;

    link.className = `font-quicksand uppercase font-bold text-sm tracking-wide text-dark group-hover:text-primary whitespace-nowrap transition-[color] duration-300 ${isCurrent ? 'text-primary' : ''} px-6 py-8 inline-block`;

    if (isCurrent) {
      link.setAttribute('aria-current', 'page');
    }

    return li;
  });

  navLinks.forEach((li) => ul.appendChild(li));

  return { nav, closeButton };
}
