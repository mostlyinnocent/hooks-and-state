import React, { createContext, useContext, useEffect, useState } from "react";

const initAuthState = {
  isAuthenticated: false,
  user: null
}


export const Context = createContext();

export function AuthContextProvider( {children} ) {

  const [authState, setAuthState] = useState(()=>{
    const saved = localStorage.getItem('authState');
    return saved ? JSON.parse(saved) : initAuthState;
  });

  useEffect(() => {
    localStorage.setItem('authState', JSON.stringify(authState));
  },[authState])

  const [users, setUsers] = useState(()=>{
    const savedUser = localStorage.getItem('users');
    return savedUser ? JSON.parse(savedUser) : [];
  });

  useEffect(()=>{
    localStorage.setItem('users', JSON.stringify(users));
  },[users]);

  function createAccount(formData){
    const newUser = {
      name: formData.name,
      email: formData.email,
      password: formData.password
    }
    setUsers(prev => [...prev, newUser]);
    setAuthState({
      isAuthenticated: true,
      user: {
        name: newUser.name,
        email: newUser.email
      }
    })
  };

  return (
    <Context.Provider value={{authState, users, createAccount}}>
      {children}
    </Context.Provider>
  )

}

export function useAuth(){
  return useContext(Context);
}