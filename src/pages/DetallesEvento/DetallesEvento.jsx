import React, { useEffect } from "react";
import "./DetallesEvento.css";
import ComentariosList from "../../components/ComentariosList/ComentariosList";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getEventoById } from "../../redux/eventos/eventos.actions";
import Button from "../../components/Button/Button";
import NuevoComentario from "../../components/NuevoComentario/NuevoComentario";




const DetallesEvento = () => {

const dispatch=useDispatch();
  const { id } = useParams();

  const { loading, evento } = useSelector((reducer) => reducer.eventosReducer);
  const {user}=useSelector((reducer)=>reducer.usuariosReducer)
  
  useEffect(() => {
    dispatch(getEventoById( id))
  }, [id]);

  

  const comprar = () => {
    window.location.href = evento.url;
  };
  console.log(user);
  console.log(evento);
  const opciones = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
  const fechaStart = evento?.date_start ? new Date(evento.date_start).toLocaleDateString('es-ES', opciones) : '';
  const fechaEnd = evento?.date_end ? new Date(evento.date_end).toLocaleDateString('es-ES', opciones) : '';
  let textoBoton=""
  if (evento?.price && evento?.price>0){textoBoton="Comprar"} else {textoBoton="+Info"}

  return (
    
    <div>
    {(loading && !evento)  && (
    <div  className='div-img'><img src="/assets/music.gif"/></div>
    )}
      {evento ? (
        <>
      <div>
        <div className="divCardDetEv">
          <div className="cardDetEv">
            <h1>{evento.title}</h1>
            {evento.image && <img src={evento.image} />}
            <h2>{evento.subtitle}</h2>
            <h3>Lugar: {evento.site}</h3>
            {evento.price==0 ? <h3>GRATUITO</h3>: <h3>Precio: {evento.price} €</h3>}
            <h3>{fechaStart}</h3>
            {fechaEnd && <h3>{fechaEnd}</h3>}
            {evento.genre && <h3>Género: {evento.genre}</h3>}
            <p>{evento.content}</p>
            <div><Button text={textoBoton} type="medium" onClick={comprar}/></div>       
          </div>
        </div>

        <div>
          <div>
            {user ? <NuevoComentario eventoId={evento._id} user={user} />:<p>Debes registrarte para poder comentar</p>}
          </div>
          <div>
            {evento ? <ComentariosList eventoId={evento._id} /> : null}
          </div>
        </div>
      </div>
      


      </>
      ) : 'No hay eventos que mostrar'}
    </div>
  );
};

export default DetallesEvento;
