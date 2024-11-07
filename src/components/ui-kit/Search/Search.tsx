import Button from '../Button';
import Navigation from '../Navigation';
import { INavigationItem } from '../Navigation/Navigation';

import './Search.css';

export interface ISearchProps {
  navigationText: string,
  navigationHref: string,
  label: string,
}

const NAVIGATION_PROPS: INavigationItem[] = [
  {text: 'Видео', href: '#'},
  {text: 'Картинки', href: '#'},
  {text: 'Новости', href: '#'},
  {text: 'Карты', href: '#'},
  {text: 'Маркет', href: '#'},
  {text: 'Переводчик', href: '#'},
  {text: 'Эфир', href: '#'},
  {text: 'ещё', href: '#'},
];

/**
 * Возвращает компонент с навигационным меню, инпутом, кнопкой (всё это так или иначе участвует в поиске) и span с примером поиска
 * @param {ISearchProps} props - Текст для навигации, ссылка навигации в примере поиска и лейбл для кнопки
 * @returns {JSX.Element}
 */

export default function Search(props: ISearchProps): JSX.Element {
  const {navigationText, navigationHref, label} = props;

  return (
    <div className="Search">
      <Navigation items={NAVIGATION_PROPS} />
      <div className="Search__group">
        <input type="text" />
        <Button label={label} />
      </div>
      <span className="Search__navigation">
        Найдётся всё. Например,
          {<a href={navigationHref}>
            {navigationText}
          </a>}
      </span>
    </div>
  );
}
