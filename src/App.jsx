import { useEffect, useState } from 'react'
import './App.css'
import { server } from './utils/axios'
import { toast } from 'react-toastify'

function App() {
  const [data, setData] = useState([])

  useEffect(()=>{
    server.get("/api/sensor")
    .then(res => setData(res.data.response))
  },[])

  const activateHandler = async ({sens, state}) =>{
    await toast.promise(
      server.put("/api/sensor/" + sens._id, {state: state})
      .then(res => {
        if(res.status==200){
          const aux = [...data]
          aux[data.indexOf(sens)].state = state
          setData(aux)
        }
      }),{
        pending:"Cambiando Estado...",
        success:"Nuevo Estado Aplicado",
        error:"Error al Cambiar el Estado."
      }
    )
  }

  return (
    <>
      <div>
          <img src="/esp32.png" className="logo" alt="Esp 32 Icono" />
      </div>
      <h1>ESP-32</h1>
      <div className="container">
        {
          data ? data.map(sens => {
            return (
              <div key={sens._id} className="card">
                <h2>{sens.name}</h2>
                <h3>{sens.desc}</h3>
                <p>Estado: {sens.state}</p>
                {
                  sens.state==0 ?
                  <button className='activar' onClick={() => activateHandler({sens,state:1})}>Activar</button>
                  :
                  <button className='desactivar' onClick={() => activateHandler({sens,state:0})}>Desactivar</button>
                }
              </div>
            )
          })
          :
          <h2>Cargando...</h2>
        }
      </div>
      <p className="read-the-docs">
        Pruebas básicas realizadas con React/Node
      </p>
    </>
  )
}

export default App
