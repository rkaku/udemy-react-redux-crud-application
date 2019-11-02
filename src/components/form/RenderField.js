import React from 'react'

export default function RenderField ( {
  input, label, type, meta: { touched, error }
} ) {
  return (
    <div>
      <label>{ label }</label>
      <div>
        <input { ...input } placeholder={ label } type={ type } />
        { touched && ( error && <span>{ error }</span> ) }
      </div>
    </div>
  )
}
