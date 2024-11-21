import Logo from '/src/assets/images/logo-white-986-320.png';

export function createLogo() {
  const container = document.createElement('div');
  const link = document.createElement('a');
  const logo = document.createElement('img');

  container.className = 'basis-1/3 mt-4';
  link.href = '/';
  link.className = '';

  logo.src = Logo;
  logo.alt = 'Just Cleaning Logo';
  logo.className = 'h-8 md:h-12 w-auto max-w-none inline-block';

  link.appendChild(logo);
  container.appendChild(link);
  return container;
}
