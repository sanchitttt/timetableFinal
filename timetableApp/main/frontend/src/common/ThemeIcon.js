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
                onClick={() =>{
                    changeTheme('light')
                }}
            >
                <LightThemeIcon />
            </div>
            <div className={`${themeValue == 'dark' && 'hidden'}`}
                onClick={() =>{
                    changeTheme('dark')
                }}
            >
                <DarkThemeIcon />
            </div>
        </>
    )
}

export default ThemeIcon