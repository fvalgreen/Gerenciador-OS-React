import { useRef } from "react";

type UploadImageProps = {
  setImage(image: any): void;
  source: string,

};

const UploadImage: React.FC<UploadImageProps> = ({
  setImage, source
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const getImageURL = (file: any) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onloadend = () => {
      setImage({
        preview: fileReader.result,
        file,
      });
    };
  };

  const changeImage = () => {
    if (!inputRef?.current?.files?.length) {
      return;
    }

    const file = inputRef?.current?.files[0];
    getImageURL(file);
  };

  const openPickFile = () => {
    inputRef?.current?.click();
  };

  return (    
      <div className="upload-image-container" onClick={openPickFile}>
        <div className="image-preview-container">
          <img
            className="image-preview"
            src={source}
            alt=""
          />
        </div>
        <p>Clique aqui para selecionar uma imagem</p>
        <input
          type="file"
          className="oculto"
          ref={inputRef}
          accept="image/*"
          onChange={changeImage}
        />
      </div>   
  );
};

export default UploadImage;
