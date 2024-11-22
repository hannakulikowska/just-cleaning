import BannerImage from '/src/assets/images/cleaning.jpg';
import { createText } from './text';

export function createBanner() {
  const bannerSection = document.createElement('section');
  const bannerContainer = document.createElement('div');
  const bannerImage = document.createElement('img');
  const overlay = document.createElement('div');

  bannerSection.id = 'banner-section';
  bannerSection.className = 'w-full bg-neutral pt-6';
  bannerContainer.className =
    'relative w-full max-w-9xl max-h-[90vh] mx-auto overflow-hidden rounded-3xl';
  bannerImage.src = BannerImage;
  bannerImage.alt = 'Extraction cleaning';
  bannerImage.className =
    'w-full h-full max-h-[90vh] object-cover object-right rounded-3xl scale-125';
  overlay.className = 'absolute inset-0 bg-dark/50 rounded-3xl';

  bannerSection.appendChild(bannerContainer);
  bannerContainer.appendChild(bannerImage);
  bannerContainer.appendChild(overlay);
  bannerContainer.appendChild(createText());

  return bannerSection;
}
