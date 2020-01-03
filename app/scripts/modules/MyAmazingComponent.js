import React from 'react';

const MyAmazingComponent = ({ title, body, randomNumber }) => {

  return (
    <div className="wrapper wrapper--medium wrapper--center-items">
      <h2 className="section-title section-title--blue">{title}</h2>
      <p>{body}</p>
      <p>{randomNumber}</p>
    </div>
  )
};

export default MyAmazingComponent;
