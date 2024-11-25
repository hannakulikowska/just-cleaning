export function appendChildren(parent: HTMLElement, children: HTMLElement | HTMLElement[]) {
  {
    if (Array.isArray(children)) {
      children.forEach((child) => parent.appendChild(child));
    } else {
      parent.appendChild(children);
    }
  }
}
