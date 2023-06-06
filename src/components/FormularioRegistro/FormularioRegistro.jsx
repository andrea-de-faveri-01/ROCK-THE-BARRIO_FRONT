import React from 'react';
import { useForm } from 'react-hook-form';


const FormularioRegistro = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Email:</label>
        <input type="email" {...register('email', { required: true, 
            // pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i  
            })} />
        {errors.email && <span>Email inválido</span>}
      </div>

      <div>
        <label>Contraseña:</label>
        <input
          type="password"
          {...register('password', {
            required: true,
            // pattern: passwordRegex,
          })}
        />
        {errors.password && (
          <span>
            La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un símbolo
          </span>
        )}
      </div>

      <div>
        <label>Repetir Contraseña:</label>
        <input
          type="password"
          {...register('confirmPassword', {
            required: true,
            validate: (value) => value === password.current || "Las contraseñas no coinciden",
          })}
        />
        {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}
      </div>

      <label>Username:</label>
      <input type="text" {...register('username', {required:true})} />

      <label>Birthday:</label>
      <input type="date" {...register('birthday')} />

      <label>Avatar:</label>
        <input
          type="file"
          accept=".png, .jpg, .jpeg"
          {...register('avatar')}
        />
        {errors.avatar && <span>Archivo inválido. Se permiten formatos PNG y JPG.</span>}
      
    </form>
  );
};

export default FormularioRegistro;
