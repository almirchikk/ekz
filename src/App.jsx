import { useState } from 'react'
import Header from './components/Header/Header'
import Modal from './components/Modal/Modal'
import Slider from './components/Slider/Slider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Modal />
      <Header />
      <Slider />
    </>
  )
}

export default App
