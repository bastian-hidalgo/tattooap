import React, { useState } from 'react';
import ImageUploading from 'react-images-uploading';
import { useForm } from '../../hooks/useForm';
import { useStore } from '../../store/Store';
import projectActions from '../../store/Projects/actions';

const ImageUploader = () => {
  const [images, setImages] = useState([]);
  const maxNumber = 1;
  const [{accessToken: {usuario}}, dispatch] = useStore();

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  const [formValues, handleInputChange] = useForm({
    title: '',
    profileImg: usuario ? usuario.profileImg : '',
    idTatuador: usuario ? usuario.uid : '',
    tatuador: usuario ? usuario.username : '',
    imgUrl: '',
  });
  const {
    title,
    profileImg,
    idTatuador,
    tatuador,
    imgUrl
  } = formValues;

  const handleUpload = () => {
    /*
      title
      profileImg
      publishedAt
      idTatuador
      tatuador
      imgUrl
    */
    const data = {
      image: images[0].data_url,
      type: 'base64',
      name: images[0].file.name,
      title: images[0].file.name
    };
    dispatch(projectActions.uploadProject(data));
  }
  return (
    <ImageUploading
      multiple
      value={images}
      onChange={onChange}
      maxNumber={maxNumber}
      dataURLKey="data_url"
    >
      {({
        imageList,
        onImageUpload,
        onImageRemoveAll,
        onImageUpdate,
        onImageRemove,
        isDragging,
        dragProps,
      }) => (
        // write your building UI
        <div className="upload__image-wrapper">
          <div className="upload_uploader_and_box">
            <div
              style={isDragging ? { color: 'red' } : undefined}
              className="posts__uploader"
              onClick={onImageUpload}
              {...dragProps}
            >
              Haz click aquí o arrastra tu imagen
            </div>
          </div>
          {imageList.map((image, index) => (
            <div key={index} className="image-item">
              <img src={image['data_url']} alt="" width="100" />
              <input className="post_image_title" type="text" placeholder="Título de la imagen" />
              <div className="image-item__btn-wrapper">
                <button className="btn btn-primary mr-1" onClick={() => onImageUpdate(index)}>Actualizar</button>
                <button className="btn btn-primary mr-1" onClick={() => onImageRemove(index)}>Quitar</button>
                {imageList.length > 0 && (
                  <button className="btn btn-primary" onClick={handleUpload}>Subir imagen</button>
                )}
              </div>
            </div>
          ))}
          </div>
      )}
    </ImageUploading>
  )
}

export default ImageUploader;
