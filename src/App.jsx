import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './Layouts/MainLayout'
import Mainpage from './Pages/MainPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route element={<MainLayout/>}>
        <Route path='/' element={<Mainpage/>}/>

      </Route>
    </Routes>
  )
}

export default App
