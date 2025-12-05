import React from 'react'
import InputPage from './components/InputPage'
import { Routes, Route } from 'react-router-dom'
import Success from './components/Success'
import Fail from './components/Fail'
import Cancel from './components/Cancel'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/"  element={<InputPage/>}/>
        <Route path="/success" element ={<Success />} />
        <Route path="/fail" element={<Fail/>}/>
        <Route path='/cancel' element={<Cancel />} />
      </Routes>
    </div>
  )
}

export default App
