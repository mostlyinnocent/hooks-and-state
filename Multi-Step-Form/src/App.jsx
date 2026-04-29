import BackButton from "./components/BackButton"
import FormWidget from "./components/FormWidget"
import LeftWindow from "./components/LeftWindow"
import MainLayout from "./components/MainLayout"
import NextButton from "./components/NextButton"
import ProgressSetp from "./components/ProgressSetp"
import RightWIndow from "./components/RightWIndow"
import AddressInfoWindow from "./pages/AddressInfoWindow"
import PersonalInfoWindow from "./pages/PersonalInfoWindow"


function App() {

  return (
    <>
      <MainLayout>
        <FormWidget>
          <LeftWindow>
            <ProgressSetp></ProgressSetp>
          </LeftWindow>
          <RightWIndow>
            
            {/* <PersonalInfoWindow></PersonalInfoWindow> */}
            <AddressInfoWindow></AddressInfoWindow>

          </RightWIndow>
        </FormWidget>
      </MainLayout>
    </>
  )
}

export default App
