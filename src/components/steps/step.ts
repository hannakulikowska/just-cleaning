export function createStep(title: string, img: string) {
  const li = document.createElement('li');
  const name = document.createElement('h4');
  const icon = document.createElement('img');

  li.className = 'flex flex-col items-center text-white w-[250px] gap-4';
  name.className = 'text-lg text-center text-balance';
  icon.className = 'size-16';

  name.textContent = title;
  icon.src = img;
  icon.alt = '';
  icon.loading = 'lazy';

  li.appendChild(icon);
  li.appendChild(name);

  return li;
}
