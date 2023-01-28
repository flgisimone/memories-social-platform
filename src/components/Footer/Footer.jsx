import React from 'react'
import "./Footer.scss"

const Footer = () => {

    const getYear = new Date()
    const dateYear = getYear.getFullYear()
    console.log(dateYear)

  return (
    <div className="containerFooter" id="contatti">
        <div className="author">
            <span>Giulio Simone Floresta <i className="fa-regular fa-copyright"></i> {dateYear}</span>
            <span className='codeDev'>Sviluppato con <i className="fa-brands fa-react"></i> React</span>
        </div>
    </div>
  )
}

export default Footer