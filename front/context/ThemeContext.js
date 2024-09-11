import React, { createContext, useContext, useState } from 'react'

const themeContext = createContext()

function ThemeContext({children}) {
    const [theme, settheme] = useState('white');
    const changeTheme =  (theme) => {
        settheme(theme === "white" ? "black" : "white")
    }
  return (
    <themeContext.Provider value={{ theme, changeTheme }}>
        {children}
    </themeContext.Provider>
  )
}

export default ThemeContext

export const useThemeContext = () => useContext(themeContext)
