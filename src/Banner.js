import React from 'react'
import './App.css'

const Banner = ({title , urlimage}) => {
  return (
    <><div className='banner'>
      <div>
        <h2>{title}</h2>
        <p>lorem eiugdg  rhgiuvbsdiuf wfbeiufbuibgu iuwfbeiubuibfuidbwicb eufbuiedbwiuebwucbe  ebeiubfewuic eufbweuibfwuib
        </p>
      </div>
      <div>
        <img src={urlimage} id="foto2"/>
      </div>
      </div>
    </>
  )
}

export default Banner
