import React from 'react'
import "./Navbar.css"
import Button from '../Button/Button'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
                <Link to="/login"><span><Button text="Acceder" type='medium'/></span></Link>
                <Link to="date-de-alta"><span><Button text="Registrarse" type='medium'/></span></Link>
    </div>
  )
}

export default Navbar
