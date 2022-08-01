import React from 'react'
import { Header } from '../header/Header'
import foto from "../../img/photo 01.jpg"

export const Home = () => {
  return (
    <div>
        
        <Header />
       
        <img src={foto} alt="foto__menu" />

        </div>
  )
}
