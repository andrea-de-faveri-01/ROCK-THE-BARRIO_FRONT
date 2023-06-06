import React from "react";
import "./Evento.css";
import { Link } from "react-router-dom";

const Evento = ({ evento }) => {
  return (
    <div>
      <h2>
        <Link to={{ pathname: `/${evento._id}`, state: { evento } }}>EVENTO</Link>
      </h2>
      <div>
        <p>{evento._id}</p>
        <p>{evento.title}</p>
        <p>{evento.subtitle}</p>
        <p>{evento.content}</p>
        <p>{evento.user_creator}</p>
        <p>{evento.site}</p>
        <p>{evento.date_start}</p>
        <p>{evento.date_end}</p>
        <p>{evento.url}</p>
        <img src={evento.image}/>
        <p>{evento.genre}</p>
      </div>
    </div>
  );
};

export default Evento;
