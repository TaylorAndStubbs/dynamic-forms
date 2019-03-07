# Dynamic Forms

## Getting Started

Install

`npm install dynamic-forms`

or

`yarn install dynamic-forms`

```
import AutoForm from 'dynamic-forms';
```

## Available Input Types

- `select`
- `text`
- `integer`
- `date`
- `currency`

## Common Props

Common props you may want to specify include:

- `schema` - Array of JSON objects defining all input fields in the form
- `inputTitleClass` - Class name for title display
- `inputErrorClass` - Class name for error display
- `inputStyles` - JSON Object with styles for input types
- `submitStyle` - Style object for submit button
- `onSubmit` - function

## Example Schema

```
const MY_SCHEMA = {
  fields: [
    {
      inputName: 'model',
      type: 'text',
      required: true,
      requiredString: 'Please enter a model',
      placeholder: 'Model',
      title: 'Model'
    },
    {
      inputName: 'vehicleType',
      type: 'select',
      options: [
        { value: 'car', name: 'Car' },
        { value: 'boat', name: 'Boat' },
        { value: 'plane', name: 'Airplane' }
      ],
      required: true,
      placeholder: 'Vehicle Type'
    },
    {
      inputName: 'modelDate',
      type: 'date',
      required: true,
      requiredString: 'Please Enter a Date',
      placeholder: 'Pick a Date'
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


```

## Example Input Styles

```
const INPUT_STYLES = {
  text: {
    background: 'aqua'
  },
  currency: {
    background: 'aquamarine'
  },
  select: {
    background: 'lavender'
  },
  date: {
    background: 'lightcoral'
  }
};

```

## Demo app

Is located inside `src/demo` directory

## Testing

`npm run test` or `yarn run test`

## Build library

`npm run build` or `yarn run build`

Produces production version of library under the `build` folder.
