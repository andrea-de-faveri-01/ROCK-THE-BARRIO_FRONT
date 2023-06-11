import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addEvento } from "../../redux/eventos/eventos.actions";
import "./FormularioCrearEvento.css"
import { useNavigate } from 'react-router-dom';
import SubirImagen from "../../components/SubirImagen/SubirImagen";
import Button from "../Button/Button";



const FormularioCrearEvento = () => {
  const { user } = useSelector((state) => state.usuariosReducer);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const [imageFile, setImageFile] = useState();

  console.log(user);
  
 return (
    <div className="card">
      <h2>Crear Evento</h2>
      <form onSubmit={handleSubmit((datos) => dispatch(addEvento(datos, navigate, {user:user._id})))}>
        <div className="div-input">
          <label>Título</label>
          <input  className="input" {...register("title", { required: true })} />
          {errors.title && <span>Título es requerido</span>}
        </div>
        <div className="div-input">
          <label>Artista/s</label>
          <input  className="input" {...register("subtitle", { required: true })} />
          {errors.subtitle && <span>Subtítulo es requerido</span>}
        </div>
        <div className="div-input">
          <label>Información</label>
          <textarea {...register("content", { required: true })} />
          {errors.content && <span>Contenido es requerido</span>}
        </div>

        <div className="div-input">
          <label>Lugar</label>
          <input  className="input" {...register("site", { required: true })} />
          {errors.site && <span>Sitio es requerido</span>}
        </div>
        <div className="div-input">
          <label>Precio</label>
          <input  className="input" type="number" {...register("price", { required: true })} />
          {errors.price && <span>Precio es requerido</span>}
        </div>
        <div className="div-input">
          <label>Fecha de Inicio</label>
          <input  className="input" type="date" {...register("date_start", { required: true })} />
          {errors.date_start && <span>Fecha de Inicio es requerida</span>}
        </div>
        <div className="div-input">
          <label>Fecha de Fin</label>
          <input  className="input" type="date" {...register("date_end")} />
        </div>
        <div className="div-input">
          <label>URL</label>
          <input  className="input" {...register("url")} />
        </div>
        <div className="div-input">
          <label>Imagen</label>
          <SubirImagen
              register={register}
              funcion={(e) => setImageFile(URL.createObjectURL(e.target.files[0]))}
            />
            {imageFile && <img className="imagen" src={imageFile} />}
        </div>
        <div className="div-input">
          <label>Género</label>
          <input  className="input" {...register("genre")} />
        </div>
        <div className="margin-boton">
          <Button text="Crear evento" type="large"/>
        </div>
      </form>
    </div>
  );
};

export default FormularioCrearEvento;
