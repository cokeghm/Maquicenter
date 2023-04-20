import { Button, Modal, Card, Container } from "react-bootstrap";
import React, { useState } from "react";
import ImgDefault from "../assets/img/KARCHERB250R.png";

function ProductCard({ product }) {
  //format price to CLP
  const formatter = new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    minimumFractionDigits: 0,
  });
  console.log(product);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Container>
      <Card>
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
          <Button variant="warning" onClick={handleShow}>
            Cotizar
          </Button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{product.fabricante_modelo}        {product.opcion1_modelo} </Modal.Title>
            </Modal.Header>
            <Modal.Body><p>{product.descripcion_modelo}</p></Modal.Body>
            {ImgDefault}
            <Modal.Footer>
              <Button variant="warning" onClick={handleClose}>
                Agregar al Carro
              </Button>
            </Modal.Footer>
          </Modal>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ProductCard;
