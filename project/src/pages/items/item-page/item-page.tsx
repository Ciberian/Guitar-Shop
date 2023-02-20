import Tabs from '../../../components/common/tabs/tabs';
import Button from '../../../components/common/button/button';
import Rating from '../../../components/common/rating/rating';
import SiteHeader from '../../../components/page-components/site-header/site-header';
import SiteFooter from '../../../components/page-components/site-footer/site-footer';
import ReviewsList from '../../../components/page-components/reviews-list/reviews-list';
import ReviewForm from '../../../components/modal-windows/review-form/review-form';
import SuccessReview from '../../../components/modal-windows/success-review/success-review';
import LoadingScreen from '../../../components/system-components/loading-screen/loading-screen';
// import { useEffect } from 'react';
import { useRef, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { AppRoute } from '../../../constants';
import { addNewCartItemAction } from '../../../store/api-actions';
// import { getItemAction, getReviewsAction } from '../../../store/api-actions';
// import { getItem, getReviews } from '../../../store/items-data/selectors';
import { getLoadedItemStatus } from '../../../store/items-data/selectors';
import { makeFakeItem, makeFakeReviews } from '../../../utils/mocks';


function ItemPage(): JSX.Element {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  // useEffect(() => { - раcкомментировать если появится API
  //   dispatch(getItemAction(Number(id)));
  //   dispatch(getReviewsAction(Number(id)));
  // }, [id, dispatch]);

  const isItemLoaded = useAppSelector(getLoadedItemStatus);
  // const item = useAppSelector(getItem); - раcкомментировать если появится API
  const item = makeFakeItem(Number(id), 90, 235); // - удалить когда появится API
  // const reviews = useAppSelector(getReviews); - раcкомментировать если появится API
  const reviews = makeFakeReviews(); // - удалить когда появится API
  const initialReviewsCount = useRef(reviews.length);
  const [modalActive, setModalActive] = useState(false);

  const closeModalWindow = () => {
    setModalActive(false);
  };

  const openModalWindow = () => {
    setModalActive(true);
  };

  const notifyNewReviewAdded = () => {
    if (reviews.length !== initialReviewsCount.current) {
      initialReviewsCount.current = reviews.length;
      return true;
    }

    return false;
  };

  if (isItemLoaded) { // - если будет API, то поменять на обратное значение, - !isItemLoaded
    return <LoadingScreen />;
  }

  if (!item) {
    navigate(AppRoute.NotFoundPage);
  }

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
              src={item?.image}
              width="90"
              height="235"
              alt={item?.name}
            />
            <div className="product-container__info-wrapper">
              <h2 className="product-container__title title title--big title--uppercase">{item?.name}</h2>
              <Rating
                extraСlass='product-container__rating'
                ratingValue={item?.rating}
                reviewsCount={item?.reviewsCount}
                width={14}
                height={14}
              />
              <Tabs item={item} />
            </div>
            <div className="product-container__price-wrapper">
              <p className="product-container__price-info product-container__price-info--title">Цена:</p>
              <p className="product-container__price-info product-container__price-info--value">{item?.price} ₽</p>
              <Button
                btnStyle='button--red'
                btnType='product-container__button'
                btnClickHandler={() => dispatch(addNewCartItemAction(item?.id))}
              >
                Добавить в корзину
              </Button>
            </div>
          </div>
          <ReviewsList reviews={reviews} openModalWindow={openModalWindow} />
        </div>
      </main>
      <SiteFooter />
      <ReviewForm itemId={item.id} itemName={item?.name} isModalActive={modalActive} closeModalWindow={closeModalWindow} />
      {notifyNewReviewAdded() ? <SuccessReview /> : null}
    </div>
  );
}

export default ItemPage;
