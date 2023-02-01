
import React, { useState } from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Card from './components/Card'
import Login from './components/Login'

import Profile from './components/Profile'
import Registration from './components/Registration'
import Home from './Home'
import { logincontext } from './context/Logincontext'

export default function App() {
  const [state,setState]=useState({})
  return (
    <logincontext.Provider value={{state,setState}}>
 <BrowserRouter>
 <Routes> 
  <Route path="/home" element={<Home/>}></Route>
  <Route path="/Card/:id" element={<Card/>}></Route>
  <Route path="/" element={<Login/>}></Route>
  <Route path="/reg" element={<Registration/>}></Route>
  <Route path="/profile" element={<Profile/>}></Route>

 </Routes>
 </BrowserRouter>
 </logincontext.Provider>
  )
}

