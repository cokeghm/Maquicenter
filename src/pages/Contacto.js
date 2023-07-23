import ContactForm from "../components/ContactForm";
import {Container} from 'react-bootstrap';
import "../styles/Contacto.css";

function Contacto() {
  return (
    <div>
    <Container>
    <h1 className="titulo-categorias"> FORMULARIO DE CONTACTO </h1>
    <ContactForm/>
    </Container>
    </div>
  )
}

export default Contacto;
