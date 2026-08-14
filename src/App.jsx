import { useEffect, useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { Home, About, Contact, SignUp, Login } from './pages'
import { Add, History, Spend } from './components'
import Layout from './layout'
import authservice from './appwrite/auth'
import { login, logout } from './context/authslice'

function App() {
  const [count, setCount] = useState(0)
  const dispatch = useDispatch()

  useEffect(() => {
    const checkUser = async () => {

      const user = await authservice.getuser()
      if (user) {
        dispatch(login(user))
      } else {
        dispatch(logout())
      }
    }

    checkUser()

  }, [dispatch])

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path='signup' element={<SignUp />} />
          <Route path='login' element={<Login />} />
          <Route path='add' element={<Add />} />
          <Route path='history' element={<History />} />
          <Route path='spend' element={<Spend />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
