import BTheme from './Theme'
import React from 'react'

export const ThemeContext = React.createContext()

const MyThemeContext = ({children}) => {
    return (
        <ThemeContext.Provider value={BTheme}>
            {children}
        </ThemeContext.Provider>
    )
}

export default MyThemeContext

