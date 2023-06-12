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
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };

  return (
    <div className="nuevo-comentario">
      <h2 className="h2NC">Danos tu opinión</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="displayFlex">
        <div className="form-group tit">
            <label>Título</label>
            <input type="text" {...register("titulo")} className="inputVal"/>
          </div>
          <div className="form-group">
            <label>Valoración</label>
            <input type="number" {...register("valoracion")} min={0} max={5} className="inputVal"/>
          </div>
        </div>

        <div className="form-group divContent">
          <label className="labelCont">Contenido</label>
          <textarea {...register("contenido")} className="content"></textarea>
        </div>
        <div className="divBoton">
        <Button type="medium" text="Enviar" />
        </div>

      </form>
    </div>
  );
};

export default NuevoComentario;
