import React from 'react'
import { Header } from '../header/Header'
import { Footer } from "../footer/Footer";


export const Home = () => {
  return (
    <div>
        
        <Header />
       <div className='home'>
          <div className='home__img'>
          <div className=''>
            <h1> <strong></strong> Su viaje de salud <br/>
             emocional <br/>
             empieza aqui</h1></div>  
           
           <div>
            <p><h2>Conoce nuestro
          profesionales con licencia</h2></p>
           </div>

           <div><p><h3>Todos se someten a un proceso seguro de verificación y acreditación, además de adherirse a estrictos códigos de ética y confidencialidad.</h3></p></div>
           </div>
           





       </div>
         <Footer/>
        </div>
  )
}
