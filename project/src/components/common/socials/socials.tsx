import { Link } from 'react-router-dom';

interface ISocialsProps {
  extraСlass?: string;
}

function Socials({extraСlass = ''}: ISocialsProps): JSX.Element {
  return (
    <div className={`socials ${extraСlass}`}>
      <ul className="socials__list">
        <li className="socials-item">
          <Link className="socials__link" to="https://www.skype.com/" aria-label="Мы в skype">
            <svg className="socials__icon" width="24" height="24" aria-hidden="true">
              <use xlinkHref="#icon-skype"></use>
            </svg>
          </Link>
        </li>
        <li className="socials-item">
          <Link className="socials__link" to="https://www.vsco.co/" aria-label="Мы в vsco">
            <svg className="socials__icon" width="24" height="24" aria-hidden="true">
              <use xlinkHref="#icon-vsco"></use>
            </svg>
          </Link>
        </li>
        <li className="socials-item">
          <Link className="socials__link" to="https://www.pinterest.com/" aria-label="Мы в pinterest">
            <svg className="socials__icon" width="24" height="24" aria-hidden="true">
              <use xlinkHref="#icon-pinterest"></use>
            </svg>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Socials;
