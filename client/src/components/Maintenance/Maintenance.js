import React from 'react';

import classes from './Maintenance.css';


const Maintenance = (props) => (
  <section id="about" className={classes.Maintenance}>
    <div className={[classes.MaintenanceMsg, 'section-title'].join(' ')}>
      Currently under maintenance.
      <br/><br/>
      Check back soon!
    </div>
  </section>
);

export default Maintenance;