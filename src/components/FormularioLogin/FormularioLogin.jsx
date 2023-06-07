// import React from 'react';
// import { useForm } from 'react-hook-form';
// import Button from '../Button/Button';
// import "./FormularioLogin.css"

// const FormularioLogin = () => {
//   const { register, handleSubmit, formState: { errors } } = useForm();

//   const onSubmit = (data) => {
//     // Hacer algo con los datos de inicio de sesión, como enviar una solicitud al servidor
//     console.log('Email:', data.email);
//     console.log('Contraseña:', data.password);
//   };

//   return (

//     <form onSubmit={handleSubmit(onSubmit)}>
//       <div>
//         <label htmlFor="email">
//         <input className='input'
//           type="email"
//           id="email"
//           placeholder='E-mail'
//           {...register('email', { required: true })}
//         /></label>
//         {errors.email && <span>Email es requerido</span>}
//       </div>
//       <div>
//         <label htmlFor="password">
//         <input className='input'
//           type="password"
//           id="password"
//           placeholder='"Contraseña'
//           {...register('password', { required: true })}
//         /></label>
//         {errors.password && <span>Contraseña es requerida</span>}
//       </div>
//     </form>
//   );
// };

// export default FormularioLogin;

import React from "react";
import { useForm } from "react-hook-form";
import "./FormularioLogin.css";
import { login } from "../../redux/usuarios/usuarios.actions";
import Button from "../Button/Button";

const FormularioLogin = () => {
  const { register, handleSubmit } = useForm();

  return (
    <div>
      <form onSubmit={handleSubmit(login)}>
        <div>
          <label>username</label>
          <input {...register("username")} />
        </div>
        <div>
          <label>password</label>
          <input {...register("password")} type="password" />
        </div>
        <Button text="Login" type="large" />
      </form>
    </div>
  );
};

export default FormularioLogin;
