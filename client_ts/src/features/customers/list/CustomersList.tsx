import React, { FunctionComponent } from 'react';

import DefaultLayout from '../../shared/layout/DefaultLayout';
import PageHeader from '../../shared/layout/DefaultListPageHeader';
import CustomersListFilter from './CustomersListFilter';

const styles = {
  th_pointer: {
    cursor: "pointer"
  }
}

const CustomersListComponent: FunctionComponent = props => (
  <DefaultLayout pageHeader={<PageHeader/>}>
    <CustomersListFilter/>
    <div id="content" className="flex-grow-1">
      <div className="table-responsive">
        <table className="table table-hover table-striped table-bordered mb-0">
          <thead className="table-dark bg-primary text-nowrap">
            <tr>
              <th style={styles.th_pointer}># <i className="fas fa-sort-up"></i></th>
              <th style={styles.th_pointer}>Name <i className="fas fa-sort"></i></th>
              <th style={styles.th_pointer}>Firma <i className="fas fa-sort"></i></th>
              <th style={styles.th_pointer}>Abteilung <i className="fas fa-sort"></i></th>
              <th style={styles.th_pointer}>Adresse <i className="fas fa-sort"></i></th>
              <th style={styles.th_pointer}>Telefon <i className="fas fa-sort"></i></th>
            </tr>
          </thead>
          <tbody className="text-nowrap">
            <tr>
              <td><a href="showShopCustomer.html">K-5012</a></td>
              <td>5012</td>
              <td>Nordwind AG</td>
              <td>Gebiet Ost</td>
              <td>Berlin, Steinfurter Str. 111</td>
              <td>030-76143619</td>
            </tr>
            <tr>
              <td><a href="showShopCustomer.html">K-5520</a></td>
              <td>5520</td>
              <td>Nordwind AG</td>
              <td>Gebiet Ost</td>
              <td>Halle, Ringelnatzstr. 112</td>
              <td>0345-6208918</td>
            </tr>
            <tr>
              <td><a href="showShopCustomer.html">K-9001</a></td>
              <td>9001</td>
              <td>Nordwind AG</td>
              <td>Gebiet West</td>
              <td>Frankfurt am Main, Nordwest Zentrum</td>
              <td>069-43611916</td>
            </tr>
            <tr>
              <td><a href="showShopCustomer.html">K-9524</a></td>
              <td>9524</td>
              <td>Nordwind AG</td>
              <td>Gebiet West</td>
              <td>Frankfurt am Main, Friesenring 171</td>
              <td>069-13488290</td>
            </tr>
            <tr>
              <td><a href="showEmployeeCustomer.html">K-10001</a></td>
              <td>Haberland, Carsten</td>
              <td>Nordwind AG</td>
              <td>EDV</td>
              <td>Berlin, Zentrale</td>
              <td>030-123456-1221</td>
            </tr>
            <tr>
              <td><a href="showEmployeeCustomer.html">K-10002</a></td>
              <td>Luther, Gabriele</td>
              <td>Nordwind AG</td>
              <td>Personal</td>
              <td>Berlin, Zentrale</td>
              <td>030-123456-1311</td>
            </tr>
            <tr>
              <td><a href="showEmployeeCustomer.html">K-10003</a></td>
              <td>Wilms, Cedric</td>
              <td>Nordwind AG</td>
              <td>EK/M</td>
              <td>Berlin, Zentrale</td>
              <td>030-123456-2100</td>
            </tr>
            <tr>
              <td><a href="showEmployeeCustomer.html">K-10004</a></td>
              <td>Wenig, Sylvia</td>
              <td>ACME GmbH</td>
              <td>Finanzen</td>
              <td>Berlin, Zentrale</td>
              <td>030-123456-1400</td>
            </tr>
            <tr>
              <td><a href="showEmployeeCustomer.html">K-10005</a></td>
              <td>Gessler, Antonio</td>
              <td>ACME GmbH</td>
              <td>Finanzen</td>
              <td>Berlin, Zentrale</td>
              <td>030-123456-1412</td>
            </tr>
            <tr>
              <td><a href="showEmployeeCustomer.html">K-10101</a></td>
              <td>Reis, Kristof</td>
              <td>Nordwind AG</td>
              <td>Gebiet West</td>
              <td>Berlin, Zentrale</td>
              <td>0175-8471830</td>
            </tr>
            <tr>
              <td><a href="showEmployeeCustomer.html">K-10105</a></td>
              <td>Hillmann, Danny</td>
              <td>Nordwind AG</td>
              <td>Gebiet Süd-Ost</td>
              <td>Berlin, Zentrale</td>
              <td>0151-7475797</td>
            </tr>
            <tr>
              <td><a href="showEmployeeCustomer.html">K-10106</a></td>
              <td>Engelmann, Svea</td>
              <td>Nordwind AG</td>
              <td>Gebiet Süd-Ost</td>
              <td>Berlin, Zentrale</td>
              <td>0170-2475587</td>
            </tr>
            <tr>
              <td><a href="showEmployeeCustomer.html">K-10107</a></td>
              <td>Neuhaus, Moritz</td>
              <td>Nordwind AG</td>
              <td>Gebiet West</td>
              <td>Berlin, Zentrale</td>
              <td>0170-5408286</td>
            </tr>
            <tr>
              <td><a href="showEmployeeCustomer.html">K-10108</a></td>
              <td>Spies, Celine</td>
              <td>Nordwind AG</td>
              <td>Gebiet Ost</td>
              <td>Berlin, Zentrale</td>
              <td>0160-4157758</td>
            </tr>
            <tr>
              <td><a href="showEmployeeCustomer.html">K-10109</a></td>
              <td>Kruse, Erich</td>
              <td>Nordwind AG</td>
              <td>Gebiet West</td>
              <td>Berlin, Zentrale</td>
              <td>0171-1384326</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </DefaultLayout>
)

export default CustomersListComponent;