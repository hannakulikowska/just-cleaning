import { createSection } from '../section';
import { createHeadline } from './headline';
import { createStep } from './step';
import { stepsData } from './stepsData';

export function createStepsSection() {
  const container = document.createElement('div');

  container.className =
    'relative bg-dark rounded-3xl before:content-wave before:absolute before:top-0 before:left-0 before-inset-0 px-4 py-12 sm:p-12 lg:py-32';

  const section = createSection(container, 'home-steps');
  const headline = createHeadline();

  const list = document.createElement('ol');
  list.className =
    'flex items-start justify-evenly flex-wrap w-full gap-x-10 gap-y-14 mt-16 sm:mt-20 lg:mt-24';

  stepsData.forEach(({ title, img }) => {
    const step = createStep(title, img);
    list.appendChild(step);
  });

  container.appendChild(headline);
  container.appendChild(list);

  return section;
}
