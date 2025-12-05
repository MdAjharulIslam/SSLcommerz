import React from 'react'
import InputPage from './components/InputPage'
import { Routes, Route } from 'react-router-dom'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/"  element={<InputPage/>}/>
      </Routes>
    </div>
  )
}

export default App
