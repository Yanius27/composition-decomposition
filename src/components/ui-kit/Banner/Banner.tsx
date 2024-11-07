import './Banner.css';

export interface IBannerProps {
  imageUrl: string,
  navigation: string,
}

/**
 * Компонент возвращает баннер с рекламой фильма
 * @param {IBannerProps} props - параметры включают в себя адрес картинки и ссылку для навигации
 * @returns {JSX.Element}
 */

export default function Banner(props: IBannerProps): JSX.Element {
  const {imageUrl, navigation} = props;

  return (
    <div className="Banner">
      <a href={navigation}>
        <img src={imageUrl} alt="Banner img" />
      </a>
    </div>
  );
}
