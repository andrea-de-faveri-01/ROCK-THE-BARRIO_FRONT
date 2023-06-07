import React from "react";
import "./Evento.css";
import { Link } from "react-router-dom";
import Button from '../Button/Button'

const Evento = ({ evento }) => {

  
  const comprar = () => {
    window.location.href = 'https://www.ticketmaster.es/';
  };

  return (
    <div>
      <div>
        {/* <p>{evento._id}</p> */}
        <Link to={{ pathname: `/${evento._id}`, state: { evento } }}><h1>{evento.title}</h1></Link>
        <p>{evento.subtitle}</p>
        <p>{evento.content}</p>
        <p>{evento.user_creator}</p>
        <p>{evento.site}</p>
        <p>{evento.date_start}</p>
        <p>{evento.date_end}</p>
        <Button text="Comprar" type="medium" onClick={comprar}/>
        <Link to={{ pathname: `/${evento._id}`, state: { evento } }}><img src={evento.image}/></Link>
        <p>{evento.genre}</p>
      </div>
    </div>
  );
};

export default Evento;
