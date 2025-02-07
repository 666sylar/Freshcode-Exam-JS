import React from 'react';
import { useField, useFormikContext } from 'formik';

const FieldFileInput = ({ classes, ...rest }) => {
  const { fileUploadContainer, labelClass, fileNameClass, fileInput } = classes;
  const [field, meta, helpers] = useField(rest.name);
  const { setFieldValue } = useFormikContext();

  const handleChange = event => {
    const file = event.currentTarget.files[0];
    setFieldValue(rest.name, file);
  };

  return (
    <div className={fileUploadContainer}>
      <label htmlFor='fileInput' className={labelClass}>
        Choose file
      </label>
      <span id='fileNameContainer' className={fileNameClass}>
        {field.value ? field.value.name : 'No file chosen'}
      </span>
      <input
        className={fileInput}
        id='fileInput'
        type='file'
        onChange={handleChange}
      />
    </div>
  );
};

export default FieldFileInput;
