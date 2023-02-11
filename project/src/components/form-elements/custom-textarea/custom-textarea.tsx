interface ICustomInputProps {
  extraClass?: string;
  label?: string;
  value?: string;
  placeholder?: string;
  inputValueChangeHandler: (evt: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

function CustomTextarea({
  extraClass = '',
  label,
  value,
  placeholder,
  inputValueChangeHandler}: ICustomInputProps
): JSX.Element {
  return (
    <div className={`custom-textarea ${extraClass} ${!value?.trim() ? 'is-invalid' : ''}`}>
      <label><span>{label}</span>
        <textarea
          name='description'
          value={value}
          placeholder={placeholder}
          onInput={inputValueChangeHandler}
        >
        </textarea>
      </label>
      <p>Заполните поле</p>
    </div>
  );
}

export default CustomTextarea;
