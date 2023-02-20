import CatalogPage from '../../../pages/items/catalog-page/catalog-page';
import ItemPage from '../../../pages/items/item-page/item-page';
import CartPage from '../../../pages/items/cart-page/cart-page';
import ItemsListPage from '../../../pages/admin/items-list-page/items-list-page';
import AddItemPage from '../../../pages/admin/add-item-page/add-item-page';
import EditItemPage from '../../../pages/admin/edit-item-page/edit-item-page';
import OrdersPage from '../../../pages/admin/orders-page/orders-page';
import OrderPage from '../../../pages/admin/order-page/order-page';
import LoginPage from '../../../pages/auth/login-page/login-page';
import RegisterPage from '../../../pages/auth/register-page/register-page';
import NotFoundPage from '../../../pages/404/not-found-page';
import PrivateRoute from '../private-route/private-route';
// import LoadingScreen from '../loading-screen/loading-screen';
// import { useEffect } from 'react';
// import { getItemsAction } from '../../../store/api-actions';
// import { getLoadedDataStatus } from '../../../store/offers-data/selectors';
// import { useAppDispatch } from '../../../hooks';
import { useAppSelector } from '../../../hooks';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getUserInfo } from '../../../store/user-process/selectors';

import { AppRoute } from '../../../constants';
function App(): JSX.Element {
  const userData = useAppSelector(getUserInfo);
  const isAdmin = userData?.isAdmin || true; // не забыть поменять true на false

  // const dispatch = useAppDispatch();
  // const isDataLoaded = useAppSelector(getLoadedDataStatus);

  // useEffect(() => {
  //   dispatch(getItemsAction());
  // });

  // if (!isDataLoaded) {
  //   return <LoadingScreen />;
  // }

  return (
    <Routes>
      <Route path={AppRoute.Root}>
        <Route index element={<Navigate to={AppRoute.Login} />} /> {/* Редирект на страницу с каталогом */}
        <Route path={AppRoute.Catalog} element={<CatalogPage />} />
        <Route path={AppRoute.Item} element={<ItemPage />} />
        <Route path={AppRoute.Cart} element={<CartPage />} />
        <Route
          path={AppRoute.Items}
          element={
            <PrivateRoute isAdmin={isAdmin}>
              <ItemsListPage />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.AddItem}
          element={
            <PrivateRoute isAdmin={isAdmin}>
              <AddItemPage />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.EditItem}
          element={
            <PrivateRoute isAdmin={isAdmin}>
              <EditItemPage />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Orders}
          element={
            <PrivateRoute isAdmin={isAdmin}>
              <OrdersPage />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Order}
          element={
            <PrivateRoute isAdmin={isAdmin}>
              <OrderPage />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Login} element={<LoginPage />} />
        <Route path={AppRoute.Register} element={<RegisterPage />} />
        <Route path={AppRoute.NotFoundPage} element={<NotFoundPage />} />
        <Route path={AppRoute.MyAccount} element={<NotFoundPage />} /> {/* Страницы с MyAccount(Личный кабинет) тоже нет, поэтому вместо неё NotFoundPage */}
        <Route path="*" element={<Navigate to={AppRoute.NotFoundPage} />} />
      </Route>
    </Routes>
  );
}

export default App;

// В вёрстке почему-то нет Главной страницы (MainPage).
// И в принципе страница со списком товаров (CatalogPage) может являтся Главной страницей.
// Но есть нюанс на странице CatalogPage breadcrambs-навигация выглядит следующим образом: Главная -> Каталог
// Т.е. Главная и Каталог - это не одно и тоже, но по факту в markup/main.html Каталог гитар.
// И потом для страницы Каталога отдельная кнопка в навигации, а для Главной страницы логотип обёрнутый в ссылку.
