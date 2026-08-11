import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'

import { Home, About, Contact } from './pages'
import Layout from './layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
