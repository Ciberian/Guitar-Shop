import { ChangeEvent, useRef, useState } from 'react';
import Button from '../../common/button/button';

interface IEditItemImageProps {
  extraClass?: string;
  editItemImageHandler: (imgFile: FileList | null) => void;
}

function EditItemImage({extraClass = '', editItemImageHandler}: IEditItemImageProps): JSX.Element {
  const inputFile = useRef<HTMLInputElement | null>(null);
  const [itemImage, setItemImage] = useState<string | ArrayBuffer | null>(null);

  const addImgBtnClickHandler = () => {
    inputFile.current?.click();
  };

  const inputFileChangeHandler = ({target}: ChangeEvent<HTMLInputElement>) => {
    const fileReader = new FileReader();
    fileReader.onload = function() {
      setItemImage(fileReader.result);
      editItemImageHandler(target.files);
    };

    if (target.files) {
      fileReader.readAsDataURL(target.files[0]);
    }
  };

  const deleteImgBtnClickHandler = () => {
    setItemImage(null);
    editItemImageHandler(null);
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
          btnClickHandler={addImgBtnClickHandler}
          btnSize='button--small'
          btnStyle='button--black-border'
          btnType='edit-item-image__btn'
        >
          {extraClass === 'edit-item__form-image' ? 'Заменить' : 'Добавить'}
        </Button>
        <input
          onChange={inputFileChangeHandler}
          type='file'
          ref={inputFile}
          accept='.jpg, .jpeg, .png'
          style={{display: 'none'}}
        />
        <Button
          btnClickHandler={deleteImgBtnClickHandler}
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
