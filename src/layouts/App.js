import React from 'react'
import { NavLink, Route, Switch } from "react-router-dom"
import { makeStyles } from '@material-ui/styles'
import styled from 'styled-components'
import './../styles/App.scss'
import EventsIndex from './../pages/EventsIndex'
import EventShow from './../pages/EventShow'
import EventNew from './../pages/EventNew'
import EventEdit from './../pages/EventEdit.js'


export default function Container () {
  const classes = useStyles()

  function App () {
    return (
      <Wrapper>
        <Header>
          <Ul>
            <Li>
              <NavLink
                exact
                activeClassName={ classes.activeLinkStyle }
                className={ classes.appLinkStyle }
                to="/">Home</NavLink>
            </Li>
            <Li>
              <NavLink
                activeClassName={ classes.activeLinkStyle }
                className={ classes.appLinkStyle }
                to="/events">Index</NavLink>
            </Li>
            <Li>
              <NavLink
                activeClassName={ classes.activeLinkStyle }
                className={ classes.appLinkStyle }
                to="/event/new">New</NavLink>
            </Li>
          </Ul>
        </Header>
        <Switch>
          <Route path="/event/edit/:id" component={ EventEdit } />
          <Route path="/event/new" component={ EventNew } />
          <Route path="/event/:id" component={ EventShow } />
          <Route path="/events" component={ EventsIndex } />
        </Switch>
      </Wrapper>
    )
  }

  return (
    <App />
  )
}


const useStyles = makeStyles( {
  appLinkStyle: {
    color: '#09d3ac',
    textDecoration: 'none',
  },
  activeLinkStyle: {
    color: 'darkorange'
  }
} )

const Wrapper = styled.div`
  text-align: center;
  background-color: #282c34;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: calc(14px + 2vmin);
  color: white;
  min-height: 100vh;
`

const Header = styled.div`
  background-color: #282c34;
  min-height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(14px + 2vmin);
  color: white;
  margin-bottom: 0;
`

const Ul = styled.ul`
  display: flex;
  padding-left: 0;
`

const Li = styled.li`
  list-style-type: none;
  width: 200px;
  padding: 5px;
  border: 1px solid gray;
`