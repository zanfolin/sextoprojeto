import React, { Component } from 'react';

// import { Container } from './styles';
import { Navbar, Nav, NavDropdown }  from 'react-bootstrap';

export default class menu extends Component {
  render() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
              <Navbar.Brand href="/">TarefasTEC</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="/">Início</Nav.Link>
                  <Nav.Link href="/sobre">Sobre</Nav.Link>
                </Nav>
                <NavDropdown title="Redes Sociais" id="basic-nav-dropdown">
                  <NavDropdown.Item href="www.facebook.com">Facebook</NavDropdown.Item>
                  <NavDropdown.Item href="www.twitter.com">Twitter</NavDropdown.Item>
                  <NavDropdown.Item href="www.youtube.com">Youtube</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="https://br.linkedin.com/">Linkedin</NavDropdown.Item>
                </NavDropdown>
                { /*<Form inline>
                  <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                  <Button variant="outline-success">Search</Button>
                </Form> */}
              </Navbar.Collapse>
            </Navbar>
        </div>
    );
  }
}
