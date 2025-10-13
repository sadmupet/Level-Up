import { useState } from 'react'
import viteLogo from '/vite.svg'
import FirstpageH from './FirstpageH.jsx'
import FirstpageContent from './FirstpageContent.jsx'
import FirstpageFooter from './FirstpageFooter.jsx'

function App() {

  return (
    <>
      <header>
        <FirstpageH />
      </header>
      <div>
        <FirstpageContent />
      </div>
      <footer>
        <FirstpageFooter />
      </footer>
    </>
  )
}

export default App
