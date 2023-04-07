import { Image, Col, Row, Container } from 'react-bootstrap';
import cat1 from "../assets/img/cat-1.jpg";
import cat2 from "../assets/img/cat-2.jpg";
import cat3 from "../assets/img/cat-3.jpg";
import cat4 from "../assets/img/cat-4.jpg";
import cat5 from "../assets/img/cat-5.jpg";

function Categorias() {
  return (
    <div class="categorias">
      <h4 className="titulo-categorias">CATEGORIAS</h4>
      <br></br>
      <h5 className="subtitulo-cat">MUCHAS GRUAS EN STOCK Y DIFERENTES BUENAS OFERTAS.<br></br>MAQUINAS NUNCA USADAS EN CHILE IGUAL QUE NUEVAS.</h5>
      <Container>
        <Row>
          <Col md="4">
            <Row className="cat">
              <Col><Image className= "img-cat" fluid src={cat1} alt="" /></Col>
              <Col className="titulo"><a className="cat" href="/">BARREDORAS Y LAVADORAS DE PISO</a></Col>
            </Row>
          </Col>
          <Col md="4">
            <Row className="cat">
              <Col><Image fluid className= "img-cat" src={cat2} alt="" /></Col>
              <Col className="titulo"><a className="cat" href="/">EQUIPOS DE CHANCADO, MOLIENDA Y CLASIFICACION</a></Col>
            </Row>
          </Col>
          <Col md="4">
            <Row className="cat">
              <Col><Image fluid className= "img-cat" src={cat3} alt="" /></Col>
              <Col className="titulo"><a className="cat" href="/">GENERADORES</a></Col>
            </Row>
          </Col>
        </Row>
        <Row>
        <Col md="4">
            <Row className="cat">
              <Col><Image fluid className= "img-cat" src={cat4} alt="" /></Col>
              <Col  className="titulo"><a className="cat" href="/equipos/cat4">GRUAS HORQUILLA</a></Col>
            </Row>
        </Col>
        <Col md="4">
            <Row className="cat">
              <Col><Image fluid className= "img-cat" src={cat5} alt="" /></Col>
              <Col className="titulo"><a className="cat" href="/">GRUAS PLUMA</a></Col>
            </Row>
        </Col>
        <Col md="4">
            <Row className="cat">
              <Col><Image fluid className= "img-cat" src={cat5} alt="" /></Col>
              <Col className="titulo"><a className="cat" href="/">MAQUINAS METALMECANICAS</a></Col>
            </Row>
        </Col>
        </Row >
        <Row>
        <Col md="4">
            <Row className="cat">
              <Col><Image fluid className= "img-cat" src={cat5} alt="" /></Col>
              <Col className="titulo"><a className="cat" href="/">MAQUINAS PARA LA CONSTRUCCION</a></Col>
            </Row>
        </Col>
        <Col md="4">
            <Row className="cat">
              <Col><Image fluid className= "img-cat" src={cat5} alt="" /></Col>
              <Col className="titulo"><a className="cat" href="/">MINICARGADORES</a></Col>
            </Row>
        </Col>
        <Col md="4">
            <Row className="cat">
              <Col><Image fluid className= "img-cat" src={cat5} alt="" /></Col>
              <Col className="titulo"><a className="cat" href="/">PUENTE GRUA</a></Col>
            </Row>
        </Col>
        </Row >
      </Container>
    </div >
  );
}

export default Categorias;