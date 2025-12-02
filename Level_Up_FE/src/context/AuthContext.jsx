import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider ({ children }) {

    const [ user, setUser ] = useState(() =>{
        const storedUser = localStorage.getItem('user');
        return storedUser ? JSON.parse(storedUser) : null;
    });

    const isLoggedIn = !!user;

    const login = (userData) => {
        localStorage.setItem('user', JSON.stringify(userData));
        setUser(userData)
    }

    const logout = () => {
        localStorage.removeItem('user');
        setUser(null);
    }

    const value = {
        user,
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