        import {Button, Form, Navbar} from 'react-bootstrap';
     
        function SearchBar() {
          return (
            <Navbar expand="lg">
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                  <Form className="d-flex izquierda">
                    <Form.Control
                      type="search"
                      placeholder="Buscar tu producto"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button variant="warning">Buscar</Button>
                  </Form>
                  <Form className="d-flex derecha">
                    <Form.Control
                      type="search"
                      placeholder="Filtra por Categoria"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button variant="warning">Buscar</Button>
                  </Form>
                </Navbar.Collapse>
            </Navbar>
          );
        }

export default SearchBar;