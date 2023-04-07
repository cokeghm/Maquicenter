import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Inicio from "./pages/Inicio";
import Nosotros from "./components/Nosotros";
import Contacto from "./pages/Contacto";
import Equipos from "./pages/Equipos";
import Login from "./pages/Login";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { useState, useEffect } from 'react';



function App() {

  const [categorias, setCategorias] = useState([]);

  async function getCategorias(){
    const _categorias = await fetch(
      "http://localhost:5001/admin-ae7ca/us-central1/getCategorias"
      ).then((data)=>data.json()); 
      console.log(_categorias);
      setCategorias(_categorias);
  }
  
  useEffect(() => {
    getCategorias();
  }, []);
  
  return (
    <div className="App">
      <Router>
        <Routes>
          
          <Route path="/nosotros" element={<Nosotros/>} />
          <Route path="/equipos/:id" element={<Equipos categorias={categorias} />} />  
          {/* <Route path="/equipos/cat2" element={<Cat2 />} /> 
          <Route path="/equipos/cat3" element={<Cat3 />} /> 
          <Route path="/equipos/cat4" element={<Cat4 />} /> 
          <Route path="/equipos/cat5" element={<Cat5 />} /> 
          <Route path="/equipos/cat6" element={<Cat6 />} /> 
          <Route path="/equipos/cat7" element={<Cat7 />} /> 
          <Route path="/equipos/cat8" element={<Cat8 />} /> 
          <Route path="/equipos/cat9" element={<Cat9 />} /> */}
          <Route path="/contacto" element={<Contacto />} /> 
          <Route path="/login" element={<Login />} /> 
          <Route path="/" exact element={<Inicio categorias={categorias}/>} />

        </Routes>
      </Router>
    </div >
  );
}

export default App;
