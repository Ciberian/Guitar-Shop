import { SortDirection, SortType } from '../../../constants';

interface ISortProps {
  selectedSort: string;
  selectedOrder: string;
  isHideDate?: boolean;
  isHidePopular?: boolean;
  sortHandler: (sortType: string, flag?: 'order') => void;
}

function Sort({
  selectedSort,
  selectedOrder,
  isHideDate = false,
  isHidePopular = false,
  sortHandler
}: ISortProps): JSX.Element {
  return (
    <div className="catalog-sort">
      <h2 className="catalog-sort__title">Сортировать:</h2>
      <div className="catalog-sort__type">
        {!isHideDate &&
        <button
          className={`catalog-sort__type-button ${selectedSort === SortType.Date ? 'catalog-sort__type-button--active' : ''}`}
          aria-label="по дате"
          onClick={() => sortHandler(SortType.Date)}
        >
          по дате
        </button>}
        <button
          className={`catalog-sort__type-button ${selectedSort === SortType.Price ? 'catalog-sort__type-button--active' : ''}`}
          aria-label="по цене"
          onClick={() => sortHandler(SortType.Price)}
        >
          по цене
        </button>
        {!isHidePopular &&
        <button
          className={`catalog-sort__type-button ${selectedSort === SortType.Popular ? 'catalog-sort__type-button--active' : ''}`}
          aria-label="по популярности"
          onClick={() => sortHandler(SortType.Popular)}
        >
          по популярности
        </button>}
      </div>
      <div className="catalog-sort__order">
        <button
          className={`catalog-sort__order-button catalog-sort__order-button--up ${selectedOrder === SortDirection.toHigh ? 'catalog-sort__order-button--active' : ''}`}
          aria-label="По возрастанию"
          onClick={() => sortHandler(SortDirection.toHigh, 'order')}
        >
        </button>
        <button
          className={`catalog-sort__order-button catalog-sort__order-button--down ${selectedOrder === SortDirection.toLow ? 'catalog-sort__order-button--active' : ''}`}
          aria-label="По убыванию"
          onClick={() => sortHandler(SortDirection.toLow, 'order')}
        >
        </button>
      </div>
    </div>
  );
}

export default Sort;
