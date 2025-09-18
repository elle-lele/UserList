(() => {
  'use strict'

  const storedTheme = localStorage.getItem('theme')
  const defaultTheme = storedTheme ? storedTheme : 'light'
  document.documentElement.setAttribute('data-bs-theme', defaultTheme)

  const themeToggleButtons = document.querySelectorAll('[data-bs-theme-value]')
  themeToggleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const mode = btn.getAttribute('data-bs-theme-value')
      document.documentElement.setAttribute('data-bs-theme', mode)
      localStorage.setItem('theme', mode)
    })
  })
})()
