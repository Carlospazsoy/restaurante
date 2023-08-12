
import React from 'react'
import './conocenos.css'
import img from '../../img/pexels-kristina-paukshtite-1146760.jpg'

function Conocenos() {
  
  return (
    <>
      <div className='abtContenedor' >
        <div className='wrapper'>
          <div className='row'>
            <div className='column1'>
              <div className='text-wrap'>
                <h1 className='topLine'>Conocenos!!</h1>
                <p className='heading'>restaurante familiar con un toque de sabor</p>
                <p className='subtitle'>Utilizando los ingredientes locales podemos darte el platillo de la mejor calidad</p>
                <div className='btnWrapC'>
                  <button className='btnHome'>Reserva</button>
                </div>
              </div>
            </div>
            <div className='column2'>
             <div className='imgWrapC'>
             <img className='imgConocenos' src={img}/>
             </div>
              
            </div>
          </div>
        </div>

      </div>
      </>
  )
}

export default Conocenos
