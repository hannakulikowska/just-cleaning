import { companyInfo } from '../../../data/companyInfo';
import { contactLinks } from '../../../data/contactLinks';
import { workHours } from '../../../data/workHours';
import { createSocialLinks } from '../../price/social';
import { createSection } from '../../section';

export function createContent() {
  const title = document.createElement('h2');

  function createTextColumn(items: string[]) {
    const column = document.createElement('div');
    column.className = 'flex flex-col gap-y-2 text-left mt-10';
    items.forEach((item) => {
      const p = document.createElement('p');
      p.textContent = item;
      column.appendChild(p);
    });
    return column;
  }

  function createLinkColumn(links: { href: string; text: string; label: string }[]) {
    const column = document.createElement('div');
    column.className = 'flex flex-col gap-y-2 text-left mt-10';
    links.forEach(({ href, text, label }) => {
      const a = document.createElement('a');
      a.href = href;
      a.textContent = text;
      a.setAttribute('aria-label', label);
      a.rel = 'noopener noreferrer';
      a.className = 'hover:text-primary transition-all duration-300 ease-in-out';
      column.appendChild(a);
    });
    return column;
  }

  title.className = 'h2-title text-left';

  title.textContent = 'Kontakt';

  const textBox1 = createTextColumn(companyInfo);
  const textBox2 = createLinkColumn(contactLinks);
  const textBox3 = createTextColumn(workHours);

  textBox3.classList.add('mb-12');

  const socialLinks = createSocialLinks();
  const section = createSection(
    [title, textBox1, textBox2, textBox3, socialLinks],
    'contact-content',
    'mb-12'
  );

  return section;
}
