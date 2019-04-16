import React, { Component } from 'react';

import Navigation from './navigation/navigation.component';

function LayoutHOC(ComponentBeingWrapped) {
  // eslint-disable-next-line react/prefer-stateless-function
  class Layout extends Component {
    render() {
      return (
        <div className="app">
          <header>
            <Navigation />
          </header>
          <main role="main" className="container-fluid">
            <ComponentBeingWrapped {...this.props} />
          </main>
        </div>
      );
    }
  }

  return Layout;
}

export default LayoutHOC;
