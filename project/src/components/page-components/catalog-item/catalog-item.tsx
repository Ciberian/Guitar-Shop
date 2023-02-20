import { Link } from 'react-router-dom';
import { AppRoute } from '../../../constants';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { addNewCartItemAction } from '../../../store/api-actions';
import { getCartItems } from '../../../store/items-data/selectors';
import { IItem } from '../../../types/item.interface';
import Button from '../../common/button/button';
import Rating from '../../common/rating/rating';

interface ICatalogItemProps {
  item: IItem;
}

function CatalogItem({ item }: ICatalogItemProps): JSX.Element {
  const { id, name, image, price, rating, reviewsCount } = item;
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(getCartItems);
  const isItemInCart = cartItems.find((cartItem) => cartItem.id === id);

  const addBtnClickHandler = () => {
    dispatch(addNewCartItemAction(id));
  };

  return (
    <div className="product-card">
      <img
        src={image}
        width="75"
        height="190"
        alt={name}
      />
      <div className="product-card__info">
        <Rating extraСlass='product-card__rate' ratingValue={rating} reviewsCount={reviewsCount} isShowRateCount />
        <p className="product-card__title">{name}</p>
        <p className="product-card__price">
          <span className="visually-hidden">Цена:</span>{price} ₽
        </p>
      </div>
      <div className="product-card__buttons">
        <Link className="button button--mini" to={AppRoute.Item}>Подробнее</Link>
        {isItemInCart ?
          <Link
            className='button button--red-border button--mini button--in-cart'
            to={AppRoute.Cart}
          >
            В Корзине
          </Link> :
          <Button
            btnStyle='button--red'
            btnSize='button--mini'
            btnType='button--add-to-cart'
            btnClickHandler={addBtnClickHandler}
          >
            Купить
          </Button>}
      </div>
    </div>
  );
}

export default CatalogItem;
