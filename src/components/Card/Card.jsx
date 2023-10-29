import React from 'react'
import { server } from '../../utils/axios'
import { toast } from 'react-toastify'

export default function Card({sens, setData, data}) {

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
        <div className="card">
            <h2>{sens.name}</h2>
            <h3>{sens.desc}</h3>
            <p>Estado: {sens.state} - PIN: {sens.pin}</p>
            {sens.state > 1 ?
                <></>
            :
                <>
                    {
                        sens.state==0 ?
                        <button className='activar' onClick={() => activateHandler({sens,state:1})}>Activar</button>
                        :
                        <button className='desactivar' onClick={() => activateHandler({sens,state:0})}>Desactivar</button>
                    }
                </>
            }
        </div>
    )
}
