import React, { useState } from 'react'
import LoginWindow from "./components/LoginWindow"
import MainLayout from "./components/MainLayout"
import CreateAccountForm from './components/CreateAccountForm'
import Toast from './toasts/Toast'
import WelcomeWindow from './components/WelcomeWindow'
import { useAuthContext } from './contexts/AuthContext'
import LogoutButton from './components/LogoutButton'

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
            ? <WelcomeWindow>
            </WelcomeWindow>
            : <CreateAccountForm setToast={setToast}></CreateAccountForm>
          }
        </LoginWindow>
      </MainLayout>
    </>
  )
}

export default App
