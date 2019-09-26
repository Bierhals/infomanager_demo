import React, { FunctionComponent } from 'react';

import DefaultLayout from '../shared/layout/DefaultLayout';
import PageHeader from '../shared/layout/DefaultListPageHeader';
import {
  CustomerStatus,
} from '../../store/customerslist/types';

const styles = {
  th_pointer: {
    cursor: "pointer"
  }
}

const AssetListComponent: FunctionComponent = props => (
  <DefaultLayout pageHeader={<PageHeader name="Inventar" filter={{status:CustomerStatus.All}} onFilterToggle={() => {}} onFilterChange={() => {}} onPageNext={() => {}} onPagePrevious={() => {}} totalCount={0} limit={15} offset={0} />}>
    <div id="content" className="flex-grow-1">
      <div className="table-responsive">
        <table className="table table-hover table-striped table-bordered mb-0">
          <thead className="table-dark bg-primary text-nowrap">
            <tr>
              <th style={styles.th_pointer}># <i className="fas fa-sort-up"></i></th>
              <th style={styles.th_pointer}>Name <i className="fas fa-sort"></i></th>
              <th style={styles.th_pointer}>Typ <i className="fas fa-sort"></i></th>
              <th style={styles.th_pointer}>Variante <i className="fas fa-sort"></i></th>
              <th style={styles.th_pointer}>Seriennr. <i className="fas fa-sort"></i></th>
              <th style={styles.th_pointer}>Besitzer <i className="fas fa-sort"></i></th>
            </tr>
          </thead>
          <tbody className="text-nowrap">
            <tr>
              <td><a href="#">22115577</a></td>
              <td>9001KA01</td>
              <td>Kasse</td>
              <td>Beetle L</td>
              <td></td>
              <td>9001</td>
            </tr>
            <tr>
              <td><a href="#">23115577</a></td>
              <td>9001 Geldlade</td>
              <td>Geldlade</td>
              <td>KA-21</td>
              <td></td>
              <td>9001</td>
            </tr>
            <tr>
              <td><a href="#">24115577</a></td>
              <td>9001KA01</td>
              <td>Scanner</td>
              <td>Siemens</td>
              <td></td>
              <td>9001</td>
            </tr>
            <tr>
              <td><a href="#">25115577</a></td>
              <td>9001KA01</td>
              <td>Drucker</td>
              <td>ND69</td>
              <td></td>
              <td>9001</td>
            </tr>
            <tr>
              <td><a href="#">26115577</a></td>
              <td>9001KA01</td>
              <td>Kundendisplay</td>
              <td>BA88</td>
              <td></td>
              <td>9001</td>
            </tr>
            <tr>
              <td><a href="#">27115577</a></td>
              <td>9001KA01</td>
              <td>Bedienderdisplay</td>
              <td>BA77</td>
              <td></td>
              <td>9001</td>
            </tr>
            <tr>
              <td><a href="#">28115577</a></td>
              <td>9001KA01</td>
              <td>Tastatur</td>
              <td>TA74</td>
              <td></td>
              <td>9001</td>
            </tr>
            <tr>
              <td><a href="#">30547849</a></td>
              <td>Fil9001.nordwind.test</td>
              <td>PC</td>
              <td>ThinkCentre M70z</td>
              <td>MJDGZE4</td>
              <td>9001</td>
            </tr>
            <tr>
              <td><a href="#">31457845</a></td>
              <td>Fil9001.nordwind.test</td>
              <td>Monitor</td>
              <td>L1900pa</td>
              <td>V1GM065</td>
              <td>9001</td>
            </tr>
            <tr>
              <td><a href="#">28147528</a></td>
              <td>9001 MDE</td>
              <td>MDE</td>
              <td>BHT5000</td>
              <td></td>
              <td>9001</td>
            </tr>
            <tr>
              <td><a href="#">29563578</a></td>
              <td>9001 Drucker</td>
              <td>Drucker</td>
              <td>Kyocera 1300</td>
              <td></td>
              <td>9001</td>
            </tr>
            <tr>
              <td><a href="#">EWV06241</a></td>
              <td>9001 Kopierer</td>
              <td>Kopierer</td>
              <td>Canon C475 III</td>
              <td>EWV06241</td>
              <td>9001</td>
            </tr>
            <tr>
              <td><a href="#">LDR4829GF</a></td>
              <td>NW-NB-0078</td>
              <td>Laptop</td>
              <td>DELL XR593</td>
              <td>LDR4829GF</td>
              <td>Neuhaus, Moritz</td>
            </tr>
            <tr>
              <td><a href="#">83298598234786234</a></td>
              <td>Handy Neuhaus</td>
              <td>Handy</td>
              <td>IPhone 6S</td>
              <td>83298598234786234</td>
              <td>Neuhaus, Moritz</td>
            </tr>
            <tr>
              <td><a href="#">385723957328</a></td>
              <td>Handy Neuhaus</td>
              <td>SIM-Karte</td>
              <td>Telekom</td>
              <td>385723957328</td>
              <td>Neuhaus, Moritz</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </DefaultLayout>
)

export default AssetListComponent;