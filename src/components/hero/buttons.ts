import { createButton } from '../button';

export function createButtons() {
  const buttonsContainer = document.createElement('div');
  buttonsContainer.className = 'flex gap-4 sm:gap-6 mt-6 sm:mt-10';

  const buttonOffer = createButton(
    'Oferta',
    '/offer',
    'btn-white hidden xs:inline',
    'Sprawdź naszą ofertę'
  );
  const buttonContact = createButton(
    'Kontakt',
    '/contact',
    'btn-primary hidden xs:inline',
    'Skontaktuj się z nami'
  );

  buttonsContainer.appendChild(buttonOffer);
  buttonsContainer.appendChild(buttonContact);

  return buttonsContainer;
}
