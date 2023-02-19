interface ICheckboxProps {
  name: string;
  label?: string;
  isChecked?: boolean;
  isDisabled?: boolean;
  extraClass?: string;
  checkboxChangeHandler: (evt: React.ChangeEvent<HTMLInputElement>) => void;
}

function Checkbox({
  name,
  label = '',
  isChecked = false,
  isDisabled = false,
  extraClass = '',
  checkboxChangeHandler
}: ICheckboxProps): JSX.Element {
  return (
    <div className={`form-checkbox ${extraClass}`}>
      <input
        className="visually-hidden"
        type="checkbox"
        id={name}
        name={name}
        defaultChecked={isChecked}
        disabled={isDisabled}
        onChange={checkboxChangeHandler}
      />
      <label htmlFor={name}>{label}</label>
    </div>
  );
}

export default Checkbox;
