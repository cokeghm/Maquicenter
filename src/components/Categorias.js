import { Image, Col, Row, Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import cat1 from "../assets/img/cat-1.jpg";

function Categorias(props) {
  const router = useNavigate();
  
  function redirectToCategory(categoriaId){
    router(`equipos/${categoriaId}`);
  }
  return (
    <Container>
    <div className="categorias">
      <h4 className="titulo-categorias">CATEGORIAS</h4>
      <br></br>
      <h5 className="subtitulo-cat">MUCHAS GRUAS EN STOCK Y DIFERENTES BUENAS OFERTAS.<br></br>MAQUINAS NUNCA USADAS EN CHILE IGUAL QUE NUEVAS.</h5>
        
      <Row>
        {props.categorias.map((categoria) => (  
          <Col onClick={() => redirectToCategory(categoria.id)} key={categoria.id} md="4">
            <Row className="cat">
              <Col><Image className= "img-cat" fluid src={cat1} alt="" /></Col>
              <Col className="titulo">{categoria.label}</Col>
            </Row>
          </Col>
        ))}
      </Row>
    </div >
    </Container>
  );
}

export default Categorias;