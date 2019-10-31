import React from 'react'
import Thead from "./../components/Thead"
import Tbody from './../components/Tbody'
import { AppContext } from './../actions/reducers/App'

export default function Table() {
  const { loading, error, data } = React.useContext(AppContext)
  if (loading) return (<div>Now Loading...</div>)
  if (error) return (<div>Error! { error }</div>)

  return (
    <table>
      <Thead />
      <Tbody data={ data } />
    </table>
  )
}