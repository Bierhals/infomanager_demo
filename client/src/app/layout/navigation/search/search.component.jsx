import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

// eslint-disable-next-line no-unused-vars
function SearchComponent(props) {
  return (
    <Form inline>
      <InputGroup>
        <Form.Control type="search" placeholder="Suchen" />
        <InputGroup.Append>
          <Button variant="outline-success">
            <FontAwesomeIcon icon={faSearch} />
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </Form>
  );
}

export default SearchComponent;
