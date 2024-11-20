import PhoneIcon from '../assets/svg/calling-icon.svg';

export function createPhoneButton() {
  const phoneButton = document.createElement('a');
  const phoneIconImg = document.createElement('img');

  phoneButton.href = 'tel:+48506395584';
  phoneButton.className =
    'hidden sm:flex btn-transparent lg:btn-primary rounded-full w-[50px] h-[50px] items-center justify-center mt-4 lg:mr-12 group order-2 lg:order-3 ml-auto lg:ml-0';
  phoneButton.setAttribute('aria-label', 'Zadzwoń do nas');
  phoneButton.setAttribute('title', 'Zadzwoń do nas');

  phoneIconImg.src = PhoneIcon;
  phoneIconImg.alt = 'Phone icon';
  phoneIconImg.className = 'w-6 h-6 inline-block group-hover:animate-wiggle';

  phoneButton.appendChild(phoneIconImg);

  return phoneButton;
}
