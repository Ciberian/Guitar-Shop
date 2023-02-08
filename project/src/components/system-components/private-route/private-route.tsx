import { Navigate } from 'react-router-dom';
import { AppRoute } from '../../../constants';

type PrivateRouteProps = {
	isAdmin: boolean;
	children: JSX.Element;
};

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const { isAdmin, children } = props;

  return isAdmin ? children : <Navigate to={AppRoute.Root} />;
}

export default PrivateRoute;

