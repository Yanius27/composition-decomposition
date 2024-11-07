import './Button.css';

interface IButtonProps {
  label: string,
}

/**
 * Компонент кнопки, в данном случае используется как кнопка поиска
 * @param {IButtonProps} props - лейбл для кнопки
 * @returns {JSX.Element}
 */

export default function Button(props: IButtonProps): JSX.Element {
  const {label} = props;

  return (
    <button className="Button">{label}</button>
  );
}
