import React from 'react';
import Input from '../Input';
import { flexRowStyle } from '../../../styles';

const TextInput = ({
  inputName,
  title,
  onChange,
  value,
  error,
  titleClass,
  errorClass,
  style,
  placeholder
}) => {
  return (
    <div>
      <div css={flexRowStyle}>
        <p className={titleClass}>{title}</p>
        <Input
          className={error && 'is-invalid'}
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
};

export default TextInput;
