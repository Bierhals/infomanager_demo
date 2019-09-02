import React, { FunctionComponent } from 'react';

import SiteHeaderComponent from './SiteHeader';
import NavigationComponent from './Navigation';

type Props = {
  pageHeader?: React.ReactNode;
} 
const DefaultLayoutComponent: FunctionComponent<Props> = props => (
  <>
    <header className="fixed-top">
      <SiteHeaderComponent/>
      <NavigationComponent/>
      {props.pageHeader}
    </header>
    <main className="d-flex flex-column flex-md-row-reverse bd-highlight">
      {props.children}
    </main>
  </>
)

export default DefaultLayoutComponent;