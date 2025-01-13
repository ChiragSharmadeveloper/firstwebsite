import React from 'react'
import "./App.css"

const Card = ({title,image}) => {
  return (
    <>
      <div className="main">
        <img src={image}
         id="footo"/>
        <h2>{title}</h2>
      </div>
    </>
  )
}

export default Card
