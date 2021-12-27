import { createContext, useState } from "react";

export const CatContext = createContext()

const CatContextProvider = ({ children }) => {
    const [theme, setTheme] = useState({
        isLight: true,
        light: {
            color: '#333',
            background: 'beige'
        },
        dark: {
            color: '#999',
            background: '#333'
        }
    })

    const toggleTheme = () => {
        setTheme({
            ...theme,
            isLight: !theme.isLight
        })
    }

    const ThemeContextData = {
        theme,
        toggleTheme
    }

    return (
        <CatContext.Provider value={ ThemeContextData }>
            { children }
        </CatContext.Provider>
    )
}

export default CatContextProvider