import React from 'react';
import Headshot from '../../static/headshot.jpg';

export default () => (
  <div className="diagonal-box">
    <div className="diagonal-box-content">
      <div className="flex">
        {' '}
        <img src={Headshot} alt="Zac Davis' Headshot" />
      </div>
      <div className="flex justify-end">
        <h3 className="p-1 m-1">Senior Front-End Engineer</h3>
      </div>
      <div className="flex justify-end">
        <h3 className="p-1 m-1">Cox Automotive</h3>
      </div>
    </div>
  </div>
);
