interface ICustomInputProps {
  extraClass?: string;
  name: string;
  label?: string;
  value?: string;
  placeholder?: string;
  inputValueChangeHandler: (evt: React.ChangeEvent<HTMLInputElement>) => void;
}

function CustomInput({
  extraClass = '',
  name,
  label,
  value,
  placeholder,
  inputValueChangeHandler}: ICustomInputProps
): JSX.Element {
  return (
    <div className={`custom-input ${extraClass} ${!value?.trim() ? 'is-invalid' : ''}`}>
      <label><span>{label}</span>
        <input
          type="text"
          name={name}
          value={value}
          placeholder={placeholder}
          onInput={inputValueChangeHandler}
        />
      </label>
      <p>Заполните поле</p>
    </div>
  );
}

export default CustomInput;
