import Image from '/src/assets/images/sofa-baroque.png';
import { createSection } from '../../section';

export function createHero() {
  const wrapper = document.createElement('div');
  const img = document.createElement('img');

  wrapper.className = 'w-full';
  img.className =
    'w-full min-h-60 md:max-h-[90vh] object-cover object-center md:object-bottom rounded-3xl';
  img.src = Image;
  img.alt = '';
  img.loading = 'lazy';

  wrapper.appendChild(img);

  return createSection(wrapper, 'price-hero');
}
