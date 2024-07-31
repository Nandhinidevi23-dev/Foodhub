import React from 'react'
import { ThemeProvider } from './ThemeProvider'
import ThemeButton from './ThemeButton'

export const UseContext = () => {
  return (
    <div>
        <ThemeProvider>
            <ThemeButton/>
        </ThemeProvider>
    </div>
  )
}
