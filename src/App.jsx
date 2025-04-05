import React from 'react'
import Navbar from './components/Navbar'
import {Routes,Route} from "react-router-dom"
import Home from './Pages/Home'
import ForgotPassword from './Pages/ForgotPassword'
function App() {
  return (
    <>
       <Navbar/>

       <Routes>

      <Route path='/' element={<Home/>}/>
       <Route path='/forgotPassword' element={<ForgotPassword/>}/>



       </Routes>
    </>
  )
}

export default App