import LogoImg from "../assets/img/logo.png";
import { PhoneFilled } from "@ant-design/icons";
import {Container, Col, Row, Image } from "react-bootstrap";

function LogoBar() {
  return (
  
  <Container className="logobar" id="home">
    <Row>
      <Col>
        <Image className="img-logo" src={LogoImg} alt="logo"/>  
      </Col>
      <Col xs={1} className="phone-img">
        <PhoneFilled className="tel-icon" />
      </Col>
      <Col xs={4}>
        <div className="fono"><div style={{color:'black'}} href="tel:56226233000">Contacto</div>(+56) 2 2623 3000</div>
      </Col>
    </Row>
  </Container>
  )
}

export default LogoBar;
