import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { NextUIProvider } from '@nextui-org/react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css'
import MainRouter from './router'
import NavBar from './components/common/nav'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NextUIProvider>
      <NavBar />
      <MainRouter />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        closeOnClick
        draggable
      />
    </NextUIProvider>
  </StrictMode>,
)
