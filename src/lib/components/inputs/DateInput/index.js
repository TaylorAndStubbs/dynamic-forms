import React from 'react';
import { flexRowStyle } from '../../../styles';
import Flatpickr from 'react-flatpickr';

const DateInput = ({ inputName, title, onChange, value, error, titleClass, errorClass }) => (
  <div>
    <div css={flexRowStyle}>
      <p className={titleClass}>{title}</p>
      <Flatpickr
        className={`form-control ${error && "is-invalid"}`}
        value={value}
      />
    </div>
    <div className={errorClass}>{( error ) && error}</div>
  </div>
);

export default DateInput;
