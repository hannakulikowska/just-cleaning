import PhoneIcon from '../assets/svg/calling-icon.svg';

export function createPhoneButton() {
  const container = document.createElement('div');
  const phoneButton = document.createElement('a');
  const phoneIconImg = document.createElement('img');
  const srText = document.createElement('span');

  container.className =
    'basis-1/3 hidden sm:flex items-center justify-end mt-4 group order-2 lg:order-3 ml-auto lg:ml-0';

  phoneButton.href = 'tel:+48506395584';
  phoneButton.className =
    'btn-transparent lg:btn-primary w-[50px] h-[50px] rounded-full flex items-center justify-center';
  phoneButton.setAttribute('aria-label', 'Zadzwoń do nas');

  srText.textContent = 'Zadzwoń do nas';
  srText.className = 'sr-only';

  phoneIconImg.src = PhoneIcon;
  phoneIconImg.alt = '';
  phoneIconImg.className = 'w-6 h-6 inline-block group-hover:animate-wiggle';

  phoneButton.appendChild(phoneIconImg);
  phoneButton.appendChild(srText);
  container.appendChild(phoneButton);

  return container;
}
