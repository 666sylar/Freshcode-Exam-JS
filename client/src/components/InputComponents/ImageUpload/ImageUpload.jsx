import React, { useRef } from 'react';
import classNames from 'classnames';
import { useField } from 'formik';

const ImageUpload = ({ name, classes }) => {
  const [field, meta, helpers] = useField(name);
  const { uploadContainer, inputContainer, imgStyle } = classes;
  const imgRef = useRef(null);

  const onChange = e => {
    const file = e.target.files[0];

    if (!file) {
      return;
    }
    if (!file.type || !file.type.startsWith('image/')) {
      e.target.value = '';
      helpers.setError('Invalid file format. Please select an image.');
      return;
    }

    helpers.setValue(file);

    const reader = new FileReader();
    reader.onload = () => {
      if (imgRef.current) {
        imgRef.current.src = reader.result;
      }
    };
    reader.onerror = () => {
      helpers.setError('Failed to load image.');
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className={uploadContainer}>
      <div className={inputContainer}>
        <span>Support only images (*.png, *.gif, *.jpeg)</span>
        <input
          id='fileInput'
          type='file'
          accept='.jpg, .png, .jpeg'
          onChange={onChange}
        />
        <label htmlFor='fileInput'>Chose file</label>
      </div>
      <img
        ref={imgRef}
        className={classNames({ [imgStyle]: !!field.value })}
        alt='Preview'
      />
    </div>
  );
};

export default ImageUpload;
