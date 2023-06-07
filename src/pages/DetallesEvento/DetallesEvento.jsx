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
    // window.open({evento.url}, 'https://www.ticketmaster.es/');
    // window.location.href = 'https://www.ticketmaster.es/';
    // window.location.href = {evento.url};
    <Link to={{ pathname: `/${evento.url}`}}></Link>
  };
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
            <h3>{evento.date_start}</h3>
            {evento.date_end && <h3>{evento.date_end}</h3>}
            {evento.genre && <h3>{evento.genre}</h3>}
            <p>{evento.content}</p>
            <Button text="Comprar" type="medium" onClick={comprar}/>
            <h1>{evento._id}</h1>        
      </div>
      <ComentariosList eventId={evento._id}/>
      </>
      ) : 'No hay eventos que mostrar'}
    </div>
  );
};

export default DetallesEvento;
