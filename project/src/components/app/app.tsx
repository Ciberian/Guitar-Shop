import { useAppSelector } from '../../hooks';
import MainPage from '../../pages/others/main-page/main-page';
import LoginPage from '../../pages/auth/login-page/login-page';
import FavoritesPage from '../../pages/admin/orders-page/orders-page';
import NotFoundPage from '../../pages/others/not-found-page/page-not-found';
import PrivateRoute from '../private-route/private-route';
import LoadingScreen from '../loading-screen/loading-screen';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { getLoadedDataStatus } from '../../store/offers-data/selectors';
import { AppRoute } from '../../constants';

function App(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isDataLoaded = useAppSelector(getLoadedDataStatus);

  if (!isDataLoaded) {
    return <LoadingScreen />;
  }

  return (
    <Routes>
      <Route path={AppRoute.Root}>
        <Route index element={<MainPage />} />
        <Route path={AppRoute.Login} element={<LoginPage />} />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <FavoritesPage />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Offer} element={<OfferPage />} />
        <Route path={AppRoute.NotFoundPage} element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to={AppRoute.NotFoundPage} />} />
      </Route>
    </Routes>
  );
}

export default App;

