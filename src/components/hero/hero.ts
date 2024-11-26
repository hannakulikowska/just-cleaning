import BannerImage from '/src/assets/images/cleaning.jpg';
import { createText } from './text';

export function createHeroSection() {
  const bannerSection = document.createElement('section');
  const bannerContainer = document.createElement('div');
  const padding = document.createElement('div');
  const bannerImage = document.createElement('img');
  const overlay = document.createElement('div');

  bannerSection.className = 'w-full bg-neutral pt-2 sm:pt-6';
  bannerContainer.className = 'max-w-9xl mx-auto overflow-hidden rounded-3xl px-2 sm:px-6 ';
  padding.className = 'relative w-full ';

  bannerImage.src = BannerImage;
  bannerImage.alt = 'Pranie mebli tapicerowanych';
  bannerImage.loading = 'lazy';
  bannerImage.className = 'w-full min-h-80 md:max-h-[90vh] object-cover object-center rounded-3xl';
  overlay.className = 'absolute inset-0 bg-dark/50 rounded-3xl';

  bannerSection.appendChild(bannerContainer);
  bannerContainer.appendChild(padding);
  padding.appendChild(bannerImage);
  padding.appendChild(overlay);
  padding.appendChild(createText());

  return bannerSection;
}
