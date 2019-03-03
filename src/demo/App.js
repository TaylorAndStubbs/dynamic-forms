import React from 'react';
import AutoForm from '../lib/components/AutoForm';

const TEST_DATA = {
  title: 'Find the value of your vehicle',
  subtitle: 'Fill out the following fields',
  fields: [
    {
      inputName: 'modelYear',
      type: 'text',
      required: true,
      placeholder: 'Year'
    },
    {
      inputName: 'make',
      type: 'text',
      required: true,
      placeholder: 'Make'
    },
    {
      inputName: 'model',
      type: 'text',
      required: true,
      placeholder: 'Model',
      title: 'Model'
    },
    {
      inputName: 'vehicleType',
      type: 'select',
      options: [
        { value: 'car', name: 'Car' },
        { value: 'boat', name: 'Boat' },
        { value: 'something_else', name: 'Something Else' }
      ],
      required: true,
      placeholder: 'Vehicle Type'
    },
    {
      inputName: 'vin',
      type: 'text',
      required: true,
      placeholder: 'VIN'
    },
    {
      inputName: 'modelDate',
      type: 'date',
      required: true,
      requiredString: 'Please Enter a Date',
      placeholder: 'Pick a Date'
    },
    {
      inputName: 'name',
      type: 'text',
      required: true,
      requiredString: 'Please Enter a Name',
      placeholder: 'Name'
    },
    {
      inputName: 'value',
      type: 'currency',
      required: true,
      placeholder: 'Value'
    }
  ],
  submitButtonText: 'Submit Vehicle'
};

const TEST_STYLES = {
  text: {
    background: 'blue'
  },
  currency: {
    background: 'green'
  },
  select: {
    background: 'red'
  }
};

const App = () => (
  <div>
    <AutoForm
      schema={TEST_DATA}
      onSubmit={values => console.log(values)}
      inputTitleClass={'title'}
      inputErrorClass={'error'}
      inputStyles={TEST_STYLES}
      submitStyle={{ width: '100%' }}
    />
  </div>
);

export default App;
