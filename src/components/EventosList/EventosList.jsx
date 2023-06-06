import React, { useEffect } from 'react'
import { getAllEventos } from '../../redux/eventos/eventos.actions';
import { useSelector } from 'react-redux';
import Evento from '../Evento/Evento';

const EventosList = () => {

    useEffect(() => {
        getAllEventos();
       }, [])
      
       const { loading, eventos } = useSelector((state) => state.eventos);
      

 return (
   <div>
   {loading  && (
    <img src="/assets/loading.gif"/>
   )}
   {eventos.map((evento) =>{
    return (
       <Evento evento={evento} key={evento._id}/>
    );
   })}
   </div>
 )}


export default EventosList;

