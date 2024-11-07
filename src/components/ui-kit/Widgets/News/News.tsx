import Navigation, { INavigationItem } from '../../Navigation/Navigation';

import './News.css';

export interface INewsProps {
  navigationItems: INavigationItem[],
  date?: string,
  listItems: INavigationItem[],
  currencyItems?: string[],
}

/**
 * Компонент, базово необходимый для отображения навигационного меню по типам новостей,
 * списка самих новостей, также может отображать дату и курс валют. Используется в качестве каркаса другими компонентами
 * @param {INewsProps} props - принимает в качестве параметров 2 набора параметов для отображения навигации в шапке и в списке новостей.
 * Опционально - строку для отображения даты и массив строк для курса валют.
 * @returns {JSX.Element}
 */

export default function News(props: INewsProps): JSX.Element {
  const {navigationItems, date, listItems, currencyItems} = props;

  return (
    <div className="News">
      <div className="News__header">
        <Navigation items={navigationItems} />
        {date && (
          <span>{date}</span>
        )}
      </div>
      <div className="News__body">
        <Navigation items={listItems} />
      </div>
      {currencyItems && (
        <div className="News__footer">
          <span>{currencyItems[0]}</span>
          <span>{currencyItems[1]}</span>
          <span>{currencyItems[2]}</span>
        </div>
      )}
    </div>
  );
}
