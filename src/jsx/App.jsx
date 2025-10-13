// import { useState } from 'react'
// import viteLogo from '/vite.svg'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import FirstPage from '../pages/FirstPage.jsx'
import Register from '../pages/Register.jsx'

function App() {

  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
    
  )
}

export default App
