import React from 'react'

const ThemeContext = React.createContext({
  isDarkTheme: false,
  changeTheme: () => {},
  isActive: false,
  changeActiveMenu: () => {},
})

export default ThemeContext
