import React, { Component } from 'react';

import DefaultLayout from '../../shared/layout/DefaultLayout';
import PageHeader from '../../shared/layout/DefaultListPageHeader';

import {
  CustomerStatus,
} from '../../../store/customers/types';

type Props = {
};

class CustomersAddContainer extends Component<Props> {
  render() {
    return (
      <DefaultLayout pageHeader={<PageHeader name="Neuer Kunde" filter={{status:CustomerStatus.All}} onFilterToggle={() => {}} onFilterChange={() => {}} onPageNext={() => {}} onPagePrevious={() => {}} totalCount={0} limit={15} offset={0} />}>
        <div id="content">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-md-6 col-xl-4 mb-5">
                  <div className="form-group row">
                    <label htmlFor="type" className="col-sm-3 col-md-4 col-form-label">Typ</label>
                    <div className="col-sm-9 col-md-8">
                      <select id="type" className="custom-select">
                        <option value="1" selected>Filiale</option>
                        <option value="2">Person</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label htmlFor="name" className="col-sm-3 col-md-4 col-form-label">Name</label>
                    <div className="col-sm-9 col-md-8">
                      <input id="name" className="form-control" type="text" value="9001" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label htmlFor="company" className="col-sm-3 col-md-4 col-form-label">Firma</label>
                    <div className="col-sm-9 col-md-8">
                      <input id="company" className="form-control" type="text" value="Nordwind AG" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label htmlFor="territory" className="col-sm-3 col-md-4 col-form-label">Gebiet</label>
                    <div className="col-sm-9 col-md-8">
                      <input id="territory" className="form-control" type="text" value="Gebiet West" />
                    </div>
                  </div>
                  <div className="form-group row mb-5">
                    <label htmlFor="salesManager" className="col-sm-3 col-md-4 col-form-label">Vertriebsleiter</label>
                    <div className="col-sm-9 col-md-8">
                      <input id="salesManager" className="form-control" type="text" value="Neuhaus, Moritz" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label htmlFor="addressCO" className="col-sm-3 col-md-4 col-form-label">Adresse</label>
                    <div className="col-sm-9 col-md-8">
                      <input id="addressCO" className="form-control" type="text" value="Nordwest Zentrum" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-sm-9 offset-sm-3 col-md-8 offset-md-4">
                      <input id="street" className="form-control" type="text" value="Bauernweg 47" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-4 col-sm-3 offset-sm-3 col-md-3 offset-md-4">
                      <input id="postcode" className="form-control" type="text" value="60444" />
                    </div>
                    <div className="col-8 col-sm-6 col-md-5">
                      <input id="city" className="form-control" type="text" value="Frankfurt am Main" />
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-4">
                  <div className="form-group row">
                    <label htmlFor="email" className="col-sm-3 col-md-4 col-form-label">E-Mail</label>
                    <div className="col-sm-9 col-md-8">
                      <input id="email" className="form-control" type="text" value="" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label htmlFor="phone" className="col-sm-3 col-md-4 col-form-label">Telefon</label>
                    <div className="col-sm-9 col-md-8">
                      <input id="phone" className="form-control" type="text" value="069-43611916" />
                    </div>
                  </div>
                  <div className="form-group row mb-5">
                    <label htmlFor="mobile" className="col-sm-3 col-md-4 col-form-label">Mobil</label>
                    <div className="col-sm-9 col-md-8">
                      <input id="mobile" className="form-control" type="text" value="" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label htmlFor="status" className="col-sm-3 col-md-4 col-form-label">Status</label>
                    <div className="col-sm-9 col-md-8">
                      <select id="status" className="custom-select">
                        <option value="1">in Planung</option>
                        <option value="2" selected>Eröffnet</option>
                        <option value="3">Geschlossen</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label htmlFor="opening" className="col-sm-3 col-md-4 col-form-label">Er&ouml;ffnung</label>
                    <div className="col-sm-9 col-md-8">
                      <input id="opening" className="form-control" type="text" value="27.10.2007" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label htmlFor="closing" className="col-sm-3 col-md-4 col-form-label">Schlie&szlig;ung</label>
                    <div className="col-sm-9 col-md-8">
                      <input id="closing" className="form-control" type="text" value="" />
                    </div>
                  </div>
                </div>
                <div className="col-xl-4">
                  <div className="form-group row"><label className="col-12 col-form-label"><strong>Öffnungszeiten</strong></label>
                  </div>
                  <div className="form-group row">
                    <label htmlFor="mondayFrom" className="col-3 col-md-2 col-xl-3 col-form-label">Mo.</label>
                    <div className="col-4 col-sm-2 col-xl-4 mb-3">
                      <input id="mondayFrom" className="form-control" type="text" value="9:30" />
                    </div>
                    <div className="col-1 text-center px-4 d-sm-none d-xl-block">-</div>
                    <div className="col-4 col-sm-2 col-xl-4">
                      <input id="mondayTo" className="form-control" type="text" value="20:00" />
                    </div>
                    <div className="col-4 col-sm-2 col-xl-4 offset-3 offset-sm-1 offset-md-2 offset-xl-3">
                      <input id="monday2From" className="form-control" type="text" value="" />
                    </div>
                    <div className="col-1 text-center px-4 d-sm-none d-xl-block">-</div>
                    <div className="col-4 col-sm-2 col-xl-4">
                      <input id="monday2To" className="form-control" type="text" value="" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label htmlFor="tuesdayFrom" className="col-3 col-md-2 col-xl-3 col-form-label">Di.</label>
                    <div className="col-4 col-sm-2 col-xl-4 mb-3">
                      <input id="tuesdayFrom" className="form-control" type="text" value="9:30" />
                    </div>
                    <div className="col-1 text-center px-4 d-sm-none d-xl-block">-</div>
                    <div className="col-4 col-sm-2 col-xl-4">
                      <input id="tuesdayTo" className="form-control" type="text" value="20:00" />
                    </div>
                    <div className="col-4 col-sm-2 col-xl-4 offset-3 offset-sm-1 offset-md-2 offset-xl-3">
                      <input id="tuesday2From" className="form-control" type="text" value="" />
                    </div>
                    <div className="col-1 text-center px-4 d-sm-none d-xl-block">-</div>
                    <div className="col-4 col-sm-2 col-xl-4">
                      <input id="tuesday2To" className="form-control" type="text" value="" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label htmlFor="wednesdayFrom" className="col-3 col-md-2 col-xl-3 col-form-label">Mi.</label>
                    <div className="col-4 col-sm-2 col-xl-4 mb-3">
                      <input id="wednesdayFrom" className="form-control" type="text" value="9:30" />
                    </div>
                    <div className="col-1 text-center px-4 d-sm-none d-xl-block">-</div>
                    <div className="col-4 col-sm-2 col-xl-4">
                      <input id="wednesdayTo" className="form-control" type="text" value="20:00" />
                    </div>
                    <div className="col-4 col-sm-2 col-xl-4 offset-3 offset-sm-1 offset-md-2 offset-xl-3">
                      <input id="wednesday2From" className="form-control" type="text" value="" />
                    </div>
                    <div className="col-1 text-center px-4 d-sm-none d-xl-block">-</div>
                    <div className="col-4 col-sm-2 col-xl-4 mb-3">
                      <input id="wednesday2To" className="form-control" type="text" value="" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label htmlFor="thursdayFrom" className="col-3 col-md-2 col-xl-3 col-form-label">Do.</label>
                    <div className="col-4 col-sm-2 col-xl-4 mb-3">
                      <input id="thursdayFrom" className="form-control" type="text" value="9:30" />
                    </div>
                    <div className="col-1 text-center px-4 d-sm-none d-xl-block">-</div>
                    <div className="col-4 col-sm-2 col-xl-4">
                      <input id="thursdayTo" className="form-control" type="text" value="20:00" />
                    </div>
                    <div className="col-4 col-sm-2 col-xl-4 offset-3 offset-sm-1 offset-md-2 offset-xl-3">
                      <input id="thursday2From" className="form-control" type="text" value="" />
                    </div>
                    <div className="col-1 text-center px-4 d-sm-none d-xl-block">-</div>
                    <div className="col-4 col-sm-2 col-xl-4">
                      <input id="thursday2To" className="form-control" type="text" value="" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label htmlFor="fridayFrom" className="col-3 col-md-2 col-xl-3 col-form-label">Fr.</label>
                    <div className="col-4 col-sm-2 col-xl-4 mb-3">
                      <input id="fridayFrom" className="form-control" type="text" value="9:30" />
                    </div>
                    <div className="col-1 text-center px-4 d-sm-none d-xl-block">-</div>
                    <div className="col-4 col-sm-2 col-xl-4">
                      <input id="fridayTo" className="form-control" type="text" value="20:00" />
                    </div>
                    <div className="col-4 col-sm-2 col-xl-4 offset-3 offset-sm-1 offset-md-2 offset-xl-3">
                      <input id="friday2From" className="form-control" type="text" value="" />
                    </div>
                    <div className="col-1 text-center px-4 d-sm-none d-xl-block">-</div>
                    <div className="col-4 col-sm-2 col-xl-4 mb-3">
                      <input id="friday2To" className="form-control" type="text" value="" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label htmlFor="saturdayFrom" className="col-3 col-md-2 col-xl-3 col-form-label">Sa.</label>
                    <div className="col-4 col-sm-2 col-xl-4 mb-3">
                      <input id="saturdayFrom" className="form-control" type="text" value="9:30" />
                    </div>
                    <div className="col-1 text-center px-4 d-sm-none d-xl-block">-</div>
                    <div className="col-4 col-sm-2 col-xl-4">
                      <input id="saturdayTo" className="form-control" type="text" value="20:00" />
                    </div>
                    <div className="col-4 col-sm-2 col-xl-4 offset-3 offset-sm-1 offset-md-2 offset-xl-3">
                      <input id="saturday2From" className="form-control" type="text" value="" />
                    </div>
                    <div className="col-1 text-center px-4 d-sm-none d-xl-block">-</div>
                    <div className="col-4 col-sm-2 col-xl-4">
                      <input id="saturday2To" className="form-control" type="text" value="" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label htmlFor="sundayFrom" className="col-3 col-md-2 col-xl-3 col-form-label">So.</label>
                    <div className="col-4 col-sm-2 col-xl-4 mb-3">
                      <input id="sundayFrom" className="form-control" type="text" value="" />
                    </div>
                    <div className="col-1 text-center px-4 d-sm-none d-xl-block">-</div>
                    <div className="col-4 col-sm-2 col-xl-4">
                      <input id="sundayTo" className="form-control" type="text" value="" />
                    </div>
                    <div className="col-4 col-sm-2 col-xl-4 offset-3 offset-sm-1 offset-md-2 offset-xl-3">
                      <input id="sunday2From" className="form-control" type="text" value="" />
                    </div>
                    <div className="col-1 text-center px-4 d-sm-none d-xl-block">-</div>
                    <div className="col-4 col-sm-2 col-xl-4">
                      <input id="sunday2To" className="form-control" type="text" value="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DefaultLayout>
    )
  }
}

export default CustomersAddContainer;
