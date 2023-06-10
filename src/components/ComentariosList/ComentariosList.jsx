import React, { useEffect } from 'react'
import { getComentariosByEvent } from '../../redux/comentarios/comentarios.actions';
import { useSelector } from 'react-redux';
import Comentario from '../Comentario/Comentario';
import "./Comentarioslist.css"


const ComentariosList = ({eventoId}) => {

    useEffect(() => {
      getComentariosByEvent(eventoId);
       }, [])
      
       const { loading, comentarios } = useSelector((reducer) => reducer.comentariosReducer);
      

 return (
   <div>
   <div>
   {loading  && (
    <img src="/assets/loading.gif"/>
   )}
   </div>
   <h2>COMENTARIOS DEL EVENTO</h2>
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