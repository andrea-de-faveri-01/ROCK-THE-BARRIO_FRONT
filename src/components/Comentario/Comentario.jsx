import React from "react";
import "./Comentario.css";

const Comentario = ({ comentario }) => {
  return (
    <div>
      <h2>TITLE</h2>
      <div>
        <p>{comentario._id}</p>
        {/* <p>{comentario.user}</p> */}
        {/* <p>{comentario.event}</p> */}
        {/* <p>{comentario.title}</p> */}
        {/* <p>{comentario.content}</p> */}
        {/* <p>{comentario.value}</p> */}
      </div>
    </div>
  );
};

export default Comentario;
