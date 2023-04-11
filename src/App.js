import {Route, Switch, Redirect} from 'react-router-dom'
import {Component} from 'react'

import Login from './components/Login'
import Home from './components/Home'
import SideLeft from './components/SideLeft'
import './App.css'

import ThemeContext from './Context/ThemeContext'

// Replace your code here
class App extends Component {
  state = {
    isDarkTheme: false,
    isActive: false,
    save: false,
  }

  onChangeThemeStatus = () => {
    this.setState(prevState => ({
      isDarkTheme: !prevState.isDarkTheme,
    }))
  }

  changeActiveMenu = value => {
    this.setState(prev => ({
      isActive: !prev.isActive,
    }))
  }

  render() {
    const {isDarkTheme, isActive} = this.state

    return (
      <ThemeContext.Provider
        value={{
          isDarkTheme,
          isActive,
          onChangeThemeStatus: this.onChangeThemeStatus,
          changeActiveMenu: this.changeActiveMenu,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Home} />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
