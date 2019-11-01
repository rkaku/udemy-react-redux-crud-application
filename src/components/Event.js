import React from 'react'
import Thead from './Thead'
import Tbody from './Tbody'
export default function Container () {

  function Event () {
    return (
      <table>
        <Thead />
        <Tbody />
      </table>
    )
  }

  return (
    <Event />
  )
}
