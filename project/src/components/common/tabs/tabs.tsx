import { useState } from 'react';
import { IItem } from '../../../types/item.interface';
import { GuitarType } from '../../../constants';

interface ITabsProps {
  extraСlass?: string;
  item: IItem;
}

function Tabs({ extraСlass = '', item }: ITabsProps): JSX.Element {
  const { sku, type, strings, description } = item;
  const [activeTab, setActiveTab] = useState('description');

  return (
    <div className={`tabs ${extraСlass}`}>
      <button
        className={`button button--medium tabs__button ${activeTab === 'description' ? 'button--black-border' : ''}`}
        onClick={() => setActiveTab('characteristics')}
      >
        Характеристики
      </button>
      <button
        className={`button button--medium tabs__button ${activeTab === 'characteristics' ? 'button--black-border' : ''}`}
        onClick={() => setActiveTab('description')}
      >
        Описание
      </button>
      <div className="tabs__content">
        <table className={`tabs__table ${activeTab === 'description' ? 'hidden' : ''}`}>
          <tbody>
            <tr className="tabs__table-row">
              <td className="tabs__title">Артикул:</td>
              <td className="tabs__value">{sku}</td>
            </tr>
            <tr className="tabs__table-row">
              <td className="tabs__title">Тип:</td>
              <td className="tabs__value">{GuitarType[type]}</td>
            </tr>
            <tr className="tabs__table-row">
              <td className="tabs__title">Количество струн:</td>
              <td className="tabs__value">{strings} струнная</td>
            </tr>
          </tbody>
        </table>
        <p className={`tabs__product-description ${activeTab === 'characteristics' ? 'hidden' : ''}`}>{description}</p>
      </div>
    </div>
  );
}

export default Tabs;
