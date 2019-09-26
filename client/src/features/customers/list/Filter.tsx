import React, { FunctionComponent, ChangeEvent } from 'react';

import { Filter } from '../../../store/customerslist/types'

type Props = {
  filter: Filter,
  onFilterChange: (filter: Filter) => void
};

const CustomersListFilterComponent: FunctionComponent<Props> = props => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    props.onFilterChange({
      ...props.filter,
      [event.target.name]: event.target.value
    });
  }

  return (
  <aside className="card bg-light d-print-none" id="filter">
      <div className="card-body">
        <h5 className="card-title">Filter</h5>
        <div className="row">
          <div className="col-sm-6 col-md-12">
            <div className="form-group">
              <label htmlFor="filterLastname">Name</label>
              <input type="text" className="form-control" id="filterName" name="name" value={props.filter.name} onChange={handleChange} />
            </div>
          </div>
          <div className="col-sm-6 col-md-12">
            <div className="form-group">
              <label htmlFor="filterFirstname">Vorname</label>
              <input type="text" className="form-control" id="filterFirstname" name="firstname" value={props.filter.firstname} onChange={handleChange} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4 col-md-12">
            <div className="form-group">
              <label htmlFor="filterCompany">Firma</label>
              <input type="text" className="form-control" id="filterCompany" name="company" value={props.filter.company} onChange={handleChange} />
            </div>
          </div>
          <div className="col-sm-4 col-md-12">
            <div className="form-group">
              <label htmlFor="filterDepartment">Abteilung</label>
              <input type="text" className="form-control" id="filterDepartment" name="department" value={props.filter.department} onChange={handleChange}/>
            </div>
          </div>
          <div className="col-sm-4 col-md-12">
            <div className="form-group">
              <label htmlFor="filterPhone">Telefon</label>
              <input type="text" className="form-control" id="filterPhone" name="phone" value={props.filter.phone} onChange={handleChange} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-3 col-md-12">
            <div className="form-group">
              <label htmlFor="filterZIP">PLZ</label>
              <input type="text" className="form-control" id="filterZIP" name="zip" value={props.filter.zip} onChange={handleChange} />
            </div>
          </div>
          <div className="col-sm-4 col-md-12">
            <div className="form-group">
              <label htmlFor="filterCity">Ort</label>
              <input type="text" className="form-control" id="filterCity" name="city" value={props.filter.city} onChange={handleChange} />
            </div>
          </div>
          <div className="col-sm-5 col-md-12">
            <div className="form-group">
              <label htmlFor="filterStreet">Stra&szlig;e</label>
              <input type="text" className="form-control" id="filterStreet" name="street" value={props.filter.street} onChange={handleChange} />
            </div>
          </div>
        </div>
      </div>
    </aside>
)
}

export default CustomersListFilterComponent;