import React, { Component } from 'react';

import Navigation from './navigation/navigation.component';

function LayoutHOC(ComponentBeingWrapped) {
  // eslint-disable-next-line react/prefer-stateless-function
  class Layout extends Component {
    render() {
      return (
        <React.Fragment>
          <header>
            <Navigation />
          </header>
          <ComponentBeingWrapped {...this.props} />
        </React.Fragment>
      );
    }
  }

  return Layout;
}

export default LayoutHOC;
