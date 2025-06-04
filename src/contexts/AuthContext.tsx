import React, { createContext, useContext, useState, ReactNode } from 'react';
import { UserObject, UserLoginObject } from '../types/users';

interface AuthContextType {
    user: UserObject | null;
    token: string | null; 
    setLoginData: (data: UserLoginObject | undefined) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<UserObject | null>(null);
    const [token, setToken] = useState<string | null>(null);

    const setLoginData = (data: UserLoginObject | undefined) => {
        if(data === undefined) return;
        setUser(data.usuario);
        setToken(data.token);
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, token, setLoginData, logout }}>
        {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) throw new Error('useAuth must be used within an AuthProvider');
    return context;
};