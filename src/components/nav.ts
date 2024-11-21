import { createCloseButton } from './closeButton';

export function createNav() {
  const nav = document.createElement('nav');
  nav.className =
    'fixed top-0 right-0 translate-x-full lg:translate-x-0 lg:static w-64 lg:w-full lg:max-w-fit h-screen lg:h-full bg-neutral rounded-none lg:rounded-b-3xl ml-4 lg:ml-0 pt-4 lg:px-10 lg:pt-0 z-10 basis-1/3';

  const ul = document.createElement('ul');
  ul.className = 'list-none lg:flex lg:items-center justify-around divide-y lg:divide-y-0';
  nav.appendChild(ul);

  const closeButton = createCloseButton();
  nav.appendChild(closeButton);

  const navLinks = [
    { text: 'Strona główna', href: '/', isCurrent: true },
    { text: 'Usługi', href: '/services', isCurrent: false },
    { text: 'Kontakt', href: '/contact', isCurrent: false },
  ].map(({ text, href, isCurrent }) => {
    const li = document.createElement('li');
    li.className = 'relative px-6 lg:px-10 py-8 lg:dots group cursor-pointer';
    const link = document.createElement('a');
    li.appendChild(link);
    link.href = href;
    link.textContent = text;
    link.className = `font-quicksand uppercase font-bold text-sm tracking-wide text-dark group-hover:text-primary whitespace-nowrap transition-[color] duration-300 ${isCurrent ? 'text-primary' : ''}`;
    if (isCurrent) {
      link.setAttribute('aria-current', 'page');
    }
    return li;
  });
  navLinks.forEach((li) => ul.appendChild(li));

  return { nav, closeButton };
}
