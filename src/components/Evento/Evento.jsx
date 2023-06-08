import React from "react";
import "./Evento.css";
import { Link } from "react-router-dom";


const Evento = ({ evento }) => {


  const opciones = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
  const fechaStart = evento.date_start ? new Date(evento.date_start).toLocaleDateString('es-ES', opciones) : '';
  const fechaEnd = evento.date_end ? new Date(evento.date_end).toLocaleDateString('es-ES', opciones) : '';


  return (
    <div>
      <div>
        <Link to={{ pathname: `/${evento._id}`, state: { evento } }}><h1>{evento.title}</h1></Link>
        <p>{evento.subtitle}</p>
        <p>{evento.content}</p>
        <p>{evento.user_creator}</p>
        <p>{evento.site}</p>
        <p>{fechaStart}</p>
        <p>{fechaEnd}</p>
        <Link to={{ pathname: `/${evento._id}`, state: { evento } }}><img src={evento.image}/></Link>
        <p>{evento.genre}</p>
        {evento.price == 0 ? <p>GRATUITO</p> : <p>{evento.price} €</p>}
      </div>
    </div>
  );
};

export default Evento;
