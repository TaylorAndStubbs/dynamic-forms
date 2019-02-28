import React from 'react';
import AutoForm from '../lib/components/AutoForm';

const TEST_DATA = {
  "title": "Find the value of your vehicle",
  "subtitle": "Fill out the following fields",
  "fields": [
    {
      "inputName": "modelYear",
      "type": "text",
      "required": true,
      "placeholder": "Year"
    },
    {
      "inputName": "make",
      "type": "text",
      "required": true,
      "placeholder": "Make"
    },
    {
      "inputName": "model",
      "type": "text",
      "required": true,
      "placeholder": "Model"
    },
    {
      "inputName": "vehicleType",
      "type": "select",
      "options": [
        "Car",
        "Boat",
        "Something else"
      ],
      "required": true,
      "placeholder": "Vehicle Type"
    },
    {
      "inputName": "vin",
      "type": "text",
      "required": true,
      "placeholder": "VIN"
    },
    {
      "inputName": "name",
      "type": "text",
      "required": true,
      "placeholder": "Name"
    },
    {
      "inputName": "value",
      "type": "currency",
      "required": true,
      "placeholder": "Value"
    }
  ],
  "submitButtonText": "Submit Vehicle"
};

const App = () => (
  <div>
    <AutoForm
      schema={TEST_DATA}
      onSubmit={values => console.log(values)}
      inputTitleClass={"title"}
      inputErrorClass={"error"}
    />
  </div>
);

export default App;
