import React from 'react'

//import { Header } from './components/header/Header'
import { Home } from './components/home/Home'
import { Footer} from './components/footer/Footer'
// import Navbar from './components/header/Navbar/Navbar'
import Hede from './components/home/pages/Hede.jsx'
export const App = () => {
  return (
       <div className='contenedor'>
           {/* <Header/> */}
<Hede/>
          {/* < Navbar/> */}
          
           <Home/>
           <Footer />
      </div>
  
  )
}
