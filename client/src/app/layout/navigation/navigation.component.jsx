import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faUser,
  faTicketAlt,
  faDesktop,
} from '@fortawesome/free-solid-svg-icons';

import Search from './search/search.component';

// eslint-disable-next-line no-unused-vars
function NavigationComponent(props) {
  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <LinkContainer to="/">
        <Navbar.Brand>
          Infomanager
        </Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to="/customers/">
            <Nav.Link>
              <FontAwesomeIcon icon={faUser} />
              &nbsp;
              Kunden
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/assets/">
            <Nav.Link>
              <FontAwesomeIcon icon={faDesktop} />
              &nbsp;
              Inventar
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/issues/">
            <Nav.Link>
              <FontAwesomeIcon icon={faTicketAlt} />
              &nbsp;
              Tickets
            </Nav.Link>
          </LinkContainer>
        </Nav>
        <Nav>
          <Dropdown className="mr-2">
            <Dropdown.Toggle variant="success">
              <FontAwesomeIcon icon={faPlus} />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <LinkContainer to="/issues/add">
                <Dropdown.Item>
                  <FontAwesomeIcon icon={faTicketAlt} />
                  &nbsp;
                  Ticket
                </Dropdown.Item>
              </LinkContainer>
              <LinkContainer to="/assets/add">
                <Dropdown.Item>
                  <FontAwesomeIcon icon={faDesktop} />
                  &nbsp;
                  Inventar
                </Dropdown.Item>
              </LinkContainer>
              <LinkContainer to="/customers/add">
                <Dropdown.Item>
                  <FontAwesomeIcon icon={faUser} />
                  &nbsp;
                  Kunde
                </Dropdown.Item>
              </LinkContainer>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
        <Search />
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationComponent;
