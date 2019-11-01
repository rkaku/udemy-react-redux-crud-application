import React from 'react'

export default function Container () {

  function Thead () {
    return (
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Body</th>
        </tr>
      </thead>
    )
  }

  return (
    <Thead />
  )
}
