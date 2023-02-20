import Rating from '../../common/rating/rating';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../../hooks';
import { IItem } from '../../../types/item.interface';
import { deleteItemAction } from '../../../store/api-actions';

interface IItemProps {
  item: IItem;
}

function Item({ item }: IItemProps): JSX.Element {
  const { id, name, image, rating, date, price } = item;
  const formattedDate = date.toLocaleString('ru', { year: 'numeric', month: 'numeric', day: 'numeric'});
  const dispatch = useAppDispatch();

  return (
    <li className="catalog-item">
      <div className="catalog-item__data">
        <img
          src={image}
          width="36"
          height="93"
          alt="Картинка гитары"
        />
        <div className="catalog-item__data-wrapper">
          <p className="catalog-item__data-title">{name}</p>
          <Rating ratingValue={rating} extraСlass='catalog-item__data-rate'/>
          <p className="catalog-item__data-date">Дата добавления {formattedDate}</p>
          <p className="catalog-item__data-price">{price} ₽</p>
        </div>
      </div>
      <div className="catalog-item__buttons">
        <Link
          className="button button--small button--black-border"
          aria-label='Редактировать товар'
          to={`/items/edit_item/${id}`}
        >
          Редактировать
        </Link>
        <button
          className="button button--small button--black-border"
          type="submit"
          aria-label="Удалить товар"
          onClick={() => dispatch(deleteItemAction(id))}
        >
            Удалить
        </button>
      </div>
    </li>
  );
}

export default Item;
