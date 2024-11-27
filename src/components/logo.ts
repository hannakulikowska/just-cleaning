export function createLogo() {
  const logo = document.createElement('a');
  const img = document.createElement('img');
  const name = document.createElement('span');

  logo.href = '/';
  img.src = '/src/assets/images/sofa.png';
  img.loading = 'lazy';
  img.alt = '';

  logo.className = 'flex items-center basis-1/3 mt-4 pl-2';
  img.className = 'h-7 me-4 sm:h-12';
  name.className =
    'self-center text-xl lg:text-2xl font-satisfy whitespace-nowrap text-white lg:text-primary';

  name.textContent = 'Just Cleaning';

  // logo.appendChild(img);
  logo.appendChild(name);

  return logo;
}
