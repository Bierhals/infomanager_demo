import React, { FunctionComponent, MouseEvent } from 'react';
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

import { Filter, CustomerStatus } from '../../../store/customers/types'


type Props = {
  name: string,
  filter: Filter,
  toggleFilter: () => void,
  setFilter: (filter: Filter) => void
};

const DefaultListPageHeaderComponent: FunctionComponent<Props> = (props) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    event.preventDefault();

    props.setFilter({
      ...props.filter,
      status: event.currentTarget.name as CustomerStatus
    });
  }

  return (
    <Card role="page-header" bg="light">
      <Card.Body className="px-4 py-3 d-flex flex-row">
        <div className="flex-grow-1">
          <div className="form-inline mb-0">
            <h3>{props.name}</h3>
            <DropdownButton id="dropdownFilter" title={props.filter.status} variant="">
              <Dropdown.Item name={CustomerStatus.All} onClick={handleClick}>Alle</Dropdown.Item>
              <Dropdown.Item name={CustomerStatus.Active} onClick={handleClick}>Aktive</Dropdown.Item>
              <Dropdown.Item name={CustomerStatus.Inactive} onClick={handleClick}>Inaktive</Dropdown.Item>
            </DropdownButton>
          </div>
        </div>
        <div>
          <span className="mr-3 align-middle">1 - 15 von 587</span>
          <ButtonGroup aria-label="pagination" className="mr-2">
            <Button variant="secondary"><FontAwesomeIcon icon={faCaretLeft} /></Button>
            <Button variant="secondary"><FontAwesomeIcon icon={faCaretRight} /></Button>
          </ButtonGroup>
          <Button variant="primary" onClick={props.toggleFilter}><FontAwesomeIcon icon={faFilter} /></Button>
        </div>
      </Card.Body>
    </Card>
  )
}

export default DefaultListPageHeaderComponent;