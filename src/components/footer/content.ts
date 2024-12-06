import { contactLinks } from '../../data/contactLinks';
import { companyInfo } from '../../data/companyInfo';
import { workHours } from '../../data/workHours';
import { cities } from '../../data/cities';

export function createContent() {
  const content = document.createElement('div');
  content.className = 'flex flex-wrap gap-x-24 gap-y-12 text-blue';

  function createTextColumn(items: string[]) {
    const column = document.createElement('div');
    column.className = 'flex flex-col gap-y-2 min-w-[166px]';
    items.forEach((item) => {
      const p = document.createElement('p');
      p.textContent = item;
      column.appendChild(p);
    });
    return column;
  }

  function createLinkColumn(links: { href: string; text: string; label: string }[]) {
    const column = document.createElement('div');
    column.className = 'flex flex-col gap-y-2';
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

  const col1 = createTextColumn(companyInfo);
  const col2 = createTextColumn(workHours);
  const col3 = createLinkColumn(contactLinks);
  const col4 = createTextColumn(cities);

  content.appendChild(col1);
  content.appendChild(col4);
  content.appendChild(col2);
  content.appendChild(col3);

  return content;
}
