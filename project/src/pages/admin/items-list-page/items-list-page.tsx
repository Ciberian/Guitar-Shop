import Sort from '../../../components/common/sort/sort';
import Pagination from '../../../components/common/pagination/pagination';
import Checkbox from '../../../components/form-elements/checkbox/checkbox';
import ItemsList from '../../../components/page-components/items-list/items-list';
import SiteFooter from '../../../components/page-components/site-footer/site-footer';
import SiteHeader from '../../../components/page-components/site-header/site-header';
import { Link } from 'react-router-dom';
import { useState, ChangeEvent } from 'react';
import { AppRoute, DEFAULT_ACTIVE_PAGE, DEFAULT_CATALOG_FILTER_VALUES, ITEMS_PER_PAGE, SortDirection, SortType } from '../../../constants';
import { IItem } from '../../../types/item.interface';
import { makeFakeItems } from '../../../utils/mocks';

function ItemsListPage(): JSX.Element {
// const items = useAppSelector(getItems);
  const items = makeFakeItems(75, 190); // - удалить когда появится API

  const [selectedSort, setSelectedSort] = useState<string>(SortType.Date);
  const [selectedOrder, setSelectedOrder] = useState<string>(SortDirection.toHigh);

  const changeSort = (sortType: string, flag?: 'order') => {
    setActivePage(DEFAULT_ACTIVE_PAGE);
    if (flag === 'order') {
      setSelectedOrder(sortType);
    } else {
      setSelectedSort(sortType);
    }
  };

  const sortItems = (sortType: string, products: IItem[]) => {
    switch (sortType) {
      case SortType.Date + SortDirection.toHigh:
        return products.slice().sort((product1, product2) => product1.date.getDate() - product2.date.getDate());
      case SortType.Date + SortDirection.toLow:
        return products.slice().sort((product1, product2) => product2.date.getDate() - product1.date.getDate());
      case SortType.Price + SortDirection.toHigh:
        return products.slice().sort((product1, product2) => product1.price - product2.price);
      case SortType.Price + SortDirection.toLow:
        return products.slice().sort((product1, product2) => product2.price - product1.price);
      case SortType.Popular + SortDirection.toHigh:
        return products.slice().sort((product1, product2) => product1.rating - product2.rating);
      case SortType.Popular + SortDirection.toLow:
        return products.slice().sort((product1, product2) => product2.rating - product1.rating);
      default:
        return products;
    }
  };

  const [formData, setFormData] = useState(DEFAULT_CATALOG_FILTER_VALUES);

  const formDataChangeHandler = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { type, name, checked, value } = target;
    const newFormData = type === 'checkbox' ? { ...formData, [name]: checked } : { ...formData, [name]: value };
    setFormData(newFormData);
    setActivePage(DEFAULT_ACTIVE_PAGE);
  };

  const accoustic = formData['аккустика'] ?
    items.filter((item) => item.type === 'аккустика') : [];
  const electro = formData['электро'] ?
    items.filter((item) => item.type === 'электро') : [];
  const ukulele = formData['укулеле'] ?
    items.filter((item) => item.type === 'укулеле') : [];
  const filteredByType = formData['аккустика'] || formData['электро'] || formData['укулеле'] ?
    [...accoustic, ...electro, ...ukulele] : items;

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
    <div className="wrapper">
      <SiteHeader />
      <main className='page-content'>
        <section className="product-list">
          <div className="container">
            <h1 className="product-list__title">Список товаров</h1>
            <ul className="breadcrumbs">
              <li className="breadcrumbs__item">
                <Link className="link" to={AppRoute.Catalog}>Каталог</Link>
              </li>
              <li className="breadcrumbs__item">
                <Link className="link" to={'#'}>Товары</Link>
              </li>
            </ul>
            <div className="catalog">
              <form className="catalog-filter">
                <h2 className="title title--bigger catalog-filter__title">Фильтр</h2>
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
              <Sort
                selectedSort={selectedSort}
                selectedOrder={selectedOrder}
                sortHandler={changeSort}
              />
              <ItemsList
                items={sortItems(selectedSort + selectedOrder, filteredItems)
                  .slice((activePage - 1) * ITEMS_PER_PAGE, activePage * ITEMS_PER_PAGE)}
              />
              <Pagination
                activePage={activePage}
                itemsCount={filteredItems.length}
                extraClass={'page-content__pagination'}
                paginationChangeHandler={paginationChangeHandler}
              />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

export default ItemsListPage;
