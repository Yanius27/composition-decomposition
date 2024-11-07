import Navigation from '../../Navigation';

import { INavigationItem } from '../../Navigation/Navigation';

import './Weather.css';

export interface IWeatherPorps {
  navigation: INavigationItem[],
  weatherLogoUrl: string,
  weather: string,
  description: string[],
}

/**
 * Компонент, являющийся виджетом для отображения погоды
 * @param {INewsProps} props - принимает в качестве параметров всё, что необходимо для Navigatiion в шапке виджета,
 * адрес иконки погоды, актульную темературу по цельсию и более подробный прогназ на день.
 * @returns {JSX.Element}
 */

export default function Weather(props: IWeatherPorps): JSX.Element {
  const {navigation, weatherLogoUrl, weather, description} = props;

  return (
    <div className="Weather">
      <div className="Weather__header">
        <Navigation items={navigation} />
      </div>
      <div className="Weather__body">
        <img src={weatherLogoUrl} alt="Weather icon" />
        <span className="Weather__status">{weather}</span>
        <span className="Weather__description">
          <span>{description[0]}</span>
          <span>{description[1]}</span>
        </span>
      </div>
    </div>
  );
}
