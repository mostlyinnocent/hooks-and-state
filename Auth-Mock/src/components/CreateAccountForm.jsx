
import InputField from "./InputField"
import CreateAccountButton from "./CreateAccountButton"
import Link from "./Link"
import { useState } from "react"
import { useAuthContext } from "../contexts/AuthContext"

function CreateAccountForm({ setToast }) {

  const { signUp } = useAuthContext();

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
    setWelcomeWindow()
  }

  function showWelcomeWindow(){
    setWelcomeWindow(true);
  }


  return (
    <form className='flex h-[100%] w-[50%] p-[20px] flex flex-col items-start justify-center gap-4'>
      <h1 className='font-bold text-5xl mb-[20px]'>Sign Up</h1>
      <InputField value={formData.name} field={"name"} handleFormData={handleFormData} label={'Username'} placeholder={'Enter username'}/>
      <InputField value={formData.email} field={"email"} handleFormData={handleFormData} label={'Email'} placeholder={'example123@email.com'}/>
      <InputField value={formData.password} field={"password"} handleFormData={handleFormData} label={'Password'} placeholder={'Enter a strong password'}/>
      <div className="w-[450px] flex items-center justify-center mt-[20px]">
        <CreateAccountButton createAccount={createAccount}></CreateAccountButton>
      </div>
      <Link></Link>
    </form>
  )
}

export default CreateAccountForm