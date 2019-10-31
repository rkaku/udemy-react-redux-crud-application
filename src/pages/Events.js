import React from 'react'
import Thead from "./Thead";
import Tbody from './Tbody'
import { AppContext } from '../actions/reducers/App';

const Table = () => {
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

export default Table