import React, { useEffect } from 'react'
import { getComentariosByEvent } from '../../redux/comentarios/comentarios.actions';
import { useSelector } from 'react-redux';
import Comentario from '../Comentario/Comentario';


const ComentariosList = ({eventId}) => {

    useEffect(() => {
      getComentariosByEvent(eventId);
       }, [])
      
       const { loading, comentarios } = useSelector((reducer) => reducer.comentariosReducer);
      

 return (
   <div>
   {loading  && (
    <img src="/assets/loading.gif"/>
   )}
   {comentarios.length ?
   (comentarios.map((comentario) =>{
    return (
       <Comentario comentario={comentario} key={comentario._id}/>
    );
   }))
   :""
   }
   </div>
 )}


export default ComentariosList;