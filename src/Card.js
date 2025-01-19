import React from 'react'
import "./App.css"

const Card = ({title1,image}) => {
  return (
    <>
    <style>
    </style>
      <div className="main">
        <img src={image}
         id="footo"/>
        <h2>{title1}</h2>
      </div>
    </>
  )
}

export default Card
