import React from 'react'
// import PropTypes from 'prop-types'
function Card({ title , imageSource}) {
 
  return (
    <div className="contatiner">
      <div className="container__item1">
      <img src={imageSource} alt="dd" className='container_img card-img-top'/>
      </div>
     <div className="container__item1">
      <h4 className=''>{title}</h4>
    </div>
    </div>
  )
}


// Card.propTypes = {
//   title: PropTypes.string.isRequired,
//   text: PropTypes.string,
//   url: PropTypes.string,
//   imageSource: PropTypes.string
  
// }

export default Card