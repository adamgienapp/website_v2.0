// Packages
import React from 'react';

// Components
import Aux from '../Aux/Aux';

const Layout = (props) => {
  return (
    <Aux>
      {props.children}
    </Aux>
  );
}

export default Layout;