import { loadHomePage } from '../views/home';
import { loadContactPage } from '../views/contact';
import { loadPricePage } from '../views/price';

export function handleRoute() {
  const path = window.location.pathname;

  document.body.innerHTML = '';

  if (path === '/contact') {
    loadContactPage();
  } else if (path === '/price') {
    loadPricePage();
  } else {
    loadHomePage();
  }
}
