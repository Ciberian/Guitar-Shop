interface ICrossBtnProps {
  extraСlass?: string;
}

function CrossBtn({extraСlass}: ICrossBtnProps): JSX.Element {
  return (
    <button className={`button-cross ${extraСlass}`} type="button" aria-label="Закрыть">
      <span className="button-cross__icon"></span>
    </button>
  );
}

export default CrossBtn;
