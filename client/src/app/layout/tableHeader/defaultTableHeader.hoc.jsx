import React from 'react';

const DefaultTableHeaderHOC = (ComponentBeingWrapped) => {
  const DefaultTableHeader = props => (
    <React.Fragment>
      <main className="card bg-light">
        <div className="card-header">
          <div className="d-flex">
            <div className="flex-grow-1">
              <h3>test</h3>
            </div>
            <div>Knöpfe</div>
          </div>
        </div>
        <div className="card-body">
          <ComponentBeingWrapped {...props} />
        </div>
      </main>
    </React.Fragment>
  );

  return DefaultTableHeader;
};

export default DefaultTableHeaderHOC;
