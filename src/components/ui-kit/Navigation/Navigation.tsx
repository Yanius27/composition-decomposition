import './Navigation.css';

export interface INavigationItem {
  text: string,
  href: string,
  iconUrl?: string,
}

export interface INavigationProps {
  items: INavigationItem[],
}

/**
 * Компонент содержащий nav список с пунктами какого-либо меню или списка
 * @param {INavigationItem[]} props - массив с  параметрами для каждого пункта меню
 * @returns {JSX.Element}
 */

export default function Navigation(props: INavigationProps): JSX.Element {
  const {items} = props;

  return (
    <nav className="Navigation">
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.iconUrl && (
              <img src={item.iconUrl} alt="News icon" />
            )}
            <a href={item.href}>
              <h2>
                {item.text}  
              </h2>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
