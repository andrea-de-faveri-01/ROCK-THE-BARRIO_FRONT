import React from "react";
import { useForm } from "react-hook-form";
import "./FormularioLogin.css";
import { login } from "../../redux/usuarios/usuarios.actions";
import Button from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

const FormularioLogin = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const { error } = useSelector(state => state.usuariosReducer);

  const navigate = useNavigate();

  return (
    <div className="card">
      <div>
        <h1>Iniciar Sesión</h1>
      </div>
      <form onSubmit={handleSubmit((datos) => dispatch(login(datos, navigate)))}>
        <div className="div-input">
          <label>
          <input {...register("username")} placeholder="Usuario"/></label>
        </div>
        <div className="div-input">
          <label>
          <input {...register("password")} type="password" placeholder="Contraseña"/></label>
        </div>
        <div className="margin-boton">
        <Button text="Login" type="large"/>
        {error && <p>{error}</p>} 
        </div>
      </form>
    </div>
  );
};

export default FormularioLogin;
