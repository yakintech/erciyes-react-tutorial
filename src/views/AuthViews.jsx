import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../routersample/Login'
import Register from '../routersample/Register'

function AuthViews() {
  return (<>
  <Routes>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/register' element={<Register/>}></Route>
  </Routes>
  </>)
}

export default AuthViews