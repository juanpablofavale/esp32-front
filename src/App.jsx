import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
          <img src="/esp32.png" className="logo" alt="Esp 32 Icono" />
      </div>
      <h1>ESP-32</h1>
      <div className="card">
      </div>
      <p className="read-the-docs">
        Pruebas básicas realizadas con React/Node
      </p>
    </>
  )
}

export default App
