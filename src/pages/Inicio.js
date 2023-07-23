import LogoBar from "../components/LogoBar";
import SearchBar from "../components/SearchBar";
import Banner from '../components/Banner';
import Categorias from '../components/Categorias';
import Nosotros from '../components/Nosotros'
import Footer from '../components/Footer';
import {Container} from 'react-bootstrap';

import "../styles/Inicio.css";

function Inicio(props) {
  return (
       <Container fluid>
        <LogoBar/>
        <SearchBar api={props.api}/>
        <Banner />
        <Categorias categorias={props.categorias}/>
        <Nosotros />
        </Container>
  );
}

export default Inicio;
