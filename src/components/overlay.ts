export function createOverlay() {
  const overlay = document.createElement('div');
  overlay.id = 'overlay';
  overlay.className =
    'fixed top-0 right-0 w-screen h-screen bg-black opacity-75 translate-x-full z-99 lg:invisible transition-all duration-300';

  return overlay;
}
