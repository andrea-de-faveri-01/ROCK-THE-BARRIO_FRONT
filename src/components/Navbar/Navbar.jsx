import React from "react";
import "./Navbar.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { logout } from "../../redux/usuarios/usuarios.actions";
import { useDispatch, useSelector } from "react-redux";
import { usuariosReducer } from "../../redux/usuarios/usuarios.reducer";


const Navbar = () => {
  const storedToken = localStorage.getItem("token");
  const storedUser = localStorage.getItem("user");

  let { user } = useSelector((state) => state.usuariosReducer);
  
  if (storedToken && storedUser) {
    user = JSON.parse(storedUser);
  }
  
  console.log(user);
  return (
    <div>
      {user ? (
        <>
          <h3>Hola {user.username}</h3>
          <Link to="/">
            <span>
              <Button text="Salir" type="medium" onClick={logout} />
            </span>
          </Link>
        </>
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
