import React, { useState } from "react";
import "./FormularioRegistro.css";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../redux/usuarios/usuarios.actions";
import Button from "../Button/Button";
import SubirImagen from "../SubirImagen/SubirImagen";

const FormularioRegistro = () => {
  const dispatch = useDispatch();
  const [imageFile, setImageFile] = useState();

  const { register, handleSubmit } = useForm();
  const { error } = useSelector((state) => state.usuariosReducer);
  const navigate = useNavigate();

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  return (
    <div className="cardReg">

      <h1>DATE DE ALTA</h1>
      <form
        onSubmit={handleSubmit((datos) =>
          dispatch(registerUser(datos, navigate))
        )}
      >
        <div className="div-inputReg">
          <label className="margin-label">E-mail</label>
          <input
            {...register("email")}
            type="email"
            name="email"
            id="email"
            className="inputReg"
          />
        </div>
        <div className="div-inputReg">
          <label className="margin-labelReg">Contraseña</label>
          <input {...register("password")} type="password" className="inputReg" />
        </div>
        <div className="div-inputReg">
          <label className="margin-label">Usuario</label>
          <input {...register("username")} className="inputReg" />
        </div>
        <div className="div-inputReg">
          <label className="margin-label">Fecha de nacimiento</label>
          <input {...register("birthday")} type="date" className="fechaReg" />
        </div>
        <div className="div-inputReg">
          <label>Imagen</label>
          <SubirImagen
            register={register}
            funcion={(e) =>
              setImageFile(URL.createObjectURL(e.target.files[0]))
            }
          />
          {imageFile && <img className="imagenReg" src={imageFile} />}
        </div>
        <p className="error">{error && error}</p>
        <div className="margin-botonReg">
          <Button text="Registrarse" type="large" />
        </div>
      </form>
    </div>
  );
};

export default FormularioRegistro;
