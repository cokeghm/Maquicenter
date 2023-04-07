import NavBar from "../components/NavBar";
import LogoBar from "../components/LogoBar";
import SearchBar from "../components/SearchBar";
import Banner from '../components/Banner';
import Categorias from '../components/Categorias';
import MasVendidos from '../components/MasVendidos';
import Nosotros from '../components/Nosotros'
import Footer from '../components/Footer';
import {Container} from 'react-bootstrap';

import "../styles/Inicio.css";

function Inicio(props) {
  console.log('hola',props.categorias);
  return (
       <Container fluid>
        <NavBar categorias={props.categorias}/>
        <LogoBar/>
        <SearchBar />
        <Banner />
        <Categorias />
        <MasVendidos />
        <Nosotros />
        <Footer />
        </Container>
  );
}

export default Inicio;
