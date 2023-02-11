import { useState } from 'react';

interface ITabsProps {
  extraСlass?: string;
}

function Tabs({extraСlass}: ITabsProps): JSX.Element {
  const [activeTab, setActiveTab] = useState('description');

  return (
    <div className={`tabs ${extraСlass}`}>
      <button
        className={`button button--medium tabs__button ${activeTab === 'characteristics' ? 'button--black-border' : ''}`}
        onClick={() => setActiveTab('characteristics')}
      >
        Характеристики
      </button>
      <button
        className={`button button--medium tabs__button ${activeTab === 'description' ? 'button--black-border' : ''}`}
        onClick={() => setActiveTab('description')}
      >
        Описание
      </button>
      <div className="tabs__content">
        <table className={`tabs__table ${activeTab === 'description' ? 'hidden' : ''}`}>
          <tbody>
            <tr className="tabs__table-row">
              <td className="tabs__title">Артикул:</td>
              <td className="tabs__value">SO754565</td>
            </tr>
            <tr className="tabs__table-row">
              <td className="tabs__title">Тип:</td>
              <td className="tabs__value">Электрогитара</td>
            </tr>
            <tr className="tabs__table-row">
              <td className="tabs__title">Количество струн:</td>
              <td className="tabs__value">6 струнная</td>
            </tr>
          </tbody>
        </table>
        <p className={`tabs__product-description ${activeTab === 'characteristics' ? 'hidden' : ''}`}>Гитара подходит как для старта обучения, так и для домашних занятий или использования в полевых условиях, например, в походах или для проведения уличных выступлений. Доступная стоимость, качество и надежная конструкция, а также приятный внешний вид, который сделает вас звездой вечеринки.</p>
      </div>
    </div>
  );
}

export default Tabs;
