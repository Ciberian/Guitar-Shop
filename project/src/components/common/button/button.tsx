import { ReactNode } from 'react';
import { BtnSizes, BtnStyles, BtnTypes } from '../../../types/common.types';

interface IButtonProps {
  btnSize?: BtnSizes;
  btnType?: BtnTypes;
  btnStyle?: BtnStyles;
  children?: ReactNode;
  btnClickHandler?: () => void;
}

function Button({btnSize = 'button--big', btnType, btnStyle, children, btnClickHandler}: IButtonProps): JSX.Element {
  return (
    <button onClick={btnClickHandler} className={`button ${btnSize} ${btnType} ${btnStyle}`}>
      {children}
    </button>
  );
}

export default Button;
