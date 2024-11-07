import News, { INewsProps } from '../News/News';

import './Cards.css';

/**
 * Компонент, являющийся обёрткой для основного компонента News. Нужен в основном для семантики и красоты
 * @param {INewsProps} props - принимает в качестве параметров всё, что необходимо для News.
 * @returns {JSX.Element}
 */

export default function Cards(props: INewsProps): JSX.Element {
  return (
    <article className="Cards">
      <News {...props} />
    </article>
  );
}
