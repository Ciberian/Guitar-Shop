import { ReactNode } from 'react';
import { BtnSizes, BtnStyles, BtnTypes } from '../../../types/common.types';

interface IButtonProps {
  btnSize?: BtnSizes;
  btnType?: BtnTypes;
  btnStyle?: BtnStyles;
  children?: ReactNode;
}

function Button({btnSize = 'button--big', btnType, btnStyle, children}: IButtonProps): JSX.Element {
  return (
    <button className={`button ${btnSize} ${btnType} ${btnStyle}`}>
      {children}
    </button>
  );
}

export default Button;
