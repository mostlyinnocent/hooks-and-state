import React, { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext()

const initialAuthState = {
  isAuthenticated: false,
  user: null
}

export function AuthContextProvider({children}){

  const [authState, setAuthState] = useState(()=>{
    const saved = localStorage.getItem('authState');
    return saved ? JSON.parse(saved) : initialAuthState;
  });

  useEffect(()=>{
    localStorage.setItem("authState", JSON.stringify(authState));
  },[authState]);

  const [users, setUser] = useState(()=>{
    const saved = localStorage.getItem('users');
    return saved ? JSON.parse(saved) : [];
  })

  useEffect(()=>{
    localStorage.setItem('users', JSON.stringify(users))
  },[users]);

  function signUp(formData){
    const newUser = {
      name: formData.name,
      email: formData.email,
      password: formData.password
    }

    setUser(prev=>[...prev, newUser]);

    setAuthState(
      {
        isAuthenticated: true,
        users:{
          name: newUser.name,
          email: newUser.email
        }
      }
    )
  }

  function logOut(){
    setAuthState({
      isAuthenticated:false,
      user: null
    })
  }

return (

  <AuthContext.Provider value={{authState, users, signUp, logOut}}>
    {children}
  </AuthContext.Provider>

)

}

export function useAuthContext(){
  return useContext(AuthContext);
}