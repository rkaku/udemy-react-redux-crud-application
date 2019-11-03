const ErrorMessages = {
  required: 'Required',
  length: 'Must be 20 characters or less'
}

export const required = ( value ) => value ? undefined : ErrorMessages.required
export const length = ( value ) => value.length <= 20 ? undefined : ErrorMessages.required