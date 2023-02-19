/* eslint-disable no-console */
import Catalog from '../../../components/page-components/catalog/catalog';
import Checkbox from '../../../components/form-elements/checkbox/checkbox';
import SiteHeader from '../../../components/page-components/site-header/site-header';
import SiteFooter from '../../../components/page-components/site-footer/site-footer';
import { Link } from 'react-router-dom';
import { ChangeEvent, useState } from 'react';
import { makeFakeItems } from '../../../utils/mocks';
import { useDebounce } from '../../../hooks/use-debounce';
import { AppRoute, DEFAULT_CATALOG_FILTER_VALUES } from '../../../constants';

function CatalogPage(): JSX.Element {
  const items = makeFakeItems(75, 190);
  items.sort((item1, item2) => item1.price - item2.price);
  const itemMinPrice = items[0].price;
  const itemMaxPrice = items[items.length - 1].price;

  const [formData, setFormData] = useState(DEFAULT_CATALOG_FILTER_VALUES);
  const debouncedFormData = useDebounce(formData, 2000);

  const formDataChangeHandler = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { type, name, checked, value } = target;
    const newFormData = type === 'checkbox' ? { ...formData, [name]: checked } : { ...formData, [name]: value };
    setFormData(newFormData);
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
                <button className="catalog-sort__type-button" aria-label="по цене">по цене</button>
                <button className="catalog-sort__type-button" aria-label="по популярности">по популярности</button>
              </div>
              <div className="catalog-sort__order">
                <button className="catalog-sort__order-button catalog-sort__order-button--up" aria-label="По возрастанию"></button>
                <button className="catalog-sort__order-button catalog-sort__order-button--down" aria-label="По убыванию"></button>
              </div>
            </div>
            <Catalog items={filteredItems} />
            <div className="pagination page-content__pagination">
              <ul className="pagination__list">
                <li className="pagination__page pagination__page--active"><a className="link pagination__page-link" href="1">1</a>
                </li>
                <li className="pagination__page"><a className="link pagination__page-link" href="2">2</a>
                </li>
                <li className="pagination__page"><a className="link pagination__page-link" href="3">3</a>
                </li>
                <li className="pagination__page pagination__page--next" id="next"><a className="link pagination__page-link" href="2">Далее</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

export default CatalogPage;
