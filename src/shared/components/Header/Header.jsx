import React from 'react'
import "./Header.css"
import Button from '../Button/Button'

const Header = () => {
  return (
    <div class="header">
            <div class="display">
                <span class='span-boton'><Button text="Acceder" type='medium'/></span>
                <span class="span-boton"><Button text="Registrarse" type='medium'/></span>  
            </div>
            <div>
                <h1 class='title'>ROCK THE BARRIO</h1>
            </div>



    </div>
  )
}

export default Header
