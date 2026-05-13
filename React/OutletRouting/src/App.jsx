import './App.css'
import Dashboard from './Components/Dashboard'
import Home from './Components/Home'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Profile from './Profile'
import Setting from './Setting'
import Admin from './Components/Admin'
import Login from './Login'

function App() {

  return (
    <>
          <BrowserRouter>
            <Navbar/>

            <Routes>

                <Route path='/' element={<Home/>}  />
                {/* <Route path='/dashboard' element={<Dashboard/>}>
                   <Route path='profile' element={<Profile/>} />
                   <Route path='setting' element={<Setting/>} />
                </Route> */}

                <Route path='/login' element={<Login/>}/>
                <Route path='/admin' element={<Admin/>}/>
            </Routes>
          </BrowserRouter>
    </>
  )
}

export default App
