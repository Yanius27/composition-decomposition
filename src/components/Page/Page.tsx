import { Children, PropsWithChildren } from 'react';

import './Page.css';

/**
 * Компонент контейнер для всех основных ui-компонентов
 * @param {React.ReactNode} children - дочерние компоненты.
 * @returns {JSX.Element}
 */

export default function Page({children}: PropsWithChildren): JSX.Element {
  const childrenArr = Children.toArray(children);
  
  return (
    <div className="Page">
      <header className='Page__header'>
        {childrenArr[0]}
        {childrenArr[1]}
      </header>
      <main className="Page__content">
        {childrenArr[2]}
        {childrenArr[3]}
        <div className='Page__widgets'>
          {childrenArr[4]}
          {childrenArr[5]}
          {childrenArr[6]}
          {childrenArr[7]}
          {childrenArr[8]}
          {childrenArr[9]}
        </div>
      </main>
    </div>
  );
}
