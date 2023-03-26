import React, { useContext } from 'react'
import ThemeContext from '../global/contexts/ThemeContext';
import DarkThemeIcon from './DarkThemeIcon'
import LightThemeIcon from './LightThemeIcon'

function ThemeIcon() {
    const Theme = useContext(ThemeContext);
    const { themeValue, changeTheme } = Theme;

    return (
        <>
            <div className={`${themeValue === 'light' && 'hidden'}`}
                onClick={() => {
                    changeTheme('light')
                }}
                title='Toggle theme'
            >
                <LightThemeIcon />
            </div>
            <div className={`${themeValue == 'dark' && 'hidden'}`}
                onClick={() => {
                    changeTheme('dark')
                }}
                title='Toggle theme'
            >
                <DarkThemeIcon />
            </div>
        </>
    )
}

export default ThemeIcon