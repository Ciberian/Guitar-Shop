import { ChangeEvent, useRef, useState } from 'react';
import Button from '../../common/button/button';

interface IEditItemImageProps {
  extraClass?: string;
  imageChangeHandler: (imgFile: FileList | null) => void;
}

function EditItemImage({extraClass = '', imageChangeHandler}: IEditItemImageProps): JSX.Element {
  const fileInput = useRef<HTMLInputElement | null>(null);
  const [itemImage, setItemImage] = useState<string | ArrayBuffer | null>(null);

  const fileInputHandler = () => {
    fileInput.current?.click();
  };

  const addNewImageHandler = ({target}: ChangeEvent<HTMLInputElement>) => {
    const fileReader = new FileReader();
    fileReader.onload = function() {
      setItemImage(fileReader.result);
      imageChangeHandler(target.files);
    };

    if (target.files) {
      fileReader.readAsDataURL(target.files[0]);
    }
  };

  const deleteImageHandler = () => {
    setItemImage(null);
    imageChangeHandler(null);
  };

  return (
    <div className={`edit-item-image ${extraClass}`}>
      <div className="edit-item-image__image-wrap">
        {itemImage &&
        <img
          className="edit-item-image__image"
          src={typeof itemImage === 'string' ? itemImage : ''}
          width="133"
          height="332"
          alt=""
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
          btnClickHandler={deleteImageHandler}
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
