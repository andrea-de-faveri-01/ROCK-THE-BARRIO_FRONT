import React, { useEffect } from "react";
import "./DetallesEvento.css";
import ComentariosList from "../../components/ComentariosList/ComentariosList";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getEventoById } from "../../redux/eventos/eventos.actions";
import Button from "../../components/Button/Button";


const DetallesEvento = () => {


  const { id } = useParams();

  const { loading, evento } = useSelector((reducer) => reducer.eventosReducer);

  useEffect(() => {
    getEventoById(id)
  }, [id]);



  const comprar = () => {
    window.location.href = evento.url;
  };

  const opciones = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
  const fechaStart = evento?.date_start ? new Date(evento.date_start).toLocaleDateString('es-ES', opciones) : '';
  const fechaEnd = evento?.date_end ? new Date(evento.date_end).toLocaleDateString('es-ES', opciones) : '';
  

  return (
    
    <div>
      <h2>DETALLES EVENTO</h2>
      {evento ? (
        <>
      <div >
            <h1>{evento.title}</h1>
            {evento.image && <img src={evento.image} />}
            <h2>{evento.subtitle}</h2>
            <h3>{evento.site}</h3>
            {evento.price==0 ? <h3>GRATUITO</h3>: <h3>{evento.price} €</h3>}
            <h3>{fechaStart}</h3>
            {fechaEnd && <h3>{fechaEnd}</h3>}
            {evento.genre && <h3>{evento.genre}</h3>}
            <p>{evento.content}</p>
            <Button text="Comprar" type="medium" onClick={comprar}/>       
      </div>
      {evento ? <ComentariosList eventId={evento._id} /> : null}
      </>
      ) : 'No hay eventos que mostrar'}
    </div>
  );
};

export default DetallesEvento;
