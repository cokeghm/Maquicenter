import { useState } from 'react';
import { Button, Form, Navbar } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

function SearchBar({ api }) {
  const [message, setMessage] = useState('');
  const router = useNavigate();

  function setMessageTimer(msg) {
    setMessage(msg);
    setTimeout(() => {
      setMessage('');
    }, 2000);
  }

  function searchProduct(event) {
    event.preventDefault();
    const search = event.currentTarget.searchValue.value;
    if (!search) return;
    api.products.getProducts({ search }).then((products) => {
      if (products.length === 0) return setMessageTimer('No se encontraron productos');
      router('equipos/custom-search', { state: { products, customLabel: search } });
    });
  }

  return (
    <Navbar expand='lg'>
      <Navbar.Toggle aria-controls='navbarScroll' />
      <Navbar.Collapse id='navbarScroll'>
        <Form className='d-flex izquierda' onSubmit={searchProduct}>
          <Form.Control
            name='searchValue'
            type='search'
            placeholder='Buscar tu producto'
            className='me-2'
            aria-label='Search'
          />
          <Button type='submit' variant='warning'>
            Buscar
          </Button>
        </Form>
        <div className='pl-5 flex-row items-center text-danger'>
          {message}
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default SearchBar;
