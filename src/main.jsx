import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './jsx/App.jsx'
import { AuthProvider } from './jsx/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <AuthProvider>
      <App />
    </AuthProvider>
  
  </StrictMode>,
)
