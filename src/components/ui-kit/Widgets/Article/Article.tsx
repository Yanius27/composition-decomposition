import './Article.css';

export interface IArticleProps {
  imageUrl: string,
  articleTitle: string,
  articleDescription: string,
}

/**
 * Компонент необходимый для отображения статьи (вероятно с Яндекс дзена)
 * @param {IArticleProps} props - Адрес иконки статьи, заголовок и краткое описание.
 * @returns {JSX.Element}
 */

export default function Article(props: IArticleProps): JSX.Element {
  const {imageUrl, articleTitle, articleDescription} = props;

  return (
    <div className='Article'>
      <img src={imageUrl} alt="Article img" />
      <h2 className="Article__title">{articleTitle}</h2>
      <span className="Article__description">{articleDescription}</span>
    </div>
  )
}

