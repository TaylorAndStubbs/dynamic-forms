import React from 'react';
import Input from '../Input';
import { flexRowStyle } from '../../../styles';

const NumberInput = ({
  inputName,
  title,
  onChange,
  value,
  error,
  errorClass,
  titleClass,
  style
}) => (
  <div>
    <div css={flexRowStyle}>
      <p className={titleClass}>{title}</p>
      <Input
        className={error && errorClass}
        type="number"
        onChange={onChange}
        name={inputName}
        id={inputName}
        value={value}
        style={style}
      />
    </div>
    <div className={errorClass}>{error && error}</div>
  </div>
);

export default NumberInput;
