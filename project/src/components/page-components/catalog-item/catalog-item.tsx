import { Link } from 'react-router-dom';
import { AppRoute } from '../../../constants';
import { IItem } from '../../../types/item.interface';
import Button from '../../common/button/button';
import Rating from '../../common/rating/rating';

interface ICatalogItemProps {
  item: IItem;
}

function CatalogItem({item}: ICatalogItemProps): JSX.Element {
  const {name, image, price, rating, reviewsCount } = item;

  return (
    <div className="product-card">
      <img
        src={image}
        width="75"
        height="190"
        alt={name}
      />
      <div className="product-card__info">
        <Rating extraСlass='product-card__rate' ratingValue={rating} reviewsCount={reviewsCount} />
        <p className="product-card__title">{name}</p>
        <p className="product-card__price">
          <span className="visually-hidden">Цена:</span>{price} ₽
        </p>
      </div>
      <div className="product-card__buttons">
        <Link className="button button--mini" to={AppRoute.Cart}>Подробнее</Link>
        <Button btnStyle='button--red' btnSize='button--mini' btnType='button--add-to-cart'>Купить</Button>
      </div>
    </div>
  );
}

export default CatalogItem;
