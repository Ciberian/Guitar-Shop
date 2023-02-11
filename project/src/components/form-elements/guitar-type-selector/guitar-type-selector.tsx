interface IGuitarTypeSelectorProps {
  extraClass?: string;
  guitarTypeChangeHandler: (evt: React.ChangeEvent<HTMLInputElement>) => void;
}

function GuitarTypeSelector({extraClass = '', guitarTypeChangeHandler}: IGuitarTypeSelectorProps):JSX.Element {
  return (
    <div className={`input-radio ${extraClass}`}><span>Тип товара</span>
      <input onChange={guitarTypeChangeHandler} type="radio" id="guitar" name="item-type" value="guitar" defaultChecked />
      <label htmlFor="guitar">Акустическая гитара</label>
      <input onChange={guitarTypeChangeHandler} type="radio" id="el-guitar" name="item-type" value="el-guitar" />
      <label htmlFor="el-guitar">Электрогитара</label>
      <input onChange={guitarTypeChangeHandler} type="radio" id="ukulele" name="item-type" value="ukulele" />
      <label htmlFor="ukulele">Укулеле</label>
    </div>
  );
}

export default GuitarTypeSelector;
