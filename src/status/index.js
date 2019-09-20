import React, { Component } from 'react';

// import { Container } from './styles';

import { Navbar }  from 'react-bootstrap';

export default class status extends Component {

  render() {
    return (
        <div>
            <Navbar fixed="bottom" bg="dark" variant="dark">
                <Navbar.Brand href="#home">{this.props.status}</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                    Signed in as: <a href="#login">Zanfolin</a>
                    </Navbar.Text>
                </Navbar.Collapse>
                </Navbar>
        </div>
        );
  }
}
