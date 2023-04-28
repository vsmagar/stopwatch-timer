import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './componant/NavBar'

import Timer from './pages/Timer'

export default function App() {
  return (<>
    <BrowserRouter>
    <NavBar/>
     <Routes>
      <Route path='/' element={<Timer/>}></Route>
      
     </Routes>
    </BrowserRouter>
  </>
  )
}
