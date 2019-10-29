import React, { useCallback } from "react"

function App(props) {
  return (
    <>
      <h1>Hello, World!</h1>
      <input onChange={ props.onClickHandle }></input>
    </>
  )
}

function Container() {
  const onClickHandle = useCallback(() => {
    console.log("I am clicked!")
  }, [])
  return <App onClickHandle={ onClickHandle } />
}

export default Container
