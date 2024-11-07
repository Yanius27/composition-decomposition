import News, { INewsProps } from '../News/News';

import './TvProgramm.css';

/**
 * Компонент, являющийся обёрткой для основного компонента News. Нужен в основном для семантики и красоты
 * @param {INewsProps} props - принимает в качестве параметров всё, что необходимо для News 
 * @returns {JSX.Element}
 */

export default function TvProgramm(props: INewsProps): JSX.Element {
  return (
    <article className="TvProgramm">
      <News {...props} />
    </article>
  );
}
