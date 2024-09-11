import React, { useState } from 'react'
import ThemeContext from "../context/ThemeContext"
function ChangeMode() {

    const [theme, settheme] = useState(ThemeContext);
  return (
    <button
    onClick={settheme}
    style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#333' : '#fff' }}
  >
    Toggle Theme
  </button>
  )
}

export default ChangeMode