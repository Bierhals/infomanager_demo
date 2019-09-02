import React, { FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCaretLeft,
  faCaretRight,
  faFilter,
} from '@fortawesome/free-solid-svg-icons';
import {
  Button,
  ButtonGroup,
  Card,
  Dropdown,
  DropdownButton
} from 'react-bootstrap'

const DefaultListPageHeaderComponent: FunctionComponent = () => (
  <Card role="page-header" bg="light">
    <Card.Body className="px-4 py-3 d-flex flex-row">
      <div className="flex-grow-1">
        <div className="form-inline mb-0">
          <h3>Kunden</h3>
          <DropdownButton id="dropdownFilter" title="Aktive" variant="">
            <Dropdown.Item>Alle</Dropdown.Item>
            <Dropdown.Item>Aktive</Dropdown.Item>
            <Dropdown.Item>Inaktive</Dropdown.Item>
          </DropdownButton>
        </div>
      </div>
      <div>
        <span className="mr-3 align-middle">1 - 15 von 587</span>
        <ButtonGroup aria-label="pagination" className="mr-2">
          <Button variant="secondary"><FontAwesomeIcon icon={faCaretLeft} /></Button>
          <Button variant="secondary"><FontAwesomeIcon icon={faCaretRight} /></Button>
        </ButtonGroup>
        <Button variant="primary"><FontAwesomeIcon icon={faFilter} /></Button>
      </div>
    </Card.Body>
  </Card>
)

export default DefaultListPageHeaderComponent;