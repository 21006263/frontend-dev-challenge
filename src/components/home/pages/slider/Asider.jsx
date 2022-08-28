import React from 'react'

const Asider = ( {title , imageSource}) => {
 
  return(
    <div className="">
      <div className="">
      <img src={imageSource} alt="dd" className='fff'/>
      </div>
     <div className="item1">
      <h4 className='fff'>{title}</h4>
    </div>
    </div>
  )
}

export default Asider;

