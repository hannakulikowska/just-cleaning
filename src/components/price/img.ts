export function createImage() {
  const imgWrapper = document.createElement('div');

  const img = document.createElement('img');
  img.src = '/src/assets/images/couch.jpg';
  img.alt = '';
  img.loading = 'lazy';
  img.className = 'w-full max-w-2xl';

  imgWrapper.className = 'w-100 flex justify-center items-center';

  imgWrapper.appendChild(img);

  return imgWrapper;
}
