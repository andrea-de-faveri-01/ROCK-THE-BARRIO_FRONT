import React from 'react'
import "./Navbar.css"
import Button from '../Button/Button'

const Navbar = (top, right) => {
  return (
    <div className='{top right}'>
                <span><Button text="Acceder" type='medium'/></span>
                <span><Button text="Registrarse" type='medium'/></span>  
    </div>
  )
}

export default Navbar
