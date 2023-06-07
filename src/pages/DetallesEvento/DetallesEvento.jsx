import React, { useEffect } from "react";
import "./DetallesEvento.css";
import ComentariosList from "../../components/ComentariosList/ComentariosList";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getEventoById } from "../../redux/eventos/eventos.actions";

const DetallesEvento = () => {
  const { id } = useParams();

  const { loading, evento } = useSelector((reducer) => reducer.eventosReducer);


  useEffect(() => {
    getEventoById(id)
  }, [id]);

  return (
    <div>
    <h2>DETALLES EVENTO</h2>
      <h2>TITLE</h2>
       <div>
        {evento ? (
          <>
            <p>{evento._id}</p>
            
          </>
        ): 'no hay evento'}
      </div>
      <ComentariosList />
    </div>
  );
};

export default DetallesEvento;
