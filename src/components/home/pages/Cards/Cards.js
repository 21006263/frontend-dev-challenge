import React from 'react'
import Card from './Card'
import image1 from "../../../../img/image1.png"
import image2 from "../../../../img/image2.png"
import image3 from "../../../../img/image3.png"
import image4 from "../../../../img/image4.png"


const cards = [
{
  id: 1,
  title: 'carro 1',
  image: image1,
 
},

{
  id: 2,
  title: 'carro 2',
  image: image2,
 
},

{
  id: 3,
  title: 'carro 3',
  image: image3 ,
 
},
{
  id: 4,
  title: 'carro 4',
  image: image4 ,

}

]

function Cards() {
  return (
    <div className="">
        <div className="container__row">
            { 
            cards.map(card => (
            <div className="container__row" key={card.id}>
            <Card title={card.title} imageSource={card.image}  />
            </div>
            ))  
          }
        </div>    
    </div>
  )
}

export default Cards