import AboutImage from '/src/assets/images/bg-about.jpg';

export function createImage() {
  const img = document.createElement('img');

  img.src = AboutImage;
  img.alt = '';
  img.className = 'rounded-3xl h-96 w-full object-cover object-center order-last md:order-first';

  return img;
}
