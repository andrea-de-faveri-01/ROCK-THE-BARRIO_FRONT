import React from "react";
import "./Navbar.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { logout } from "../../redux/usuarios/usuarios.actions";
import { useDispatch, useSelector } from "react-redux";
import { usuariosReducer } from "../../redux/usuarios/usuarios.reducer";

const Navbar = () => {
  let { user } = useSelector((state) => state.usuariosReducer);
console.log(user);
  return (
    <div>
      {user ? (
        <div className="disp">
          <h3 className="h3">Hola {user.username}</h3>
          <div className="div-boton">
            <div>
            {user && user.role === 2 && (
          <Link to="/crear-evento">
            <span>
              <Button text="Crear Evento" type="medium" />
            </span>
          </Link>
        )}
            </div>
            <Link to="/">
              <span>
                <Button text="Salir" type="medium" onClick={logout}/>
              </span>
            </Link>
          </div>
        </div>
      ) : (
        <>
          <Link to="/login">
            <span>
              <Button text="Acceder" type="medium" />
            </span>
          </Link>
          <Link to="date-de-alta">
            <span>
              <Button text="Registrarse" type="medium" />
            </span>
          </Link>
        </>
      )}
    </div>
  );
};

export default Navbar;
