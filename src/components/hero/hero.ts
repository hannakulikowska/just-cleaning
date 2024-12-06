import Image from '/src/assets/images/cleaning.jpg';
import { createText } from './text';
import { createSection } from '../section';

export function createHeroSection() {
  const wrapper = document.createElement('div');
  const image = document.createElement('img');
  const overlay = document.createElement('div');

  wrapper.className = 'relative w-full ';
  image.className = 'w-full min-h-80 md:max-h-[90vh] object-cover object-center rounded-3xl';
  overlay.className = 'absolute inset-0 bg-dark/50 rounded-3xl';

  image.src = Image;
  image.alt = '';
  image.loading = 'lazy';

  wrapper.appendChild(image);
  wrapper.appendChild(overlay);
  wrapper.appendChild(createText());

  return createSection(wrapper, 'home-hero');
}
