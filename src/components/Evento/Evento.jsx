import React from "react";
import "./Evento.css";
import { Link } from "react-router-dom";


const Evento = ({ evento }) => {

  const maxLength = 75; // Número máximo de caracteres antes de truncar el contenido del texto

  const truncatedContent = evento.content ? evento.content.length > maxLength
    ? evento.content.slice(0, maxLength) + '...'
    : evento.content: "";

  const opciones = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
  const fechaStart = evento.date_start ? formatDate(evento.date_start) : null;
const fechaEnd = evento.date_end ? formatDate(evento.date_end) : null;

  
  console.log(evento.date_start, fechaStart);
  function formatDate(dateString) {
    const dateObj = new Date(dateString);
    return dateObj.toLocaleDateString('es-ES', opciones);
  }
  function esHoy(fecha) {
    const fechaActual = new Date();
    const fechaActualFormateada = fechaActual.toLocaleDateString('es-ES', opciones);
    return fecha === fechaActualFormateada;
  }

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
          {evento.site && <p>{evento.site}</p>}
          {fechaStart && (
    <p>
      {esHoy(fechaStart) ? <p className="gratuito hoy">HOY</p> : fechaStart}
      {fechaEnd && `- ${fechaEnd}`}
    </p>
  )}
          {evento.genre && <p>{evento.genre}</p>}
          {evento.price == 0 ? <p className="gratuito">GRATUITO</p> : evento.price && <p>{evento.price} €</p>}
        </div>
      </div>
    </div>
  );
};

export default Evento;
