import React, { useState } from 'react';
import ImageUploading from 'react-images-uploading';
import { useForm } from '../../hooks/useForm';
import { useStore } from '../../store/Store';
import projectActions from '../../store/Projects/actions';
import imgurService from '../../services/imgur/service';
import projectsService from '../../services/projects/service';
import { toast } from 'react-toastify';

const ImageUploader = ({ setShowAddPost }) => {
  const [uploadingImage, setUploadingImage] = useState(false);
  const [images, setImages] = useState([]);
  const maxNumber = 1;
  const [{accessToken: {usuario}}, dispatch] = useStore();

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
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
    title
  } = formValues;

  const handleUploadImage = (data) => {
    return new Promise (async (resolve, reject) => {
      const formData = new FormData();
      formData.append('image', data.image.split(',')[1]);
      formData.append('type', 'base64');
      formData.append('name', data.name);
      formData.append('title', data.name);
      const imgData = await imgurService.uploadImg(formData);
      resolve(imgData);
    }).then((data) => {
      return data;
    });
  }
  
  const postImage = ({ data: {data: {link}}}, data) => {
    return new Promise (async(resolve, reject) => {
      const projectData = {
        title: data.title || data.name,
        profileImg: data.profileImg,
        idTatuador: data.idTatuador,
        tatuador: data.tatuador,
        imgUrl: link
      }
      const newProject = await projectsService.uploadProject(projectData);
      resolve(newProject);
    }).then((newProject) => {
      toast.success('Proyecto subido correctamente');
      return newProject;
    })
  }

  const handleUpload = () => {
    setUploadingImage(true);
    const data = {
      ...formValues,
      image: images[0].data_url,
      type: 'base64',
      name: images[0].file.name,
      title: title,
    };
    handleUploadImage(data).then((imagePosted) => {
      postImage(imagePosted, data).then((newProject) => {
        dispatch(projectActions.uploadProject(newProject));
        setShowAddPost(false);
      });
    });
  };
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
              <input className="post_image_title" name="title" onChange={handleInputChange} type="text" placeholder="Título de la imagen" />
              <div className="image-item__btn-wrapper">
                {!uploadingImage ? (
                  <>
                  <button className="btn btn-primary mr-1" onClick={() => onImageUpdate(index)}>Actualizar</button>
                    <button className="btn btn-primary mr-1" onClick={() => onImageRemove(index)}>Quitar</button>
                    {imageList.length > 0 && (
                      <button className="btn btn-primary" onClick={handleUpload}>Subir imagen</button>
                    )}
                  </>
                ) : (
                  <button className="btn btn-primary" disabled>Subiendo Imagen</button>
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
