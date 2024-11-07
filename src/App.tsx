import moment from 'moment';

import Article from './components/ui-kit/Widgets/Article';
import Weather from './components/ui-kit/Widgets/Weather';
import Cards from './components/ui-kit/Widgets/Cards';
import Broadcast from './components/ui-kit/Widgets/Broadcast';
import Viewed from './components/ui-kit/Widgets/Viewed';
import TvProgramm from './components/ui-kit/Widgets/TvProgramm';
import Page from './components/Page'
import News from './components/ui-kit/Widgets/News'
import Banner from './components/ui-kit/Banner';
import { IArticleProps } from './components/ui-kit/Widgets/Article/Article';
import { ISearchProps } from './components/ui-kit/Search/Search';
import { IBannerProps } from './components/ui-kit/Banner/Banner';
import { INewsProps } from './components/ui-kit/Widgets/News/News';
import { IWeatherPorps } from './components/ui-kit/Widgets/Weather/Weather';
import articleImg from './img/KMHf54eUKg4Pl7ek-xl.jpg';
import bannerImg from './img/image-24-10-24-06-20-1.png';
import Search from './components/ui-kit/Search';
import icon from './icons/pumpkin.png';
import weatherIcon from './icons/weather-svgrepo-com.svg';
import playIcon from './icons/play.png';
import tvProgrammIcon from './icons/live-video-icon.webp';

import './App.css'

const NEWS_PROPS: INewsProps = {
  navigationItems: [
    {text: 'Сейчас в СМИ', href: '#'},
    {text: 'В Германии', href: '#'},
    {text: 'Рекомендуем', href: '#'},
  ],
  date: moment().locale('ru').format('DD MMMM, dddd HH:mm'),
  listItems: [
    {text: 'Илон Маск провёл испытания летающего автомобиля', href: '#', iconUrl: icon},
    {text: 'Биткоин вырос в цене', href: '#', iconUrl: icon},
    {text: '2 часть Джокера разделила аудиторию', href: '#', iconUrl: icon},
    {text: 'Нетология стала официальным партнёром Иннополиса', href: '#', iconUrl: icon},
  ],
  currencyItems: [
    'USD MOEX 63,52 +0,09',
    'EUR MOEX 70,86 +0,14',
    'НЕФТЬ 64,90 +1,63%'
  ]
};

const ARTICLE_PROPS: IArticleProps = {
  imageUrl: articleImg,
  articleTitle: 'Осознанность',
  articleDescription: 'Как быть более эффективным и спокойным',
};

const SEARCH_PROPS: ISearchProps = {
  navigationText: ' второй носок',
  navigationHref: '#',
  label: 'Найти',
};

const BANNER_PROPS: IBannerProps = {
  imageUrl: bannerImg,
  navigation: '#',
};

const WEATHER_PROPS: IWeatherPorps = {
  navigation: [
    {text: 'Погода', href: '#'},
  ],
  weatherLogoUrl: weatherIcon,
  weather: '+14°',
  description: ['Утром +14,', 'днём +19'],
};

const CARDS_PROPS: INewsProps  = {
  navigationItems: [
    {text: 'Карта Японии', href: '#'},
  ],
  listItems:  [
    {text: 'Расписания', href: '#'},
  ],
};

const BROADCAST_PROPS: INewsProps  = {
  navigationItems: [
    {text: 'Эфир', href: '#'},
  ],
  listItems:  [
    {text: 'Назад в будущее 2', href: '#', iconUrl: playIcon},
    {text: 'Нечто', href: '#', iconUrl: playIcon},
  ],
};

const VIEWED_PROPS: INewsProps  = {
  navigationItems: [
    {text: 'Посещаемое', href: '#'},
  ],
  listItems:  [
    {text: 'Ипотека - оценки экспертов', href: '#'},
    {text: 'OZON - маркетплейс №1', href: '#'},
  ],
};

const TVPROGRAMM_PROPS: INewsProps  = {
  navigationItems: [
    {text: 'Телепрограмма', href: '#', iconUrl: tvProgrammIcon},
  ],
  listItems:  [
    {text: '01:30  Голые и смешные  РЕНtv', href: '#'},
    {text: '02:00  Индиана Джонс  СТС', href: '#'},
    {text: '02:15  Следствие вели  НТВ', href: '#'},
  ],
};

function App() {
  return (
    <Page>
      <News {...NEWS_PROPS} />
      <Article {...ARTICLE_PROPS} />
      <Search {...SEARCH_PROPS} />
      <Banner {...BANNER_PROPS} />
      <Weather {...WEATHER_PROPS} />
      <Cards {...CARDS_PROPS} />
      <Broadcast {...BROADCAST_PROPS} />
      <Viewed {...VIEWED_PROPS} />
      <TvProgramm {...TVPROGRAMM_PROPS} />
    </Page>
  );
}

export default App;
