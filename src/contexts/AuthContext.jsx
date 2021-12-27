import { createContext, useState } from "react";

export const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
    const [auth, setAuth] = useState(false)

    const toggleAuth  = () => {
        setAuth(!auth)
    }

    const AuthContextData = {
        auth,
        toggleAuth
    }


    return (
        <AuthContext.Provider value={ AuthContextData }>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthContextProvider