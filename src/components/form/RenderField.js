import React from 'react'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Input from '@material-ui/core/Input'
import FormHelperText from '@material-ui/core/FormHelperText'


export default function RenderField ( {
  input, label, type, meta: { touched, error }
} ) {

  const [ value, setValue ] = React.useState()
  const handleChange = React.useCallback( ( event ) => {
    setValue( event.target.value )
  }, [] )

  return (
    <FormControl>
      <InputLabel htmlFor={ label }>{ label }</InputLabel>
      <Input
        { ...input }
        id={ label }
        placeholder={ label }
        type={ type }
        value={ value }
        onChange={ handleChange }
        aria-describedby={ label }
      />
      <FormHelperText id={ `${ label }-text` }>
        { touched && ( error && <span>{ error }</span> ) }
      </FormHelperText>
    </FormControl>
  )
}