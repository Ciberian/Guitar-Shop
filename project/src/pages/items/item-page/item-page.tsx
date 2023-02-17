import SiteHeader from '../../../components/page-components/site-header/site-header';
import SiteFooter from '../../../components/page-components/site-footer/site-footer';
import Rating from '../../../components/common/rating/rating';
import ReviewList from '../../../components/page-components/reviews-list/reviews-list';
import LoadingScreen from '../../../components/system-components/loading-screen/loading-screen';
import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { AppRoute, AuthorizationStatus, DEFAULT_ITEM_ID } from '../../../constants';
import { getAuthorizationStatus } from '../../../store/user-process/selectors';
import { addNewCartItemAction, getItemAction, getReviewsAction } from '../../../store/api-actions';
import { getLoadedItemStatus, getItem, getReviews } from '../../../store/items-data/selectors';
import { makeFakeItem, makeFakeReviews } from '../../../utils/mocks';
import Tabs from '../../../components/common/tabs/tabs';
import Button from '../../../components/common/button/button';
import ReviewsList from '../../../components/page-components/reviews-list/reviews-list';
import ReviewForm from '../../../components/modal-windows/review-form/review-form';

function ItemPage(): JSX.Element {
  // const isItemLoaded = useAppSelector(getLoadedItemStatus);

  // const { itemId } = useParams();
  // const navigate = useNavigate();
  const dispatch = useAppDispatch();
  // const authorizationStatus = useAppSelector(getAuthorizationStatus);
  // const isAuthorized = authorizationStatus === AuthorizationStatus.Auth;
  // const item = useAppSelector(getItem);
  // const reviews = useAppSelector(getReviews);

  // useEffect(() => {
  //   dispatch(getItemAction(Number(itemId)));
  //   dispatch(getReviewsAction(Number(itemId)));
  // }, [itemId, dispatch]);

  // if (!isItemLoaded) {
  //   return <LoadingScreen />;
  // }

  // if (!item) {
  //   navigate(AppRoute.NotFoundPage);
  // }

  const [modalActive, setModalActive] = useState(false);
  const closeModalWindow = () => {
    setModalActive(false);
  };

  const openModalWindow = () => {
    setModalActive(true);
  };

  const item = makeFakeItem(DEFAULT_ITEM_ID, 90, 235);
  const { name, image, rating, price, reviewsCount } = item;
  const reviews = makeFakeReviews();

  return (
    <div className="wrapper">
      <SiteHeader />
      <main className="page-content">
        <div className="container">
          <h1 className="page-content__title title title--bigger">Товар</h1>
          <ul className="breadcrumbs page-content__breadcrumbs">
            <li className="breadcrumbs__item">
              <Link className="link" to={AppRoute.Root}>Главная</Link>
            </li>
            <li className="breadcrumbs__item">
              <Link className="link" to={AppRoute.Catalog}>Каталог</Link>
            </li>
            <li className="breadcrumbs__item">
              <Link className="link" to={'#'}>Товар</Link>
            </li>
          </ul>
          <div className="product-container">
            <img
              className="product-container__img"
              src={image}
              width="90"
              height="235"
              alt={name}
            />
            <div className="product-container__info-wrapper">
              <h2 className="product-container__title title title--big title--uppercase">{name}</h2>
              <Rating
                extraСlass='product-container__rating'
                ratingValue={rating}
                reviewsCount={reviewsCount}
                width={14}
                height={14}
              />
              <Tabs item={item} />
            </div>
            <div className="product-container__price-wrapper">
              <p className="product-container__price-info product-container__price-info--title">Цена:</p>
              <p className="product-container__price-info product-container__price-info--value">{price} ₽</p>
              <Button
                btnStyle='button--red'
                btnType='product-container__button'
                btnClickHandler={() => dispatch(addNewCartItemAction(item.id))}
              >
                Добавить в корзину
              </Button>
            </div>
          </div>
          <ReviewsList reviews={reviews} openModalWindow={openModalWindow} />
        </div>
      </main>
      <SiteFooter />
      <ReviewForm itemId={item.id} itemName={name} isModalActive={modalActive} closeModalWindow={closeModalWindow} />
    </div>
  );
}

export default ItemPage;
