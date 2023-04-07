import Img from "../assets/img/maquimachine.png";
import {Col, Container, Row, Image} from 'react-bootstrap';

function Nosotros() {
  return (
    <div class="nosotros"> 
    <Container>
        <h4 id="Nosotros">NOSOTROS</h4>
        <Row>
      <Col class= "about-us">
        <text>Con una experiencia de 36 años, buscamos soluciones en todo el mundo para satisfacer las necesidades de nuestros clientes.<br></br><br></br>Nuestros continuos viajes alrededor del mundo, nos ha llevado a conocer y contar con importantes proveedores de maquinaria en Europa, USA y Asia.<br></br><br></br>Por eso, si no tenemos una máquina que usted necesita, la buscamos e importamos para usted. Lo importante para nosotros es siempre cumplir con la necesidad de nuestro cliente. Por lo mismo es que nosotros garantizamos nuestras máquinas, tanto usadas como nuevas. En el caso de las máquinas usadas, las garantizamos por 60 días o 300 horas de uso, respaldo y confianza que no cualquier empresa puede ofrecer. Pónganos a prueba, se sorprenderá. Por algo hemos vendido mas de 12000 maquinas en el mercado nacional, Peru, Bolivia, Ecuador, Colombia y Argentina.</text>
      </Col>
      <Col>
      <Image className="aboutus-img" src={Img} alt="logo display" style={{ width: "22rem" }}/>  
      </Col>
      </Row>
      </Container>        
    </div>
  )
}

export default Nosotros;
