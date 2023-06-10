// import React from 'react';
// import { useForm } from 'react-hook-form';


// const FormularioRegistro = () => {
//   const { register, handleSubmit, formState: { errors } } = useForm();

//   const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

//   const onSubmit = (data) => {
//     console.log(data);
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <div>
//         <label>Email:</label>
//         <input type="email" {...register('email', { required: true, 
//             // pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i  
//             })} />
//         {errors.email && <span>Email inválido</span>}
//       </div>

//       <div>
//         <label>Contraseña:</label>
//         <input
//           type="password"
//           {...register('password', {
//             required: true,
//             // pattern: passwordRegex,
//           })}
//         />
//         {errors.password && (
//           <span>
//             La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un símbolo
//           </span>
//         )}
//       </div>

//       <div>
//         <label>Repetir Contraseña:</label>
//         <input
//           type="password"
//           {...register('confirmPassword', {
//             required: true,
//             validate: (value) => value === password.current || "Las contraseñas no coinciden",
//           })}
//         />
//         {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}
//       </div>

//       <label>Username:</label>
//       <input type="text" {...register('username', {required:true})} />

//       <label>Birthday:</label>
//       <input type="date" {...register('birthday')} />

//       <label>Avatar:</label>
//         <input
//           type="file"
//           accept=".png, .jpg, .jpeg"
//           {...register('avatar')}
//         />
//         {errors.avatar && <span>Archivo inválido. Se permiten formatos PNG y JPG.</span>}
      
//     </form>
//   );
// };

// export default FormularioRegistro;


import React from "react";
import "./FormularioRegistro.css";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../redux/usuarios/usuarios.actions";
import Button from "../Button/Button";

const FormularioRegistro = () => {
const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const { error } = useSelector(state => state.usuariosReducer);
  const navigate = useNavigate();

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  

  return (
    <div>
      <h3>DATE DE ALTA</h3>
      <form onSubmit={handleSubmit((datos) => dispatch(registerUser(datos, navigate)))}>
    <div>
    <label>email</label>
          <input {...register("email")} type="email" name="email" id="email"/>      
    </div>
    <div>
          <label>password</label>
          <input {...register("password")} type="password"/>
        </div>
        <div>
          <label>username</label>
          <input {...register("username")}/>
        </div>
        <div>
          <label>birthday</label>
          <input {...register("birthday")} type="date"/>
        </div>
        <div>
          <label>avatar</label>
          <input {...register("avatar")} />
        </div>
        <p className="error">{ error && error}</p>
        <Button text="Registro" type="large"/>
      </form>
   </div>
  )

};

export default FormularioRegistro;