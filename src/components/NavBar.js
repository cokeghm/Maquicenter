import { Nav, Navbar } from 'react-bootstrap';
import { LockOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Badge, Dropdown } from 'antd';
import _ from 'lodash';
import { useContext } from 'react';
import { AppContext } from '../context/globalContext';

function NavBar({ categorias = [] }) {
  const { cart } = useContext(AppContext);

  const items = _.map(categorias, (categoria) => getItem(categoria));

  function validChildren(children) {
    return _.filter(children, (child) => child.label.trim());
  }

  function redirectionUrl(key) {
    return `/equipos/${key}`;
  }

  function getItem(categoria, categoryTrace = null) {
    const children = validChildren(categoria.children);
    const key = categoryTrace
      ? `${categoryTrace}/${categoria.id}`
      : categoria.id;
    return {
      key: key,
      label: <Link to={redirectionUrl(key)}>{categoria.label}</Link>,
      children: children.length
        ? _.map(children, (child) => getItem(child, key))
        : null,
    };
  }

  return (
    <Navbar expand='lg'>
      <Navbar.Toggle aria-controls='navbarScroll' />
      <Navbar.Collapse id='navbarScroll'>
        <Nav
          className='me-auto my-2 my-lg-0'
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link as={Link} to='/'>
            Inicio
          </Nav.Link>
          <Nav.Link href='/nosotros'>Nosotros</Nav.Link>
          <Dropdown
            menu={{
              items,
            }}
          >
            <a href='/' onClick={(e) => e.preventDefault()}>
              Equipos
            </a>
          </Dropdown>
          <Nav.Link as={Link} to='/contacto'>
            Contacto
          </Nav.Link>
        </Nav>
        <Nav.Link as={Link} to='/login' className='nav-item'>
          <LockOutlined className='logo-navbar' />
          Iniciar Sesión
        </Nav.Link>
        <Nav.Link as={Link} to='/register' className='nav-item'>
          Registrarse
        </Nav.Link>
        <Nav.Link as={Link} to='/carro' className='nav-item'>
          <Badge count={cart.length} className='logo-navbar'>
            <ShoppingCartOutlined  /> Cotización
          </Badge>
        </Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
