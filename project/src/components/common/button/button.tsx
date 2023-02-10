import { ReactNode } from 'react';

interface IButtonProps {
  size?: 'button--mini' | 'button--small' | 'button--medium' | 'button--big';
  type?: 'button--in-cart' | 'button--add-to-cart' | 'button--up';
  btnStyle?: 'button--red-border' | 'button--black-border' | 'button--red';
  children?: ReactNode;
}

function Button({size = 'button--big', type, btnStyle, children}: IButtonProps): JSX.Element {
  return (
    <button className={`button ${size} ${type} ${btnStyle}`}>
      {children}
    </button>
  );
}

export default Button;
