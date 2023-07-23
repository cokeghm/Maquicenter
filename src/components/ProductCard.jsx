import { Button, Modal, Card, Container } from "react-bootstrap";
import React, { useState } from "react";
import ImgDefault from "../assets/img/KARCHERB250R.png";
import { useContext } from "react";
import { AppContext } from "../context/globalContext";


function ProductCard({ product }) {
  const { addItemToCart } = useContext(AppContext);
  //format price to CLP
  const formatter = new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    minimumFractionDigits: 0,
  });

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function addToCart(e){
    e.stopPropagation();
    addItemToCart(product)
  };

function stringCleaner(inputString) {

  const tempElement = document.createElement('div');
  tempElement.innerHTML = inputString;

  const cleanedString = tempElement.textContent.replace(/<[^>]+>/g, '');
  const cleanedStringWithoutEntities = cleanedString.replace(/&[^;]+;/g, '');

  return cleanedStringWithoutEntities;
}

  return (
    <Container>
      <Card onClick={handleShow}>
        <Card.Img
          className="card-img"
          variant="top"
          src={product.cover_image ?? ImgDefault}
        />
        <Card.Body>
          <Card.Title className="marca">{product.fabricante_modelo}</Card.Title>
          <Card.Text className="opcion1">{product.opcion1_modelo}</Card.Text>
          <Card.Text className="modelo">{product.nombre_modelo}</Card.Text>
          <Card.Text>{formatter.format(product.precio_modelo)}</Card.Text>
          <Button variant="warning" onClick={addToCart}>
            Cotizar
          </Button>
        </Card.Body>
      </Card>
      <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{product.fabricante_modelo}  {product.opcion1_modelo} </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {<img src={ImgDefault}></img>}
              { stringCleaner(product.descripcion_modelo)}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="warning" onClick={addToCart}>
                Agregar al Carro
              </Button>
            </Modal.Footer>
          </Modal>
    </Container>
  );
}

export default ProductCard;
