import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home/Home";
import DetallesEvento from "./pages/DetallesEvento/DetallesEvento";
import CrearEvento from "./pages/CrearEvento/CrearEvento";
import DateDeAlta from "./pages/DateDeAlta/DateDeAlta";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:id' element={<DetallesEvento/>}/>
        <Route path='/date de alta' element={<DateDeAlta/>}/>
        <Route path='/crear evento' element={<CrearEvento/>}/>
        <Route path='*' element={<Home/>}/>
      </Routes>
    </>
  );
}

export default App;
