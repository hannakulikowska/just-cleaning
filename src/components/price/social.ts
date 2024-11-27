import { socialLinks } from './linksData';

export function createSocialLinks() {
  const ul = document.createElement('ul');

  ul.className = 'flex gap-6 justify-start items-center mt-6';

  socialLinks.forEach(({ href, imgSrc, imgAlt, label }) => {
    const li = document.createElement('li');
    li.className = 'list-none';

    const a = document.createElement('a');
    a.href = href;
    a.setAttribute('aria-label', label);
    a.rel = 'noopener noreferrer';
    a.className =
      'flex justify-center items-center size-12 hover:bg-primary bg-dark rounded-full transition-all duration-300 is-in-out';

    const img = document.createElement('img');
    img.src = imgSrc;
    img.alt = imgAlt;
    img.loading = 'lazy';
    img.className = 'size-6';

    a.appendChild(img);
    li.appendChild(a);
    ul.appendChild(li);
  });

  return ul;
}
