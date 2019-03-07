import React from 'react';
import Input from '../Input';
import * as CInput from 'react-currency-input';
import { flexRowStyle } from '../../../styles';

const CurrencyInput = ({
  inputName,
  title,
  onChange,
  value,
  error,
  touched,
  titleClass,
  errorClass,
  invalidClass,
  style,
  placeholder
}) => (
  <div>
    <div css={flexRowStyle}>
      <p className={titleClass}>{title}</p>
      <Input
        className={error && invalidClass}
        prefix="$"
        as={CInput}
        onChange={onChange}
        name={inputName}
        id={inputName}
        value={value}
        style={style}
        placeholder={placeholder}
      />
    </div>
    <div className={errorClass}>{error && error}</div>
  </div>
);

export default CurrencyInput;
