import React from "react";
import "./Evento.css";
import { Link } from "react-router-dom";


const Evento = ({ evento }) => {

  const maxLength = 75; // Número máximo de caracteres antes de truncar el contenido del texto

  const truncatedContent = evento.content.length > maxLength
    ? evento.content.slice(0, maxLength) + '...'
    : evento.content;

  const opciones = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
  const fechaStart = evento.date_start ? new Date(evento.date_start).toLocaleDateString('es-ES', opciones) : '';
  const fechaEnd = evento.date_end ? new Date(evento.date_end).toLocaleDateString('es-ES', opciones) : '';


  return (
    <div className="card">
      <div className="border-card">
        <div className="div-image">
        <Link to={{ pathname: `/${evento._id}`, state: { evento } }}>
            {evento.image ? <img src={evento.image} alt={evento.title} /> : <img src="https://metropoliabierta.elespanol.com/uploads/s1/36/81/72/audience-band-celebration-1190298_9_1200x480.jpeg" alt= "Imagen nula" />}
            
          </Link>
        </div>
        
        <div className="div">
          <Link to={{ pathname: `/${evento._id}`, state: { evento } }}>
            <h1>{evento.title}</h1>
          </Link>
          <h2>{evento.subtitle}</h2>
          <p>{truncatedContent}</p>

        </div>
        <div className="div2">
          {evento.user_creator && <p>{evento.user_creator}</p>}
          {evento.site && <p>{evento.site}</p>}
          {fechaStart && <p>{fechaStart} {fechaEnd && `- ${fechaEnd}`}</p>}
          {evento.genre && <p>{evento.genre}</p>}
          {evento.price == 0 ? <p className="gratuito">GRATUITO</p> : evento.price && <p>{evento.price} €</p>}
        </div>
      </div>
    </div>
  );
};

export default Evento;
