import Item from '../item/item';
import { IItem } from '../../../types/item.interface';

interface IItemsListProps {
  items: IItem[];
}

function ItemsList({ items }: IItemsListProps): JSX.Element {
  return (
    <div className="catalog-cards">
      <ul className="catalog-cards__list">
        {items.map((item) => <Item key={item.id} item={item} />)}
      </ul>
    </div>
  );
}

export default ItemsList;
