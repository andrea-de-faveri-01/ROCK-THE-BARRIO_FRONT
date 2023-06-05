import React from 'react'
import "./Header.css"
import Navbar from '../Navbar/Navbar'

const Header = () => {
  return (
    <div className="header">
            <div>
              <Navbar/>
            </div>
            <div>
                <h1 className='title'>ROCK THE BARRIO</h1>
            </div>



    </div>
  )
}

export default Header
