import BackButton from "./components/BackButton"
import FormWidget from "./components/FormWidget"
import LeftWindow from "./components/LeftWindow"
import MainLayout from "./components/MainLayout"
import NextButton from "./components/NextButton"
import PersonalInfoWindow from "./components/PersonalInfoWindow"
import ProgressSetp from "./components/ProgressSetp"
import RightWIndow from "./components/RightWIndow"


function App() {

  return (
    <>
      <MainLayout>
        <FormWidget>
          <LeftWindow>
            <ProgressSetp></ProgressSetp>
          </LeftWindow>
          <RightWIndow>
            <PersonalInfoWindow></PersonalInfoWindow>
          </RightWIndow>
        </FormWidget>
      </MainLayout>
    </>
  )
}

export default App
