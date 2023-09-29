'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

interface ThemeContextType {
  mode: string
  setMode: (mode: string) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState('')

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setMode('dark')
    } else {
      setMode('light')
    }
  }, [])

  useEffect(() => {
    if (mode === 'dark') {
      document.documentElement.classList.add('light')
    } else {
      document.documentElement.classList.add('dark')
    }
  }, [mode])

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider

export const useTheme = () => {
  const context = useContext(ThemeContext)

  if (context === undefined) {
    throw new Error('useTheme must be used within the ThemeProvider')
  }

  return context
}
