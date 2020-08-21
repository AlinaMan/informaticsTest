import React from 'react';
import Header from '../components/header';

export default props => (
  <div className="main">
    <Header />
    <div className="main-content">
      {props.children}
    </div>
  </div>
);