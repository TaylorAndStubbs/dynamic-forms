import React from 'react';
import { Formik } from 'formik';
import { getValidationSchema } from '../../util';
import CurrencyInput from '../inputs/CurrencyInput';
import DateInput from '../inputs/DateInput';
import SelectInput from '../inputs/SelectInput';
import TextInput from '../inputs/TextInput';
import NumberInput from '../inputs/NumberInput';

const renderFormInput = data => {
  switch (data.type) {
    case 'select':
      return <SelectInput {...data} />;
    case 'text':
      return <TextInput {...data} />;
    case 'integer':
      return <NumberInput {...data} />;
    case 'date':
      return <DateInput {...data} />;
    case 'currency':
      return <CurrencyInput {...data} />;
    default:
      return 'error';
  }
};

const AutoForm = ({ onSubmit, schema, inputStyles, submitStyle }) => (
  <Formik
    validateOnBlur={false}
    validateOnChange={false}
    validationSchema={getValidationSchema(schema.fields)}
    onSubmit={async (values, { setSubmitting }) => {
      setSubmitting(true);

      await onSubmit(values);

      setSubmitting(false);
    }}
  >
    {({
      values,
      errors,
      handleChange,
      handleSubmit,
      isSubmitting,
      setFieldTouched,
      touched,
      setTouched,
      setFieldValue,
      setErrors
    }) => (
      <form onSubmit={handleSubmit}>
        {schema.fields.map(a =>
          renderFormInput({
            ...a,
            datasource: schema[a.inputName],
            onChange: handleChange,
            value: values[a.inputName],
            error: errors[a.inputName],
            touched: touched[a.inputName],
            setFieldValue: setFieldValue,
            style: inputStyles[a.type]
          })
        )}
        <button type="submit" style={submitStyle}>
          {schema.submitButtonText}
        </button>
      </form>
    )}
  </Formik>
);

export default AutoForm;
