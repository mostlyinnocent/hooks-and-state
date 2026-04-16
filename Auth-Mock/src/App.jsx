import LoginWindow from "./components/LoginWindow"
import MainLayout from "./components/MainLayout"
import InputField from "./components/InputField"
import CreateAccountButton from "./components/CreateAccountButton"
import Link from "./components/Link"
import { useState } from "react"
import { useAuthContext } from "./contexts/AuthContext"
import Toast from "./toasts/Toast"



function App() {

  const { signUp } = useAuthContext();

  const [toast, setToast] = useState(null)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  })
  
  function handleFormData(field, value){
    setFormData(prev => ({
      ...prev,
      [field] : value
    }))
  }

  function validateForm(formData){
    if(!formData.name.trim()) return "Username Required";
    if(!formData.email.trim()) return "Email required";
    if(!formData.password.trim()) return "Password required"

    return null;
  }

  function showToast(message){

    setToast(message)

    setTimeout(()=>{
      setToast(null);
    },3000);
    
  }

  function createAccount(){

    const error = validateForm(formData);

    if(error){
      showToast(error);
      return
    }

    signUp(formData);
    showToast("Your account has been created.")
  }
  
  return (
    <>
    {toast && <Toast message={toast}></Toast>}
      <MainLayout>
        <LoginWindow>
            <InputField value={formData.name} field={"name"} handleFormData={handleFormData} label={'Username'} placeholder={'Enter username'}/>
            <InputField value={formData.email} field={"email"} handleFormData={handleFormData} label={'Email'} placeholder={'example123@email.com'}/>
            <InputField value={formData.password} field={"password"} handleFormData={handleFormData} label={'Password'} placeholder={'Enter a strong password'}/>
            <div className="w-[450px] flex items-center justify-center mt-[20px]">
              <CreateAccountButton createAccount={createAccount}></CreateAccountButton>
            </div>
            <Link></Link>
        </LoginWindow>
      </MainLayout>
    </>
  )
}

export default App
