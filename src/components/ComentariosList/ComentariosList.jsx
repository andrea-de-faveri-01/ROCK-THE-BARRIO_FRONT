import React, { useEffect } from 'react'
import { getAllComentarios } from '../../redux/comentarios/comentarios.actions';
import { useSelector } from 'react-redux';
import Comentario from '../Comentario/Comentario';


const ComentariosList = () => {

    useEffect(() => {
        getAllComentarios();
       }, [])
      
       const { loading, comentarios } = useSelector((reducer) => reducer.comentariosReducer);
      

 return (
   <div>
   {loading  && (
    <img src="/assets/loading.gif"/>
   )}
   {comentarios.map((comentario) =>{
    return (
       <Comentario comentario={comentario} key={comentario._id}/>
    );
   })}
   </div>
 )}


export default ComentariosList;