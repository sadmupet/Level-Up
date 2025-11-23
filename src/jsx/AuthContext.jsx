import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider ({ children }) {

    const [ isLoggedIn, setIsLoggedIn ] = useState(() =>{
        return !!localStorage.getItem('user');
    });

    const login = () => {
        setIsLoggedIn(true)
    };

    const logout = () => {
        setIsLoggedIn(false)

        localStorage.removeItem ('user')
    };

    const value = {
        isLoggedIn,
        login,
        logout,
    };

    return (
        <AuthContext.Provider value = {value}>
            {children}
        </AuthContext.Provider>
    )
    
}

export const useAuth = () => {
    return useContext(AuthContext);
};