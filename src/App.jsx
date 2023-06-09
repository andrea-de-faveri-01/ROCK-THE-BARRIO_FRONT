

import "./App.css";
import Home from "./pages/Home/Home";
import DetallesEvento from "./pages/DetallesEvento/DetallesEvento";
import CrearEvento from "./pages/CrearEvento/CrearEvento";
import DateDeAlta from "./pages/DateDeAlta/DateDeAlta";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setUser } from "./redux/usuarios/usuarios.actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    console.log(storedUser);
    if (storedUser) {
      dispatch(setUser(JSON.parse(storedUser)));
      
    }
  }, [dispatch]);

 

  return (
    <>
    
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:id' element={<DetallesEvento/>}/>
        <Route path='/date-de-alta' element={<DateDeAlta/>}/>
        <Route path='/crear-evento' element={<CrearEvento/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='*' element={<Home/>}/>
      </Routes>

    </>
  );
}

export default App;
