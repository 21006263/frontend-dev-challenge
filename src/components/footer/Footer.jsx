import React from 'react'
import logo from '../../img/Group.svg'
import Separator from '../../img/Separator.svg'

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="container__detalle">
          <img src={logo} alt="" className="" />
        </div>
        <div className="container__detalle">
          <p className=''>
            La Mente es Maravillosa is a property of Grupo MContigo© 2012 –
            2020. All rights reserved. Los contenidos de esta publicación se
            redactan solo con fines informativos. En ningún momento pueden
            servir para facilitar diagnósticos o sustituir la labor de un
            profesional. Le recomendamos que contacte con su especialista de
            confianza.
          </p>
        </div>
      </div>

      <div >
        <img className="separador" src={Separator} alt=""  />
      </div>

      <div className="container_politicas">
        <div className="container__informacion">
          <p>Política de Cookies</p>
        </div>
        <div className="container__informacion">
          <p>Política de Privacidad</p>
        </div>
        <div className="container__informacion">
          <p>Términos y condiciones de uso</p>
        </div>
        <div className="container__informacion">
          <p>Cláusula Informativa de Consentimiento</p>
        </div>
      </div>
    </footer>
  );
}
