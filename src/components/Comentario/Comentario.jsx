import React from "react";
import "./Comentario.css";

const Comentario = ({ comentario }) => {
  return (
    <div>
      <h2>COMENTARIO</h2>
      <div>
        {/* <p>{comentario._id}</p> */}
        <p>{comentario.user}</p>
        {/* <p>{comentario.event}</p> */}
        <p>{comentario.title}</p>
        {comentario.value ?( 
        <p>{comentario.value}</p>):""}
        {comentario.content ?( 
        <p>{comentario.content}</p>):""}
      </div>
    </div>
  );
};

export default Comentario;
