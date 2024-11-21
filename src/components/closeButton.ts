export function createCloseButton() {
  const closeButton = document.createElement('button');
  closeButton.className =
    'absolute top-4 right-4 text-indigo hover:text-primary text-2xl lg:hidden cursor-pointer transition-all duration-300 ease-in-out';
  closeButton.textContent = '✕';

  return closeButton;
}
