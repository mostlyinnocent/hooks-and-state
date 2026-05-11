import { Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom"
import BackButton from "./components/BackButton"
import FormWidget from "./components/FormWidget"
import LeftWindow from "./components/LeftWindow"
import MainLayout from "./components/MainLayout"
import NextButton from "./components/NextButton"
import ProgressSetp from "./components/ProgressSetp"
import RightWIndow from "./components/RightWIndow"
import AddressInfoWindow from "./pages/AddressInfoWindow"
import PersonalInfoWindow from "./pages/PersonalInfoWindow"
import PreferencesWndow from "./pages/PreferencesWndow"


function App() {

  const navigate = useNavigate()
  const location = useLocation()

  const steps = [
    {
      path: "/personal",
      element: <PersonalInfoWindow/>,
      title:"Personal"
    },
    {
      path: "/address",
      element: <AddressInfoWindow/>,
      title:"Address"
    },
    {
      path:"/preferences",
      element:<PreferencesWndow/>,
      title:"Preferences",
    },
  ]

  const currentIndex = steps.findIndex(
    (step) => step.path === location.pathname
  )

  const isFirst = currentIndex === 0;
  const isLast = currentIndex === steps.length - 1;

  const handleNext = () => {
    if(!isLast){
      navigate(steps[currentIndex + 1].path);
    }
  }

  const handlePrev = () => {
    if(!isFirst){
      navigate(steps[currentIndex - 1].path);
    }
  }

  return (
    <>
      <MainLayout>
        <FormWidget>
          <LeftWindow>
            <ProgressSetp></ProgressSetp>
          </LeftWindow>
          <RightWIndow
            handleNext={handleNext}
            handlePrev={handlePrev}
            isLast={isLast}
            isFirst={isFirst}
            
          >
            

            <Routes>

              <Route
              path="/"
              element={
                <Navigate
                  to="/personal"
                  replace
                />
              }
              />
            
              {steps.map((step) => (
                <Route
                  key={step.path}
                  path={step.path}
                  element={step.element}
                />
              ))}

            </Routes>
            

          </RightWIndow>
        </FormWidget>
      </MainLayout>
    </>
  )
}

export default App
