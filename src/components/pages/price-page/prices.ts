import { createSection } from '../../section';
import { createTable } from '../../table';
import { mattressCleaningPriceData } from '../../../data/priceMattress';
import { furnitureCleaningPriceData } from '../../../data/priceFurniture';
import { carpetCleaningPriceData } from '../../../data/priceCarpet';
import { additionalServicesPriceData } from '../../../data/priceAdditional';
import { promotionalPackagesPriceData } from '../../../data/pricePromotional';
import { ecoCleaningPriceData } from '../../../data/priceEco';

export function createContent() {
  const title = document.createElement('h1');
  title.className = 'h2-title text-left px-4 sm:px-8';

  const price1 = createTable(furnitureCleaningPriceData, 'Czyszczenie mebli tapicerowanych');
  const price2 = createTable(mattressCleaningPriceData, 'Czyszczenie materacy');
  const price3 = createTable(carpetCleaningPriceData, 'Czyszczenie dywanów i wykładzin');
  const price4 = createTable(additionalServicesPriceData, 'Dodatkowe usługi');
  const price5 = createTable(promotionalPackagesPriceData, 'Pakiety promocyjne');
  const price6 = createTable(ecoCleaningPriceData, 'Eko-czyszczenie (zielone technologie)');

  title.textContent = 'Cennik usług Just Cleaning';

  const note = document.createElement('p');
  note.className = 'px-4 sm:px-8';
  note.textContent =
    'Powyższa oferta ma charakter informacyjny i nie stanowi oferty handlowej w rozumieniu art. 66 §1 Kodeksu Cywilnego. Ostateczna kalkulacja kosztów każdej usługi jest ustalana indywidualnie po przesłaniu zdjęć przedstawiających zakres prac lub na miejscu przed wykonaniem usługi. Na końcową cenę mogą wpływać różnorodne czynniki, takie jak wielkość i złożoność zlecenia, stan czyszczonej powierzchni oraz inne specyficzne uwarunkowania.';

  return createSection(
    [title, price1, price2, price3, price4, price5, price6, note],
    'price-content'
  );
}
