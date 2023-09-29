'use client'

import { useTheme } from '@/context/ThemeProvider'
import React from 'react'

const Theme = () => {
  const { setMode } = useTheme()

  return (
    <div
      onClick={() => {
        console.log('Test')

        setMode('light')
      }}
    >
      Theme
    </div>
  )
}

export default Theme
