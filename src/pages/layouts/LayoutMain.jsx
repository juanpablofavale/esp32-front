import React from 'react'

const LayoutMain = ({children}) => {
  return (
    <>
      <header>
        <div className='logo'>
          <img src="/esp32.png" className="logo-img" alt="Esp 32 Icono" />
          <h1>Prueba de Sensores</h1>
        </div>
      </header>
      <main>
        {children}
      </main>
      <footer></footer>
    </>
  )
}

export default LayoutMain