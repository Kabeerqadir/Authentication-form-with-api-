import React, { createContext, useState,useEffect } from "react";
import {  read_cookie} from 'sfcookies'
export const AuthContext = createContext();

function AuthContextProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [auth, setAuth] = useState('hello')
    // const [git, setGit] = useState('hello')
    // const [loginArr, setLoginArr] = useState([]);
    console.log( read_cookie('isLoggedIn'))
    let cookie_data = read_cookie('isLoggedIn')
    console.log(cookie_data)
    useEffect(()=>{
        if(cookie_data === true){
            setIsLoggedIn(true)
        }
        // console.log(cookie_data);
    },[])    
    let API_URL = 'https://comfortable-gold-belt.cyclic.app';
    return (
        <>
            <AuthContext.Provider value={{
                auth, setAuth,
                isLoggedIn, setIsLoggedIn,
                API_URL,
                cookie_data
            }}>
                {children}
            </AuthContext.Provider>
        </>
    )
}
export default AuthContextProvider;