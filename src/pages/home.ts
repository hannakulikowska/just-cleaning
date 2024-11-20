export function loadHomePage() {
  const mainContainer = document.createElement('div');
  const mainContent = document.createElement('main');

  mainContainer.id = 'home-page';
  mainContainer.className = 'relative min-h-screen bg-neutral px-6';

  mainContainer.appendChild(mainContent);

  document.body.prepend(mainContainer);
}
