import React, { useCallback, useMemo } from "react"

function User(props) {
  console.log(props)
  return (
    <>
      <div>{ props.user.name }</div>
      <div>{ props.user.age }</div>
    </>
  )
}

function App(props) {
  console.log(props)
  return (
    <>
      <h1>Hello, World!</h1>
      {
        props.users.map(user => (
          <User key={ user.id } user={ user } />
        ))
      }
      <input onChange={ props.onClickHandle }></input>
    </>
  )
}

function Container() {
  const users = useMemo(() => {
    return [
      {
        id: 1,
        name: "Taro",
        age: 10
      },
      {
        id: 2,
        name: "Naomi",
        age: 5
      }
    ]
  }, [])
  const onClickHandle = useCallback(() => { console.log("I am clicked!") }, [])
  return <App
    users={ users }
    onClickHandle={ onClickHandle } />
}

export default Container
