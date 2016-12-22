import React from 'react';

const Layout = ({content = () => null }) => (
  <div id="wrapper">
    <div id="content">
      {content()}
    </div>
  </div>
);

export default Layout;
