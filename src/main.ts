import './style.css';
import { handleRoute } from './utils/handleRoute';

document.addEventListener('DOMContentLoaded', () => {
  handleRoute();
  window.addEventListener('popstate', handleRoute);
});

document.addEventListener('click', (event) => {
  const target = event.target as HTMLAnchorElement;
  if (target.tagName === 'A' && target.href.startsWith(window.location.origin)) {
    event.preventDefault();
    const href = target.getAttribute('href');
    if (href && href !== window.location.pathname) {
      window.history.pushState(null, '', href);
      handleRoute();
    }
  }
});
