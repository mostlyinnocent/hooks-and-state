import LoginWindow from "./components/LoginWindow"
import MainLayout from "./components/MainLayout"
import InputField from "./components/InputField"
import CreateAccountButton from "./components/CreateAccountButton"
import Link from "./components/Link"
import { useAuth } from "./contexts/AuthContext"
import { useState } from "react"
import Toast from "./toasts/Toast"

function App() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const updateFormData = (field, value) =>{
    setFormData(prev => ({
      ...prev,
      [field] : value
    }))
  }

  const {createAccount} = useAuth()

  const [toast, setToast] = useState(null);

  const handleAccountCreation = () => {
    createAccount(formData);

    setToast("Account Creation Succesful!");

  setTimeout(() => {
      setToast(null)
    }, 3000);
  }
  

  return (
    <>
    {toast && <Toast message={toast} />}
      <MainLayout>
        <LoginWindow>
            <InputField value={formData.name} updateFormData={updateFormData} field={"name"} label={'Username'} placeholder={'Enter username'}/>
            <InputField value={formData.email} updateFormData={updateFormData} field={"email"} label={'Email'} placeholder={'example123@email.com'}/>
            <InputField value={formData.password} updateFormData={updateFormData} field={"password"} label={'Password'} placeholder={'Enter a strong password'}/>
            <div className="w-[450px] flex items-center justify-center mt-[20px]">
              <CreateAccountButton createAccount={() => handleAccountCreation()}></CreateAccountButton>
            </div>
            <Link></Link>
        </LoginWindow>
      </MainLayout>
    </>
  )
}

export default App
