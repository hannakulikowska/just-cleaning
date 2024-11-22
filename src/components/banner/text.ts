import ShineIcon from '/src/assets/images/shine-icon.png';
import { createButtons } from './buttons';

export function createText() {
  const textContainer = document.createElement('div');
  const textWrapper = document.createElement('div');
  const subtitle = document.createElement('p');
  const icon = document.createElement('img');
  const title = document.createElement('h1');
  const content = document.createElement('p');

  textContainer.className =
    'absolute inset-0 flex flex-col items-center justify-center text-center text-white p-6 pt-12';
  textWrapper.className = 'relative hidden xs:inline';
  subtitle.className = 'uppercase font-semibold tracking-widest text-[10px] sm:text-sm';
  title.className =
    'font-quicksand uppercase font-bold text-2xl xs:text-4xl sm:text-5xl md:text-7xl pt-6';
  content.className =
    'font-quicksand font-bold text-balance text-sm sm:text-xl md:text-3xl lg:text-4xl pt-2 sm:pt-4';

  subtitle.textContent = 'Serwis sprzątający';
  title.textContent = 'Pranie mebli tapicerowanych';
  content.textContent = 'Profesjonalny sprzęt i skuteczna chemia';

  icon.src = ShineIcon;
  icon.alt = '';
  icon.className =
    'absolute top-0 right-0 translate-x-14 md:translate-x-24 -translate-y-1/3 max-w-[40px] md:max-w-full h-auto';

  textContainer.appendChild(textWrapper);
  textWrapper.appendChild(subtitle);
  textWrapper.appendChild(icon);
  textContainer.appendChild(title);
  textContainer.appendChild(content);
  textContainer.appendChild(createButtons());

  return textContainer;
}
