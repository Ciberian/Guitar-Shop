import { IItem } from '../../../types/item.interface';
import CatalogItem from '../catalog-item/catalog-item';

interface ICatalogProps {
  items: IItem[];
}

function Catalog({ items }: ICatalogProps): JSX.Element {
  return (
    <div className='cards catalog__cards'>
      {items.map((item) => <CatalogItem key={item.id} item={item} />)}
    </div>
  );
}

export default Catalog;
