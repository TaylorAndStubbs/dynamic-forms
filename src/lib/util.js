import * as yup from 'yup';

const getValidationSchema = fields => {
  const schema = fields.reduce((v, a) => {
    if (a.required) {
      v[a.inputName] = yup.string().required(a.requiredString || 'required');
    } else {
      v[a.inputName] = yup.string();
    }
    return v;
  }, {});
  return yup.object().shape(schema);
};

export { getValidationSchema };
