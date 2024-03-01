import { useState } from 'react'
import './App.css'
import Accordion from './components/Accordion'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Accordion/>
    </>
  )
}

export default App
