import { Nav, Navbar } from 'react-bootstrap';
import { LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Dropdown } from 'antd';
import _ from 'lodash';

function NavBar({ categorias = [] }) {

  const items = _.map(categorias, (categoria) => getItem(categoria));

  function validChildren(children) {
    return _.filter(children, (child) => child.label.trim());
  }

  function redirectionUrl(key) {
    return `/equipos/${key}`;
  }

  function getItem(categoria, categoryTrace = null){
    const children = validChildren(categoria.children);
    const key = categoryTrace ? `${categoryTrace}/${categoria.id}` : categoria.id;
    return {
      key: key,
      label: <Link to={redirectionUrl(key)}>{categoria.label}</Link>,
      children: children.length ? _.map(children, (child) => getItem(child, key)) : null
    }
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
          <Nav.Link href='#Nosotros'>Nosotros</Nav.Link>
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
        <Nav.Link as={Link} to='/login' className='login'>
          <LockOutlined className='candado' />
          Iniciar Sesión
        </Nav.Link>
        <Nav.Link as={Link} to='/register' className='register'>
          Registrarse
        </Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
