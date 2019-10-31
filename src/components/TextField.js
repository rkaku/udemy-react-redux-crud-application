import React from 'react';
import TextField from '@material-ui/core/TextField';

export default function TextFields({
  error,
  helperText,
  multiline,
  label,
  placeholder,
  rows,
  handleChange,
  value
}) {
  console.dir(value)
  return (
    <TextField
      required
      error={ error }
      multiline={ multiline }
      rows={ rows }
      id="standard-full-width"
      label={ label }
      style={ { margin: 25 } }
      placeholder={ placeholder }
      helperText={ helperText }
      fullWidth
      margin="normal"
      onChange={ (event) => handleChange(event) }
      value={ value }
    />
  );
}