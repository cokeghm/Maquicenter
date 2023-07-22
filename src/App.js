import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Inicio from "./pages/Inicio";
import Nosotros from "./components/Nosotros";
import Contacto from "./pages/Contacto";
import Equipos from "./pages/Equipos";
import Login from "./pages/Login";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { useState, useEffect } from 'react';
import * as api from './api';



function App() {

  const [categorias, setCategorias] = useState([]);

  
  useEffect(() => {
    (async function setCategories() {
      const _categorias = await api.categories.getCategories();
      setCategorias(_categorias);
    })();
  }, []);
  
  return (
    <div className="App">
      <Router>
        <Routes>
          
          <Route path="/nosotros" element={<Nosotros/>} />
          <Route path="/equipos/:id" element={<Equipos categorias={categorias} api={api}/>}>
            <Route path=":subCategory" element={<Equipos categorias={categorias} api={api}/>}>
              <Route path=":innerCategory" element={<Equipos categorias={categorias} api={api}/>}/>
            </Route>
          </Route>  
          <Route path="/contacto" element={<Contacto />} /> 
          <Route path="/login" element={<Login />} /> 
          <Route path="/" exact element={<Inicio categorias={categorias} api={api}/>} />

        </Routes>
      </Router>
    </div >
  );
}

export default App;
