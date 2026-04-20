import React, { useState } from 'react'
import LoginWindow from "./components/LoginWindow"
import MainLayout from "./components/MainLayout"
import CreateAccountForm from './components/CreateAccountForm'
import Toast from './toasts/Toast'
import WelcomeWindow from './components/WelcomeWindow'
import { useAuthContext } from './contexts/AuthContext'
import LogoutButton from './components/LogoutButton'
import LoginForm from './components/LoginForm'
import { Navigate, Route, Routes } from 'react-router-dom'

function App() {
  const [toast, setToast] = useState(null);

  const {authState} = useAuthContext();
  
  return (
    <>
      {toast && <Toast message={toast}></Toast>}
      <MainLayout>
        <LoginWindow>
          {
            authState.isAuthenticated
            ? <WelcomeWindow setToast={setToast}></WelcomeWindow>
            : (
              <Routes>
                <Route path='/' element={<Navigate to={'/login'}></Navigate>}/>
                <Route path='/signup' element={<CreateAccountForm setToast={setToast}></CreateAccountForm>}></Route>
                <Route path='/login' element={<LoginForm setToast={setToast}></LoginForm>}></Route>
                <Route path='*' element={<Navigate to={"/login"}/>}></Route>
              </Routes>
            )
          }
        </LoginWindow>
      </MainLayout>
    </>
  )
}

export default App
