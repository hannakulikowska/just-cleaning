import Logo from '../assets/images/logo-white-986-320.png';

export function createLogo() {
  const link = document.createElement('a');
  const logo = document.createElement('img');

  link.href = '/';
  link.className = 'mt-4 ml-12';

  logo.src = Logo;
  logo.alt = 'Just Cleaning Logo';
  logo.className = 'h-8 md:h-12 w-auto inline-block';

  link.appendChild(logo);
  return link;
}
