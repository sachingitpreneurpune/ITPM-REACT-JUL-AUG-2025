import './App.css'
import DemoForm from './Components/DemoForm'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Home'
import Login from './Components/Login'
import Dashboard from './Components/Dashboard'
import Navbar from './Components/Navbar'
import ProtectedRoute from './Components/ProtectedRoute'

function App() {

  return (
    <>
       {/* <DemoForm/> */}


       <BrowserRouter>
          <Navbar/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={
          <ProtectedRoute>
            <Dashboard/>
          </ProtectedRoute>
        }/>
       </Routes>

       </BrowserRouter>
    </>
  )
}

export default App
