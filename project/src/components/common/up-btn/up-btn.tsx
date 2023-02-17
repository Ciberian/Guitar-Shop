interface IUpBtnProps {
  extraСlass?: string;
}

function UpBtn({ extraСlass = '' }: IUpBtnProps): JSX.Element {
  return (
    <button
      className={`button button--up button--red-border button--big ${extraСlass}`}
      type="button"
      onClick={() => window.scrollTo(0, 0)}
      style={{zIndex: '1000'}}
    >
      Наверх
    </button>
  );
}

export default UpBtn;
