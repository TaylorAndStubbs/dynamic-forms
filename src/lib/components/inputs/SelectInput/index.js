import React from 'react';
import { flexRowStyle, selectStyle } from '../../../styles';

const SelectInput = ({
  inputName,
  placeholder,
  onChange,
  value,
  options,
  error,
  touched,
  titleStyle,
  errorStyle,
  style
}) => (
  <div className={flexRowStyle}>
    <p className={titleStyle}>{placeholder}</p>
    <select
      className={error && 'is-invalid'}
      id={inputName}
      data-toggle="select"
      value={value}
      onChange={onChange}
      css={selectStyle}
      style={style}
    >
      <option hidden disabled selected value={null}>
        {placeholder}
      </option>
      {options.map(item => (
        <option key={item.value} value={item.name}>
          {item.name}
        </option>
      ))}
    </select>
    <div className={errorStyle}>{error && error}</div>
  </div>
);

export default SelectInput;
