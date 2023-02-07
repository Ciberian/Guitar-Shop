import { ReactNode } from 'react';

interface IButtonProps {
  size: 'button--mini' | 'button--small' | 'button--medium' | 'button--big';
  type?: 'button--in-cart' | 'button--add-to-cart' | 'button--up';
  style?: 'button--red-border' | 'button--black-border' | 'button--red';
  children?: ReactNode;
}

function Button({size = 'button--big', type, style, children}: IButtonProps): JSX.Element {
  return (
    <button className={`button ${size} ${type} ${style}`}>
      {children}
    </button>
  );
}

export default Button;
