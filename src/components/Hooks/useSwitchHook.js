import React, { useEffect, useState } from 'react'

const useSwitchHook = () => {
    const preferDarkQuery = "(prefer-color-scheme: dark)"
    const [mode, setMode] = useState('')

    useEffect(() => {
        const mediaQuery = window.matchMedia(preferDarkQuery)
        const usePreference = window.localStorage.getItem('theme')

        const handleChangeFunction = () => {
            if (usePreference) {
                let check = usePreference === 'dark' ? 'dark' : 'light'
                setMode(check)
                if (check === 'dark') {
                    document.documentElement.classList.add('dark')
                } else {
                    document.documentElement.classList.remove('dark')
                }
            } else {
                let check = mediaQuery.matches ? 'dark' : 'light'
                setMode(check)
                if (check === 'dark') {
                    document.documentElement.classList.add('dark')
                } else {
                    document.documentElement.classList.remove('dark')
                }
            }
        }

        mediaQuery.addEventListener('change', handleChangeFunction)
        return () => mediaQuery.removeEventListener('change', handleChangeFunction)
    }, [])

    useEffect(() => {
        if (mode === 'dark') {
            window.localStorage.setItem('theme', 'dark')
            document.documentElement.classList.add('dark')
        } else {
            window.localStorage.setItem('theme', 'light')
            document.documentElement.classList.remove('dark')
        }
    }, [mode])

    return [mode, setMode]

}

export default useSwitchHook
