import { Link } from 'react-router-dom';
import { ITEMS_PER_PAGE } from '../../../constants';

interface IFormRatingProps {
  activePage: number;
  itemsCount: number;
  extraClass?: string;
  paginationChangeHandler: (page: number) => void;
}

function Pagination({activePage, itemsCount, extraClass, paginationChangeHandler}: IFormRatingProps): JSX.Element {
  const maxPage = Math.ceil(itemsCount / ITEMS_PER_PAGE);

  const getPageValue = (page: number, btnNumber: 1 | 2 | 3) => {
    if (btnNumber === 1) {
      if (page === 1 || page === 2) {
        return 1;
      }

      if (page === maxPage) {
        return page - 2;
      }

      if (page > 2) {
        return page - 1;
      }
    }

    if (btnNumber === 2) {
      if (page === 1) {
        return 2;
      }

      if (page === maxPage) {
        return page - 1;
      }

      if (page > 1) {
        return page;
      }
    }

    if (btnNumber === 3) {
      if (page === 1) {
        return 3;
      }

      if (page === maxPage) {
        return page;
      }

      if (page > 1) {
        return page + 1;
      }
    }
  };

  return (
    <div className={`pagination ${extraClass}`}>
      <ul className="pagination__list">
        {activePage !== 1 &&
        <li className="pagination__page pagination__page--next" id="next">
          <Link
            className="link pagination__page-link" to={'#'}
            onClick={() => paginationChangeHandler(activePage - 1)}
          >
              Назад
          </Link>
        </li>}
        <li className={`pagination__page ${activePage === 1 ? 'pagination__page--active' : ''}`}>
          <Link className="link pagination__page-link" to={'#'}>
            {getPageValue(activePage, 1)}
          </Link>
        </li>
        <li className={`pagination__page ${activePage > 1 && activePage !== maxPage ? 'pagination__page--active' : ''}`}>
          <Link className="link pagination__page-link" to={'#'}>
            {getPageValue(activePage, 2)}
          </Link>
        </li>
        <li className={`pagination__page ${activePage === maxPage ? 'pagination__page--active' : ''}`}>
          <Link className="link pagination__page-link" to={'#'}>
            {getPageValue(activePage, 3)}
          </Link>
        </li>
        {activePage !== maxPage &&
        <li className="pagination__page pagination__page--next" id="next">
          <Link
            className="link pagination__page-link" to={'#'}
            onClick={() => paginationChangeHandler(activePage + 1)}
          >
            Далее
          </Link>
        </li>}
      </ul>
    </div>
  );
}

export default Pagination;
