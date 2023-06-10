import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addEvento } from "../../redux/eventos/eventos.actions";
import { Cloudinary } from "@cloudinary/url-gen";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from 'react-router-dom';
import Button from "../../components/Button/Button";
import "./CrearEvento.css"

const cloudinaryCloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const cloudinaryApiKey = import.meta.env.VITE_CLOUDINARY_API_KEY;
const cloudinaryApiSecret = import.meta.env.VITE_CLOUDINARY_API_SECRET;

const cloudinary = new Cloudinary({
  cloud_name: cloudinaryCloudName,
  api_key: cloudinaryApiKey,
  api_secret: cloudinaryApiSecret,
});

const CrearEvento = () => {
  const { user } = useSelector((state) => state.usuariosReducer);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const [imageFile, setImageFile] = useState(null);

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const uploadImage = async () => {
    if (!imageFile) return null;

    const formData = new FormData();
    formData.append("file", imageFile);
    formData.append("folder", "rockthebarrio");
    formData.append("public_id", `${uuidv4()}_${imageFile.name}`);

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudinaryCloudName}/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        const data = await response.json();
        return data.secure_url;
      } else {
        throw new Error("Error al cargar la imagen en Cloudinary.");
      }
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const onSubmit = async (data) => {
    const imageUrl = await uploadImage();

    const eventoData = {
      title: data.title,
      content: data.content,
      subtitle: data.subtitle,
      site: data.site,
      price: data.price,
      date_start: data.date_start,
      date_end: data.date_end,
      genre: data.genre,
      user_creator: user._id,
      url: imageUrl,
      image: data.image,
    };
console.log(eventoData);
    dispatch(addEvento( eventoData));
    navigate("/");
  };

  return (
    <div className="card">
            <h1>Crear Evento</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div classname="div-input">
          <label>Título</label>
          <input {...register("title", { required: true })} />
          {errors.title && <span>Título es requerido</span>}
        </div>
        <div classname="div-input">
          <label>Artista/s</label>
          <input {...register("subtitle", { required: true })} />
          {errors.subtitle && <span>Subtítulo es requerido</span>}
        </div>
        <div classname="div-input">
          <label>Información</label>
          <textarea {...register("content", { required: true })} />
          {errors.content && <span>Contenido es requerido</span>}
        </div>
        <div classname="div-input">
          <label>Lugar</label>
          <input {...register("site", { required: true })} />
          {errors.site && <span>Sitio es requerido</span>}
        </div>
        <div classname="div-input">
          <label>Precio</label>
          <input {...register("price", { required: true })} />
          {errors.price && <span>Precio es requerido</span>}
        </div>
        <div classname="div-input">
          <label>Fecha de Inicio</label>
          <input type="date" {...register("date_start", { required: true })} />
          {errors.date_start && <span>Fecha de Inicio es requerida</span>}
        </div>
        <div classname="div-input">
          <label>Fecha de Fin</label>
          <input type="date" {...register("date_end")} />
        </div>
        <div classname="div-input">
          <label>URL</label>
          <input {...register("url")} />
        </div>
        <div classname="div-input">
          <label>Imagen</label>
          <input type="file" onChange={handleImageChange} />
        </div>
        <div classname="div-input">
          <label>Género</label>
          <input {...register("genre")} />
        </div>
        <div classname="margin-boton">
          <Button text="Crear evento" type="large"/>
        </div>
      </form>
    </div>
  );
};

export default CrearEvento;
