import React from 'react';

const ErrorExample = () => {
  let title = 'random title';
  const handleClick = () => {
    console.log(title);
    title = 'ABSOLYTELY NEW TITLE';
  };
  return <React.Fragment>
    <h2>{title}</h2>
    <button type="button" className="btn" onClick={handleClick}> BUTTON </button>
  </React.Fragment>
};

export default ErrorExample;
