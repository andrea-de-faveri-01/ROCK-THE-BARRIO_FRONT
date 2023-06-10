import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import "./NuevoComentario.css";

import Button from "../Button/Button";
import { addComentario } from "../../redux/comentarios/comentarios.actions";

const NuevoComentario = ({ eventoId, user }) => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    const comentarioData = {
      title: data.titulo,
      content: data.contenido,
      value: data.valoracion,
      event: eventoId,
      user: user._id,
    };
    console.log(comentarioData);
    dispatch(addComentario(comentarioData));
    reset();
  };

  return (
    <div className="nuevo-comentario">
      <h2>Nuevo Comentario</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Título</label>
          <input type="text" {...register("titulo")} />
        </div>
        <div className="form-group">
          <label>Contenido</label>
          <textarea {...register("contenido")}></textarea>
        </div>
        <div className="form-group">
          <label>Valoración</label>
          <input type="number" {...register("valoracion")} />
        </div>
        <Button type="submit" text="Enviar" />
      </form>
    </div>
  );
};

export default NuevoComentario;
