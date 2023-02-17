interface ICrossBtnProps {
  extraСlass?: string;
  crossBtnHandler?: () => void;
}

function CrossBtn({ extraСlass = '', crossBtnHandler }: ICrossBtnProps): JSX.Element {
  return (
    <button
      className={`button-cross ${extraСlass}`}
      type="button"
      aria-label="Закрыть"
      onClick={crossBtnHandler}
    >
      <span className="button-cross__icon"></span>
      {extraСlass === 'modal__close-btn' &&
      <span className="modal__close-btn-interactive-area"></span>}
    </button>
  );
}

export default CrossBtn;
