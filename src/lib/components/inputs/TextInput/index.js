import React from 'react';
import Input from '../Input';
import { flexRowStyle } from '../../../styles';

const TextInput = ({ inputName, title, onChange, value, error, titleClass, errorClass, style }) => {
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
        />
      </div>
      <div className={errorClass}>{error && error}</div>
    </div>
  );
};

export default TextInput;
