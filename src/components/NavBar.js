import {Nav, Navbar, NavDropdown} from 'react-bootstrap';
import {LockOutlined} from '@ant-design/icons';
import {Link} from "react-router-dom";

function NavBar(props) {

const navBarElements = props.categorias?.map(element => <NavDropdown.Item key={element.id} as={Link} to={`/equipos/${element.id}`} className="drop-item" >{element.label}</NavDropdown.Item>)
  return (
    <Navbar  expand="lg">
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to='/'>Inicio</Nav.Link>
            <Nav.Link href='#Nosotros'>Nosotros</Nav.Link>
          
            <NavDropdown title="Equipos"> 
              {navBarElements}
            </NavDropdown>
            <Nav.Link as={Link} to='/contacto'>Contacto</Nav.Link>
          </Nav> 
             <Nav.Link as={Link} to='/login' className="login"><LockOutlined className="candado"/>Iniciar Sesión</Nav.Link>
             <Nav.Link as={Link} to='/register'className="register">Registrarse</Nav.Link>
             </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar
