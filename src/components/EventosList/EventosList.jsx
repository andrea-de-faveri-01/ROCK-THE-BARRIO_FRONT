import React, { useEffect } from 'react'
import { getAllEventos } from '../../redux/eventos/eventos.actions';
import { useDispatch, useSelector } from 'react-redux';
import Evento from '../Evento/Evento';
import "./EventosList.css"


const EventosList = () => {
  const dispatch=useDispatch();
  const { loading, eventos } = useSelector((reducer) => reducer.eventosReducer);
    useEffect(() => {
        dispatch(getAllEventos());
       }, [dispatch])
      
       
      

 return (
   <div>
   {loading  && (
    <div  className='div-img'><img src="/assets/music.gif"/></div>
   )}
   {eventos.map((evento) =>{
    return (
       <Evento evento={evento} key={evento._id}/>
    );
   })}
   </div>
 )}


export default EventosList;

