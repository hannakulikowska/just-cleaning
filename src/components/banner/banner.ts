import BannerImage from '/src/assets/images/cleaning.jpg';

export function createBanner() {
  const bannerSection = document.createElement('section');
  const bannerContainer = document.createElement('div');
  const bannerImage = document.createElement('img');

  bannerSection.id = 'banner-section';
  bannerSection.className = 'w-full bg-neutral pt-6 z-0';
  bannerContainer.className = 'w-full max-w-9xl max-h-[90vh] mx-auto';

  bannerImage.src = BannerImage;
  bannerImage.alt = 'Sofa extracting cleaning';
  bannerImage.className = 'w-full h-full max-h-[90vh] object-cover object-right rounded-3xl';

  bannerSection.appendChild(bannerContainer);
  bannerContainer.appendChild(bannerImage);

  return bannerSection;
}
