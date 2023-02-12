import { ChangeEvent, useRef, useState } from 'react';
import Button from '../../common/button/button';

interface IEditItemImageProps {
  extraClass?: string;
  imageChangeHandler: (evt: ChangeEvent<HTMLDivElement>) => void;
}

function EditItemImage({extraClass = '', imageChangeHandler}: IEditItemImageProps): JSX.Element {
  const fileInput = useRef<HTMLInputElement | null>(null);
  const [itemImage, setItemImage] = useState<string | null>(null);


  const fileInputHandler = () => {
    fileInput.current?.click();
  };

  return (
    <div className={`edit-item-image ${extraClass}`}>
      <div className="edit-item-image__image-wrap">
        {itemImage &&
        <img
          className="edit-item-image__image"
          src={itemImage}
          srcSet="img/content/add-item-1@2x.png 2x"
          width="133"
          height="332"
          alt="СURT Z30 Plus"
        />}
      </div>
      <div className="edit-item-image__btn-wrap">
        <Button
          btnClickHandler={fileInputHandler}
          btnSize='button--small'
          btnStyle='button--black-border'
          btnType='edit-item-image__btn'
        >
          {extraClass === 'edit-item__form-image' ? 'Заменить' : 'Добавить'}
        </Button>
        <input
          onChange={addNewImageHandler}
          type='file'
          ref={fileInput}
          accept='.jpg, .jpeg, .png'
          style={{display: 'none'}}
        />
        <Button
          btnSize='button--small'
          btnStyle='button--black-border'
          btnType='edit-item-image__btn'
        >
          Удалить
        </Button>
      </div>
    </div>
  );
}

export default EditItemImage;
