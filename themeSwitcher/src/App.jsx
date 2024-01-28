import { useState, useEffect } from 'react'
import './App.css'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'
import {ThemeProvider} from '../src/contexts/theme'
function App() {

  const [themeMode, setThemeMode] = useState("light")
  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  useEffect(() => {
    // remove the dark or light classes from classList
    document.querySelector('html').classList.remove("light", "dark")
    // add current theme from theme state
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])

  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeBtn/>
          </div>
          <div className="w-full max-w-sm mx-auto">
              <Card/>
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}
export default App
