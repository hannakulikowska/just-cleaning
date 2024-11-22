import { createButton } from '../button';

export function createButtons() {
  const buttonsContainer = document.createElement('div');
  buttonsContainer.className = 'flex gap-4 sm:gap-6 mt-6 sm:mt-10';
  const buttonOffer = createButton();
  const buttonContact = createButton();
  buttonOffer.classList.add('btn-primary', 'hidden', 'xs:inline');
  buttonContact.classList.add('btn-white', 'hidden', 'xs:inline');
  buttonOffer.textContent = 'Oferta';
  buttonContact.textContent = 'Kontakt';

  buttonsContainer.appendChild(buttonContact);
  buttonsContainer.appendChild(buttonOffer);

  return buttonsContainer;
}
