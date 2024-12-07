export function createTable(
  data: { service: string; price: string }[],
  captionText: string
): HTMLElement {
  const table = document.createElement('table');
  table.className = 'table-auto border-collapse border border-indigo/10 my-24 w-full max-w-full';

  const caption = document.createElement('caption');
  caption.className = 'caption-top text-lg text-dark font-bold text-left mb-8 px-4 sm:pl-8';
  caption.textContent = captionText;
  table.appendChild(caption);

  const thead = document.createElement('thead');
  const headRow = document.createElement('tr');

  const serviceHeader = document.createElement('th');
  serviceHeader.textContent = 'Usługa';
  serviceHeader.className = 'border-b border-indigo/20 p-4 sm:pl-8 text-left text-indigo/50';
  headRow.appendChild(serviceHeader);

  const priceHeader = document.createElement('th');
  priceHeader.textContent = 'Cena';
  priceHeader.className =
    'border-b border-indigo/20 p-4 sm:pl-8 text-left text-indigo/50 w-28 md:w-1/4';
  headRow.appendChild(priceHeader);

  thead.appendChild(headRow);
  table.appendChild(thead);

  const tbody = document.createElement('tbody');

  data.forEach(({ service, price }) => {
    const row = document.createElement('tr');

    const serviceCell = document.createElement('td');
    serviceCell.textContent = service;
    serviceCell.className = 'border-b border-indigo/10 p-4 sm:pl-8 text-indigo';
    row.appendChild(serviceCell);

    const priceCell = document.createElement('td');
    priceCell.textContent = price;
    priceCell.className =
      'tabular-nums lg:whitespace-nowrap border-b border-indigo/10 p-4 sm:pl-8 text-indigo text-left w-28 md:w-1/4';
    row.appendChild(priceCell);

    tbody.appendChild(row);
  });

  table.appendChild(tbody);

  return table;
}
