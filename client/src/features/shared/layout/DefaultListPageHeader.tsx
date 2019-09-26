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

import { Filter, CustomerStatus } from '../../../store/customerslist/types'


type Props = {
  readonly name: string,
  readonly totalCount: number,
  readonly offset: number,
  readonly limit: number,
  readonly filter: Filter,
  onFilterToggle: () => void,
  onFilterChange: (filter: Filter) => void,
  onPagePrevious: () => void,
  onPageNext: () => void,
};

const DefaultListPageHeaderComponent: FunctionComponent<Props> = (props) => {
  const handleFilterClick = (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    event.preventDefault();

    props.onFilterChange({
      ...props.filter,
      status: event.currentTarget.name as CustomerStatus
    });
  }

  const pageFrom = props.totalCount === 0 ? 0 : props.offset+1;
  const pageTo = props.offset + props.limit < props.totalCount ? props.offset + props.limit : props.totalCount;

  return (
    <Card role="page-header" bg="light">
      <Card.Body className="px-4 py-3 d-flex flex-row">
        <div className="flex-grow-1">
          <div className="form-inline mb-0">
            <h3>{props.name}</h3>
            <DropdownButton id="dropdownFilter" title={props.filter.status} variant="link">
              <Dropdown.Item name={CustomerStatus.All} onClick={handleFilterClick}>Alle</Dropdown.Item>
              <Dropdown.Item name={CustomerStatus.Active} onClick={handleFilterClick}>Aktive</Dropdown.Item>
              <Dropdown.Item name={CustomerStatus.Inactive} onClick={handleFilterClick}>Inaktive</Dropdown.Item>
            </DropdownButton>
          </div>
        </div>
        <div>
          <span className="mr-3 align-middle">{pageFrom} - {pageTo} von {props.totalCount}</span>
          <ButtonGroup aria-label="pagination" className="mr-2">
            <Button variant="secondary" onClick={props.onPagePrevious}><FontAwesomeIcon icon={faCaretLeft} /></Button>
            <Button variant="secondary" onClick={props.onPageNext}><FontAwesomeIcon icon={faCaretRight} /></Button>
          </ButtonGroup>
          <Button variant="primary" onClick={props.onFilterToggle}><FontAwesomeIcon icon={faFilter} /></Button>
        </div>
      </Card.Body>
    </Card>
  )
}

export default DefaultListPageHeaderComponent;