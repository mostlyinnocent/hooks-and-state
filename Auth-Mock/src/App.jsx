import React, { useState } from 'react'
import LoginWindow from "./components/LoginWindow"
import MainLayout from "./components/MainLayout"
import CreateAccountForm from './components/CreateAccountForm'
import Toast from './toasts/Toast'

function App() {
  const [toast, setToast] = useState(null)
  
  return (
    <>
      {toast && <Toast message={toast}></Toast>}
      <MainLayout>
        <LoginWindow>
          <CreateAccountForm setToast={setToast}></CreateAccountForm>
        </LoginWindow>
      </MainLayout>
    </>
  )
}

export default App
