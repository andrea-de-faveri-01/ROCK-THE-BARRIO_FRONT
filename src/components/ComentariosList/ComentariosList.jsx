import React, { useEffect } from 'react'
import { getComentariosByEvent } from '../../redux/comentarios/comentarios.actions';
import { useSelector } from 'react-redux';
import Comentario from '../Comentario/Comentario';
import "./ComentariosList.css"


const ComentariosList = ({eventoId}) => {

    useEffect(() => {
      getComentariosByEvent(eventoId);
       }, [])
      
       const { loading, comentarios } = useSelector((reducer) => reducer.comentariosReducer);
      

 return (
   <div>
   {loading  && (
    <div  className='div-img'><img src="/assets/music.gif"/></div>
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