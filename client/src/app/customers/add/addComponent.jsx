import React from 'react';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
} from 'reactstrap';

// eslint-disable-next-line no-unused-vars
function AddComponent(props) {
  return (
    <React.Fragment>
      <h3>Kunde hinzufügen</h3>
      <Form>
        <FormGroup>
          <Label for="type">Typ</Label>
          <Input type="select" name="select" id="type">
            <option>Filiale</option>
            <option>Mitarbeiter</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input type="password" name="password" id="name" placeholder="Vollständiger Name" />
        </FormGroup>
        <FormGroup>
          <Label for="address">Adresse</Label>
          <Input type="text" name="address" id="address" placeholder="Straße" />
        </FormGroup>
        <FormGroup>
          <Label for="address2">Adresse 2</Label>
          <Input type="text" name="address2" id="address2" placeholder="Wohnhaft bei" />
        </FormGroup>
        <Row form>
          <Col md={2}>
            <FormGroup>
              <Label for="zip">PLZ</Label>
              <Input type="text" name="zip" id="zip" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="city">Ort</Label>
              <Input type="text" name="city" id="city" />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="state">Bundesland</Label>
          <Input type="text" name="state" id="state" />
        </FormGroup>
      </Form>
    </React.Fragment>
  );
}

export default AddComponent;
