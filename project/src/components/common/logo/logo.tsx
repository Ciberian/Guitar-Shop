import { Link } from 'react-router-dom';
import { AppRoute } from '../../../constants';

interface ILogoProps {
  extraСlass?: string;
}

function Logo({extraСlass = ''}: ILogoProps): JSX.Element {
  return (
    <Link className={`${extraСlass} logo`} to={AppRoute.Root}>
      <img className="logo__img" width="70" height="70" src="./img/svg/logo.svg" alt="Логотип" />
    </Link>
  );
}

export default Logo;
