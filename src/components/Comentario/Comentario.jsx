import React, { useState } from "react";
import "./Comentario.css";
import { useDispatch, useSelector } from "react-redux";
import Button from "../Button/Button";
import {
  deleteComentario,
  editComentario,
} from "../../redux/comentarios/comentarios.actions";
import { Avatar } from "@fluentui/react-components";
import { FluentProvider, teamsLightTheme } from '@fluentui/react-components';
import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
} from "@fluentui/react-components";
import { Star28Filled } from "@fluentui/react-icons";

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
      
      // setEditedTitle(comentarioData.title);
      // setEditedContent(comentarioData.content);
      // setEditedValue(comentarioData.value);
      setEditMode(false);
    } else {
      setEditMode(true);
    }
  };

  const handleDelete = () => {
    //¿añadir modal de confirmación?

    dispatch(deleteComentario(comentario._id));
  };
  const handleCancelEdit = () => {
    setEditMode(false);
    setEditedTitle(comentario.title);
    setEditedContent(comentario.content);
    setEditedValue(comentario.value);
  
  }
  const idUsuarioLogueado = user ? user._id : null;
  const autorComentario = comentario.user._id;
  const puedeEditarYBorrar =
    idUsuarioLogueado === autorComentario || (user && user.role === 2);

    const renderStars = (value) => {
      const stars = [];
      for (let i = 1; i <= value; i++) {
        stars.push(
          <Star28Filled color="yellow"
            key={i}
            className={i <= value ? 'star active' : 'star'}
          />
        );
      }
      return stars;
    };


  return (
    <div>
    <FluentProvider theme={teamsLightTheme}>
      <div>
       
        <div>
        
        <Avatar 
        color="colorful"
        size={64}
        name={comentario.user.username}
    image={{
      src: comentario.user.avatar,
    }}/>
    <p>{comentario.user.username}</p>
    
    
    </div>
        {/* {comentario.user.avatar ? (
          <img src={comentario.user.avatar} alt="user avatar" />
        ) : (
          ""
        )} */}
        
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
              type="number"
              value={editedValue}
              onChange={(e) => setEditedValue(e.target.value)}
            />
          </>
        ) : (
          <>
          <Accordion collapsible>
          <AccordionItem value="1">
          <AccordionHeader>{comentario.title}</AccordionHeader>
          <AccordionPanel>
          {comentario.content && <p>{comentario.content}</p>}
            {comentario.value && (
            <div>
            <p>{renderStars(comentario.value)}</p>
            </div>
        )}
            
            </AccordionPanel>
            </AccordionItem>
            </Accordion>
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
      </FluentProvider>
    </div>
  );
};

export default Comentario;
