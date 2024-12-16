import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Home from './Components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './Components/MainLayout'
import Details from './Components/Details'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout/>}>

          <Route index element={<Home />} />
          <Route path = 'details/:code' element={<Details/>}/>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
