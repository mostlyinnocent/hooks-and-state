import { Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom"
import BackButton from "./components/BackButton"
import FormWidget from "./components/FormWidget"
import LeftWindow from "./components/LeftWindow"
import MainLayout from "./components/MainLayout"
import NextButton from "./components/NextButton"
import ProgressSetp from "./components/ProgressSetp"
import RightWIndow from "./components/RightWIndow"
import AddressInfoWindow from "./tabs/AddressInfoWindow"
import PersonalInfoWindow from "./tabs/PersonalInfoWindow"
import PreferencesWndow from "./tabs/PreferencesWndow"
import { useState } from "react"



function App() {

  const [currentTab, setCurrentTab] = useState(0);

  const tabs = [
    {label: "profile", component:<PersonalInfoWindow/>},
    {label: "address", component:<AddressInfoWindow/>},
    {label: "prefernces", component:<PreferencesWndow/>}
  ];

  const isFirst = currentTab === 0;
  const isLast = currentTab === tabs.length - 1;

  function nextTab() {
    if(!isLast){
    setCurrentTab(prev => prev + 1);
    }
  }

  function prevTab(){
    if(!isFirst){
    setCurrentTab(prev => prev - 1);
    console.log("Back Button Clicked");
    }
  }



  return (
    <>
      <MainLayout>
        <FormWidget>
          <LeftWindow>
            <ProgressSetp></ProgressSetp>
          </LeftWindow>
          <RightWIndow handlePrev={prevTab} handleNext={nextTab}>
            {tabs[currentTab].component}
          </RightWIndow>
        </FormWidget>
      </MainLayout>
    </>
  )
}

export default App
