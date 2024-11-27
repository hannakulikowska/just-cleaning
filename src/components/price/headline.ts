import { createSocialLinks } from './social';

export function createHeadline() {
  const container = document.createElement('div');
  const eyebrow = document.createElement('h4');
  const title = document.createElement('h2');
  const subtitle = document.createElement('p');

  eyebrow.className = 'i-before h4-eyebrow';
  title.className = 'h2-title';
  subtitle.className = 'p-subtitle text-pretty';

  eyebrow.textContent = 'Wycena';
  title.textContent = 'Indywidualna wycena dla każdego zlecenia';
  subtitle.textContent =
    'Cena usługi jest ustalana indywidualnie dla każdego przypadku. Aby dokładnie oszacować koszt, prosimy o przesłanie zdjęć mebli, które wymagają czyszczenia. W razie potrzeby zadamy kilka dodatkowych pytań, aby zaproponować optymalną wycenę. Skontaktuj się z nami przez WhatsApp lub Facebook.';

  container.appendChild(eyebrow);
  container.appendChild(title);
  container.appendChild(subtitle);
  container.appendChild(createSocialLinks());

  return container;
}
