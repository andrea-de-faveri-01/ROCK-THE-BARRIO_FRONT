import React, { useState } from "react";
import "./Comentario.css";
import { useDispatch, useSelector } from "react-redux";
import Button from "../Button/Button";
import {
  deleteComentario,
  editComentario,
} from "../../redux/comentarios/comentarios.actions";

const Comentario = ({ comentario }) => {
  const dispatch = useDispatch();

  const {user} = useSelector((state) => state.usuariosReducer);
  const [editMode, setEditMode] = useState(false);
  const [editedTitle, setEditedTitle] = useState(comentario.title);
  const [editedContent, setEditedContent] = useState(comentario.content);
  const [editedValue, setEditedValue] = useState(comentario.value);
  const handleEdit = () => {
    if (editMode) {
      const comentarioData = {
        title: editedTitle,
        content: editedContent,
        value: editedValue,
      };
      dispatch(editComentario(comentario._id, comentarioData));
      setEditMode(false);
      setEditedTitle(comentarioData.title);
      setEditedContent(comentarioData.content);
      setEditedValue(comentarioData.value);
    } else {
      setEditMode(true);
    }
  };

  const handleDelete = () => {
    //¿añadir modal de confirmación?

    dispatch(deleteComentario(comentario._id));
  };

  const idUsuarioLogueado = user ? user._id : null;
  const autorComentario = comentario.user._id;
  const puedeEditarYBorrar =
    idUsuarioLogueado === autorComentario || (user && user.role === 2);
  return (
    <div>
      <h2>COMENTARIO</h2>
      <div>
        {/* <p>{comentario._id}</p> */}
        <p>{comentario.user.username}</p>
        {comentario.user.avatar ? (
          <img src={comentario.user.avatar} alt="user avatar" />
        ) : (
          ""
        )}
        {/* <p>{comentario.event}</p> */}
        {editMode ? (
          <>
            <input
              type="text"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
            />
            <input
              type="text"
              value={editedContent}
              onChange={(e) => setEditedContent(e.target.value)}
            />
            <input
              type="text"
              value={editedValue}
              onChange={(e) => setEditedValue(e.target.value)}
            />
          </>
        ) : (
          <>
            <p>{comentario.title}</p>
            {comentario.value && <p>{comentario.value}</p>}
            {comentario.content && <p>{comentario.content}</p>}
          </>
        )}
        {puedeEditarYBorrar && (
          <>
            {editMode ? (
              <>
                <Button
                  type="edit"
                  text="Guardar"
                  onClick={() => handleEdit()}
                />
                <Button
                  type="secondary"
                  text="Cancelar"
                  onClick={() => handleCancelEdit()}
                />
              </>
            ) : (
              <Button type="edit" text="Editar" onClick={() => handleEdit()} />
            )}
            <Button
              type="delete"
              text="Borrar"
              onClick={() => handleDelete()}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Comentario;
