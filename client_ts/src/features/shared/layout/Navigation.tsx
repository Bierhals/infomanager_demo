import React, { FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { 
  Button,
  Form,
  InputGroup,
  Nav,
  Navbar
} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';

const NavigationComponent: FunctionComponent = () => (
  <Navbar bg="danger" variant="dark" expand="sm">
    <Navbar.Collapse id="collapsableNavbar">
      <Nav>
        <LinkContainer to="/" exact>
          <Nav.Link>Startseite</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/customers">
          <Nav.Link>Kunden</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/issues">
          <Nav.Link>Tickets</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/inventory">
          <Nav.Link>Inventar</Nav.Link>
        </LinkContainer>
      </Nav>

      <div className="navbar-nav ml-auto">
        <InputGroup className="mr-sm-2">
          <Form.Control type="text" placeholder="Suchen" />
          <InputGroup.Append>
            <Button variant="primary"><FontAwesomeIcon icon={faSearch} /></Button>
          </InputGroup.Append>
        </InputGroup>
      </div>
    </Navbar.Collapse>
  </Navbar>
)

export default NavigationComponent;