import React from 'react'
import LandingPage from './Pages/LandingPage.jsx'

import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () => {
  return (
<>
<BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}>
          
        </Route>
      </Routes>
    </BrowserRouter>
</>
  )
}

export default App
