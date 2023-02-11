interface IStringsCountSelectorProps {
  extraClass?: string;
  stringsQuantityChangeHandler: (evt: React.ChangeEvent<HTMLInputElement>) => void;
}

function StringsQuantitySelector({extraClass = '', stringsQuantityChangeHandler}: IStringsCountSelectorProps):JSX.Element {
  return (
    <div className={`input-radio ${extraClass}`}><span>Количество струн</span>
      <input onChange={stringsQuantityChangeHandler} type="radio" id="string-qty-4" name="string-qty" value="4" defaultChecked />
      <label htmlFor="string-qty-4">4</label>
      <input onChange={stringsQuantityChangeHandler} type="radio" id="string-qty-6" name="string-qty" value="6" />
      <label htmlFor="string-qty-6">6</label>
      <input onChange={stringsQuantityChangeHandler} type="radio" id="string-qty-7" name="string-qty" value="7" />
      <label htmlFor="string-qty-7">7</label>
      <input onChange={stringsQuantityChangeHandler} type="radio" id="string-qty-12" name="string-qty" value="12" />
      <label htmlFor="string-qty-12">12</label>
    </div>
  );
}

export default StringsQuantitySelector;
