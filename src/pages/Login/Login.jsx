import React from 'react'
import FormularioLogin from '../../components/FormularioLogin/FormularioLogin'
import Button from '../../components/Button/Button'
import "./Login.css"

const Login = () => {
  return (
    <>
    <div className='display'>
      <div>
        <FormularioLogin className="tamaño"/>
        <Button text="Login" type="large"/>
      </div>
    </div>
    </>
  )
}

export default Login
