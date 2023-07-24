import {Container} from 'react-bootstrap';
import "../styles/Inicio.css";

import LogoBar from "../components/LogoBar";
import SearchBar from "../components/SearchBar";
import Banner from '../components/Banner';
import Categorias from '../components/Categorias';

function Inicio(props) {
  return (
      <Container fluid>
        <LogoBar/>
        <SearchBar api={props.api}/>
        <Banner />
        <Categorias categorias={props.categorias}/>
      </Container>
  );
}

export default Inicio;
