import React, { useEffect } from 'react'
import { getAllEventos } from '../../redux/eventos/eventos.actions';
import { useDispatch, useSelector } from 'react-redux';
import Evento from '../Evento/Evento';


const EventosList = () => {
  const dispatch=useDispatch();

    useEffect(() => {
        dispatch(getAllEventos());
       }, [])
      
       const { loading, eventos } = useSelector((reducer) => reducer.eventosReducer);
      

 return (
   <div>
   {loading  && (
    <img src="/assets/music.gif"/>
   )}
   {eventos.map((evento) =>{
    return (
       <Evento evento={evento} key={evento._id}/>
    );
   })}
   </div>
 )}


export default EventosList;

