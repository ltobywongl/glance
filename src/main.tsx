import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { NextUIProvider } from '@nextui-org/react'
import './index.css'
import MainRouter from './router'
import NavBar from './components/common/nav'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NextUIProvider>
      <NavBar />
      <MainRouter />
    </NextUIProvider>
  </StrictMode>,
)
