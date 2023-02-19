import Catalog from '../../../components/page-components/catalog/catalog';
import Checkbox from '../../../components/form-elements/checkbox/checkbox';
import Pagination from '../../../components/common/pagination/pagination';
import SiteHeader from '../../../components/page-components/site-header/site-header';
import SiteFooter from '../../../components/page-components/site-footer/site-footer';
import { Link } from 'react-router-dom';
import { ChangeEvent, useState } from 'react';
import { makeFakeItems } from '../../../utils/mocks';
import { IItem } from '../../../types/item.interface';
import { useDebounce } from '../../../hooks/use-debounce';
import {
  AppRoute,
  SortType,
  SortDirection,
  DEFAULT_ACTIVE_PAGE,
  DEFAULT_CATALOG_FILTER_VALUES,
  ITEMS_PER_PAGE,
} from '../../../constants';

function CatalogPage(): JSX.Element {
  // const items = useAppSelector(getItems);
  const items = makeFakeItems(75, 190); // - удалить когда появится API

  const defaultSortedItems = items.slice().sort((item1, item2) => item1.price - item2.price);
  const itemMinPrice = defaultSortedItems[0].price;
  const itemMaxPrice = defaultSortedItems[items.length - 1].price;

  const [selectedSort, setSelectedSort] = useState<string>(SortType.Price);
  const [sortDirection, setSortDirection] = useState<string>(SortDirection.toHigh);

  const sortItems = (sortType: string, catalogItems: IItem[]) => {
    switch (sortType) {
      case SortType.Price + SortDirection.toHigh:
        return catalogItems.slice().sort((item1, item2) => item1.price - item2.price);
      case SortType.Price + SortDirection.toLow:
        return catalogItems.slice().sort((item1, item2) => item2.price - item1.price);
      case SortType.Popular + SortDirection.toHigh:
        return catalogItems.slice().sort((item1, item2) => item1.rating - item2.rating);
      case SortType.Popular + SortDirection.toLow:
        return catalogItems.slice().sort((item1, item2) => item2.rating - item1.rating);
      default:
        return catalogItems;
    }
  };

  const [formData, setFormData] = useState(DEFAULT_CATALOG_FILTER_VALUES);
  const debouncedFormData = useDebounce(formData, 1000);

  const formDataChangeHandler = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { type, name, checked, value } = target;
    const newFormData = type === 'checkbox' ? { ...formData, [name]: checked } : { ...formData, [name]: value };
    setFormData(newFormData);
    setActivePage(DEFAULT_ACTIVE_PAGE);
  };

  const filteredByPrice = items
    .filter((item) => debouncedFormData.priceMin < item.price)
    .filter((item) => debouncedFormData.priceMax > item.price);

  const accoustic = formData['аккустика'] ?
    filteredByPrice.filter((item) => item.type === 'аккустика') : [];
  const electro = formData['электро'] ?
    filteredByPrice.filter((item) => item.type === 'электро') : [];
  const ukulele = formData['укулеле'] ?
    filteredByPrice.filter((item) => item.type === 'укулеле') : [];
  const filteredByType = formData['аккустика'] || formData['электро'] || formData['укулеле'] ?
    [...accoustic, ...electro, ...ukulele] : filteredByPrice;

  const strings4 = formData['4-strings'] ?
    filteredByType.filter((item) => item.strings === 4) : [];
  const strings6 = formData['6-strings'] ?
    filteredByType.filter((item) => item.strings === 6) : [];
  const strings7 = formData['7-strings'] ?
    filteredByType.filter((item) => item.strings === 7) : [];
  const strings12 = formData['12-strings'] ?
    filteredByType.filter((item) => item.strings === 12) : [];
  const filteredItems = formData['4-strings'] || formData['6-strings'] || formData['7-strings'] || formData['12-strings'] ?
    [...strings4, ...strings6, ...strings7, ...strings12] : filteredByType;

  const [activePage, setActivePage] = useState(DEFAULT_ACTIVE_PAGE);
  const paginationChangeHandler = (page: number) => {
    setActivePage(page);
  };

  return (
    <>
      <SiteHeader />
      <main className='page-content'>
        <div className="container">
          <h1 className="page-content__title title title--bigger">Каталог гитар</h1>
          <ul className="breadcrumbs page-content__breadcrumbs">
            <li className="breadcrumbs__item">
              <Link className="link" to={AppRoute.Root}>Главная</Link>
            </li>
            <li className="breadcrumbs__item">
              <Link className="link" to={'#'}>Каталог</Link>
            </li>
          </ul>
          <div className="catalog">
            <form className="catalog-filter">
              <h2 className="title title--bigger catalog-filter__title">Фильтр</h2>
              <fieldset className="catalog-filter__block">
                <legend className="catalog-filter__block-title">Цена, ₽</legend>
                <div className="catalog-filter__price-range">
                  <div className="form-input">
                    <label className="visually-hidden">Минимальная цена</label>
                    <input
                      type="number"
                      placeholder={String(itemMinPrice)}
                      id="priceMin"
                      name="priceMin"
                      min={0}
                      onChange={formDataChangeHandler}
                    />
                  </div>
                  <div className="form-input">
                    <label className="visually-hidden">Максимальная цена</label>
                    <input
                      type="number"
                      placeholder={String(itemMaxPrice)}
                      id="priceMax"
                      name="priceMax"
                      onChange={formDataChangeHandler}
                    />
                  </div>
                </div>
              </fieldset>
              <fieldset className="catalog-filter__block">
                <legend className="catalog-filter__block-title">Тип гитар</legend>
                <Checkbox
                  name='аккустика'
                  label='Акустические гитары'
                  extraClass='catalog-filter__block-item'
                  checkboxChangeHandler={formDataChangeHandler}
                />
                <Checkbox
                  name='электро'
                  label='Электрогитары'
                  extraClass='catalog-filter__block-item'
                  checkboxChangeHandler={formDataChangeHandler}
                />
                <Checkbox
                  name='укулеле'
                  label='Укулеле'
                  extraClass='catalog-filter__block-item'
                  checkboxChangeHandler={formDataChangeHandler}
                />
              </fieldset>
              <fieldset className="catalog-filter__block">
                <legend className="catalog-filter__block-title">Количество струн</legend>
                <Checkbox
                  name='4-strings'
                  label='4'
                  isDisabled={formData.аккустика}
                  extraClass='catalog-filter__block-item'
                  checkboxChangeHandler={formDataChangeHandler}
                />
                <Checkbox
                  name='6-strings'
                  label='6'
                  isDisabled={formData.укулеле}
                  extraClass='catalog-filter__block-item'
                  checkboxChangeHandler={formDataChangeHandler}
                />
                <Checkbox
                  name='7-strings'
                  label='7'
                  isDisabled={formData.укулеле}
                  extraClass='catalog-filter__block-item'
                  checkboxChangeHandler={formDataChangeHandler}
                />
                <Checkbox
                  name='12-strings'
                  label='12'
                  isDisabled={formData.электро || formData.укулеле}
                  extraClass='catalog-filter__block-item'
                  checkboxChangeHandler={formDataChangeHandler}
                />
              </fieldset>
              <button
                className="catalog-filter__reset-btn button button--black-border button--medium"
                type="reset"
                onClick={() => setFormData(DEFAULT_CATALOG_FILTER_VALUES)}
              >
                Очистить
              </button>
            </form>
            <div className="catalog-sort">
              <h2 className="catalog-sort__title">Сортировать:</h2>
              <div className="catalog-sort__type">
                <button
                  className={`catalog-sort__type-button ${selectedSort === SortType.Price ? 'catalog-sort__type-button--active' : ''}`}
                  aria-label="по цене"
                  onClick={() => {
                    setActivePage(DEFAULT_ACTIVE_PAGE);
                    setSelectedSort(SortType.Price);
                  }}
                >
                  по цене
                </button>
                <button
                  className={`catalog-sort__type-button ${selectedSort === SortType.Popular ? 'catalog-sort__type-button--active' : ''}`}
                  aria-label="по популярности"
                  onClick={() => {
                    setActivePage(DEFAULT_ACTIVE_PAGE);
                    setSelectedSort(SortType.Popular);
                  }}
                >
                  по популярности
                </button>
              </div>
              <div className="catalog-sort__order">
                <button
                  className={`catalog-sort__order-button catalog-sort__order-button--up ${sortDirection === SortDirection.toHigh ? 'catalog-sort__order-button--active' : ''}`}
                  aria-label="По возрастанию"
                  onClick={() => {
                    setActivePage(DEFAULT_ACTIVE_PAGE);
                    setSortDirection(SortDirection.toHigh);
                  }}
                >
                </button>
                <button
                  className={`catalog-sort__order-button catalog-sort__order-button--down ${sortDirection === SortDirection.toLow ? 'catalog-sort__order-button--active' : ''}`}
                  aria-label="По убыванию"
                  onClick={() => {
                    setActivePage(DEFAULT_ACTIVE_PAGE);
                    setSortDirection(SortDirection.toLow);
                  }}
                >
                </button>
              </div>
            </div>
            <Catalog
              items={sortItems(selectedSort + sortDirection, filteredItems)
                .slice((activePage - 1) * ITEMS_PER_PAGE, activePage * ITEMS_PER_PAGE)}
            />
            <Pagination
              activePage={activePage}
              itemsCount={filteredItems.length}
              paginationChangeHandler={paginationChangeHandler}
            />
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

export default CatalogPage;
