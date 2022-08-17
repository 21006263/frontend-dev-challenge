import React from 'react'
import logo from '../../img/Group.svg'
import Separator from '../../img/Separator.svg'

export const Footer = () => {
  return (

    <div className='footer'>
           
        
      
           
            <div className='container__main'>
                <div className='p1'>
                <img src={logo} alt=""  className=''/>
                </div>
                <div className='p1'>
                <p className=''>La Mente es Maravillosa is a property of Grupo MContigo© 2012 – 2020. All rights reserved.
                   Los contenidos de esta publicación se redactan solo con fines informativos. En ningún momento pueden servir para facilitar diagnósticos o sustituir la labor de un profesional. Le recomendamos que contacte con su especialista de confianza.</p>
                   
                </div>
                
            </div>

            <div className='social'>
              <img src={Separator} alt=""  className='largo'/>
          
          </div>

               <br />

            <div className='container__main'>
                <div className='col'>
                    <p>Política de Cookies</p>
                </div>
                <div className='col'>
                    <p>Política de Privacidad</p>
                </div>
                <div className='col'>
                    <p>Términos y condiciones de uso</p>
                </div>
                <div className='col'>
                    <p>Cláusula Informativa de Consentimiento</p>
                </div>
               
               
            </div>




        </div>
);
}
