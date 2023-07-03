import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Pages from './Pages'
import Form from './Form';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Pages/>}/>
        <Route path='/form' element={<Form/>}/>
      </Routes>
    </BrowserRouter>
  )
}


export default App


