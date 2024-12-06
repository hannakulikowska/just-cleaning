import { loadHomePage } from '../views/home';
import { loadContactPage } from '../views/contact';

export function handleRoute() {
  const path = window.location.pathname;

  document.body.innerHTML = '';

  if (path === '/contact') {
    loadContactPage();
  } else {
    loadHomePage();
  }
}
