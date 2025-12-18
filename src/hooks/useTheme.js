import { useState, useEffect } from 'react'

export function useTheme() {
  const [theme, setTheme] = useState(() => {

    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light'
    }
    return 'light'
  })

  useEffect(() => {
    const root = document.documentElement


    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }


    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }

  return {
    theme,
    toggleTheme,
    isDark: theme === 'dark'
  }
}
