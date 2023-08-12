import React from 'react'
import video from '../../video/video.mp4'
import srcimg from '../../img/pexels-lumn-604969.jpg'
import './presentacion.css'

function Presentacion() {
  return (
    <>
    <div className='homeContenedor'>
        {/* <div className='homeBg'>
            <video autoPlay loop muted className='videoBg' src={video} type='video/mp4'></video>
        </div> */}
        <div className='homeBg'>
            <img className='imgBg' src={srcimg}/>
        </div>
        <div className='homeContent'>
            <h1 className='home-h1'>Cocina Italiana</h1>
            <p className='home-p1'>Nueva Apertura de Restaurante</p>
            <p className='home-p'>2023</p>
            <div className='btnWrap'>
                <button className='btnHome'>
                    Conoce Mas
                </button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Presentacion