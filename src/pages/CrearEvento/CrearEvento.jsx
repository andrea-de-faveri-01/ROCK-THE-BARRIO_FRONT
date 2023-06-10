import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addEvento } from "../../redux/eventos/eventos.actions";

import { useNavigate } from 'react-router-dom';
import SubirImagen from "../../components/SubirImagen/SubirImagen";


const CrearEvento = () => {
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
    <div>
      <h2>Crear Evento</h2>
      <form onSubmit={handleSubmit((datos) => dispatch(addEvento(datos, navigate, {user:user._id})))}>
        <div>
          <label>Título</label>
          <input {...register("title", { required: true })} />
          {errors.title && <span>Título es requerido</span>}
        </div>
        <div>
          <label>Artista/s</label>
          <input {...register("subtitle", { required: true })} />
          {errors.subtitle && <span>Subtítulo es requerido</span>}
        </div>
        <div>
          <label>Información</label>
          <textarea {...register("content", { required: true })} />
          {errors.content && <span>Contenido es requerido</span>}
        </div>

        <div>
          <label>Lugar</label>
          <input {...register("site", { required: true })} />
          {errors.site && <span>Sitio es requerido</span>}
        </div>
        <div>
          <label>Precio</label>
          <input type="number" {...register("price", { required: true })} />
          {errors.price && <span>Precio es requerido</span>}
        </div>
        <div>
          <label>Fecha de Inicio</label>
          <input type="date" {...register("date_start", { required: true })} />
          {errors.date_start && <span>Fecha de Inicio es requerida</span>}
        </div>
        <div>
          <label>Fecha de Fin</label>
          <input type="date" {...register("date_end")} />
        </div>
        <div>
          <label>URL</label>
          <input {...register("url")} />
        </div>
        <div>
          <label>Imagen</label>
          <SubirImagen
              register={register}
              funcion={(e) => setImageFile(URL.createObjectURL(e.target.files[0]))}
            />
            {imageFile && <img className="imagen" src={imageFile} />}
        </div>
        <div>
          <label>Género</label>
          <input {...register("genre")} />
        </div>
        <button type="submit">Crear Evento</button>
      </form>
    </div>
  );
};

export default CrearEvento;
