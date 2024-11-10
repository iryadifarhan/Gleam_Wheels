import ReactDOM from 'react-dom/client';
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { useState, useEffect } from 'react';
import RoutesIndex from './routes';

export function App() {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 600)

  const handleResize = () => {
      setIsMobile(window.innerWidth <= 600)
  }

  useEffect(() => {
      window.addEventListener('resize', () => handleResize())
  })
  
  return (
      <>
        <RoutesIndex isMobile={isMobile} />
      </>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
