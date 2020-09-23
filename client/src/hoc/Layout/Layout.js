// Packages
import React from 'react';

// Components
import Aux from '../Aux/Aux';
import Toolbar from '../../UI/Toolbar/Toolbar';

const Layout = (props) => {
  return (
    <Aux>
      <Toolbar />
      {props.children}
    </Aux>
  );
}

export default Layout;