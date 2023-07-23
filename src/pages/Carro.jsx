

//create a landing page for the cart with a table that shows the products added to the cart
//create a button to remove the products from the cart
//create a button to go back to the home page
//create a button to go to the checkout page

import React from 'react';
import { Button, Modal, Card, Container } from "react-bootstrap";
import ImgDefault from "../assets/img/KARCHERB250R.png";
// import { useCartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function Carro() {
    // const { cart, removeItem, clear } = useCartContext();
    const cart = [];
    const removeItem = () => {};
    const clear = () => {};
    const formatter = new Intl.NumberFormat("es-CL", {
        style: "currency",
        currency: "CLP",
        minimumFractionDigits: 0,
    });
    
    return (
        <Container>
        <Card>
            <Card.Body>
            <Card.Title>Carro de Compras</Card.Title>
            <Card.Text>
                {cart.length === 0 ? (
                <div>
                    <h2>No hay productos en el carro</h2>
                    <Link to="/">
                    <Button variant="warning">Volver al Home</Button>
                    </Link>
                </div>
                ) : (
                <div>
                    <h2>Productos en el carro</h2>
                    <Button variant="warning" onClick={clear}>
                    Vaciar Carro
                    </Button>
                    <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">Producto</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Total</th>
                        <th scope="col">Quitar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((product) => (
                        <tr key={product.id}>
                            <td>
                            <img
                                className="img-fluid"
                                src={product.cover_image ?? ImgDefault}
                                alt={product.nombre_modelo}
                            />
                            {product.nombre_modelo}
                            </td>
                            <td>{formatter.format(product.precio_modelo)}</td>
                            <td>{product.quantity}</td>
                            <td>
                            {formatter.format(product.precio_modelo * product.quantity)}
                            </td>
                            <td>
                            <Button variant="warning" onClick={() => removeItem(product.id)}>
                                Quitar
                            </Button>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                    </table>
                    <Link to="/">
                    <Button variant="warning">Volver al Home</Button>
                    </Link>
                    <Link to="/checkout">
                    <Button variant="warning">Ir a Pagar</Button>
                    </Link>
                </div>
                )}
            </Card.Text>
            </Card.Body>
        </Card>
        </Container>
    );
    }

export default Carro;