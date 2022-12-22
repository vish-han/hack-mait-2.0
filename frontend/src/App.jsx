import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App bg-[#000000] h-[100vh]">

      <Navbar/>
      <div className="bg-black h-[300vh] bg-[url('./assets/tiles.svg')]">
      <Hero/>
      </div>
         </div>
  )
}

export default App
