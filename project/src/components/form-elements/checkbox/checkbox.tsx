interface ICheckboxProps {
  name: string;
  label?: string;
  isChecked?: boolean;
  checkboxChangeHandler: (evt: React.ChangeEvent<HTMLInputElement>) => void;
}

function Checkbox({name, label, isChecked, checkboxChangeHandler}: ICheckboxProps): JSX.Element {
  return (
    <div className="form-checkbox">
      <input
        className="visually-hidden"
        type="checkbox"
        id={name}
        name={name}
        defaultChecked={isChecked}
        onChange={checkboxChangeHandler}
      />
      <label htmlFor={name}>{label}</label>
    </div>
  );
}

export default Checkbox;
