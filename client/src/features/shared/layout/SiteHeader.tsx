import React, { FunctionComponent } from 'react';
import logo from '../../../assets/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faTh,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import {
  Dropdown,
  Nav,
  Navbar
} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';

const SiteHeaderComponent: FunctionComponent = () => (
  <Navbar bg="white" expand={true} variant="light">
    <Navbar.Toggle aria-controls="collapsableNavbar" className="d-block d-sm-none mr-2" />
    <LinkContainer to="/">
      <Navbar.Brand className="p-0">
        <img src={logo} alt="Logo" height="30px" width="140px" />
        <span className="d-none d-sm-inline">Infomanager</span>
      </Navbar.Brand>
    </LinkContainer>
    <Nav className="ml-auto">
      <div className="form-inline">
        <Dropdown alignRight>
          <Dropdown.Toggle id="dropdownAdd" variant="success" className="no-caret">
            <FontAwesomeIcon icon={faPlus} /> Neu
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <LinkContainer to="/customers/add">
              <Dropdown.Item>Kunde</Dropdown.Item>
            </LinkContainer>
            <LinkContainer to="/issues/add">
              <Dropdown.Item>Ticket</Dropdown.Item>
            </LinkContainer>
            <LinkContainer to="/inventory/add">
              <Dropdown.Item>Inventar</Dropdown.Item>
            </LinkContainer>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <Dropdown as={Nav.Item} alignRight>
        <Dropdown.Toggle id="dropdownApps" as={Nav.Link} className="no-caret">
          <FontAwesomeIcon icon={faTh} />
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>Administration</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Header>Controlling</Dropdown.Header>
          <Dropdown.Item>Stammdaten</Dropdown.Item>
          <Dropdown.Item>WiBe</Dropdown.Item>
          <Dropdown.Item>PD</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Intranet</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown as={Nav.Item} alignRight>
        <Dropdown.Toggle id="dropdownUser" as={Nav.Link} className="no-caret">
          <FontAwesomeIcon icon={faUser} />
          <span className="d-none d-md-inline">&nbsp;Bierhals, Sven-Uwe</span>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>Profil</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Beenden</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Nav>
  </Navbar>
)

export default SiteHeaderComponent;