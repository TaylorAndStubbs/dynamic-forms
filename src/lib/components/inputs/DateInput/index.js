import React from 'react';
import { flexRowStyle } from '../../../styles';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/material_blue.css';

const DateInput = ({
  inputName,
  title,
  setFieldValue,
  value,
  error,
  titleClass,
  errorClass,
  style
}) => {
  return (
    <div>
      <div css={flexRowStyle}>
        <p className={titleClass}>{title}</p>
        <Flatpickr
          className={`form-control ${error && 'is-invalid'}`}
          value={value}
          onChange={data => setFieldValue(inputName, data[0].toUTCString())}
          style={style}
          id={inputName}
        />
      </div>
      <div className={errorClass}>{error && error}</div>
    </div>
  );
};

export default DateInput;
