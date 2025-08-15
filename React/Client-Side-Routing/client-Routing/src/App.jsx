import './App.css'
import { React, Suspense, lazy } from  'react';
import { BrowserRouter, Route, Routes, useNavigate} from 'react-router-dom'
//The lazy loading doesn't load the full code for the route until you navigate to it.
//It also keeps the constant part and then hands you over the code for the route.
const Landing = lazy(() => import('./components/Landing')); 
const DashBoard = lazy(() => import('./components/DashBoard'));

function App() {

  return (
    //The suspense API let's you display something while the page is getting data from backend.
    <>
      <BrowserRouter> 
      <AppBar/>
        <Routes>
          <Route path ="/dashboard" element={<Suspense fallback={"loading..."}><DashBoard /> </Suspense>}/> 
          <Route path="/" element={<Suspense fallback={"loading..."}><Landing /> </Suspense>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

function AppBar() {
  const navigate = useNavigate();//Let's you route internally and prevent's the hard reload.
  return(
    <div>
        <button onClick={() => {
          navigate("/")
        }}>Landing</button>

        <button onClick={() => {
           navigate("dashboard")
        }}>Dashboard</button>
    </div>
  )
}

export default App
