import React from 'react'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { server } from '../../utils/axios'
import Card from '../../components/Card/Card'

const Home = () => {
    const [data, setData] = useState([])

    useEffect(()=>{
        toast.promise(
            server.get("/api/sensor")
            .then(res => setData(res.data.response)),
            {
                pending: "Cargando Información de Sensores",
                error: "Error al Cargar Información de Sensores"
            })
    },[])

    return (
        <>
            <div className="container">
                {
                    data.length ? data.map(sens => <Card key={sens._id} sens={sens} data={data} setData={setData} />)
                    : <h2>Cargando Datos...</h2>
                }
            </div>
        </>
    )
}

export default Home