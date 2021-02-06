import React, { useState, useEffect } from 'react';
import { Fragment } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {

  const [value, setValue] = useState(0); 

  useEffect(() => {
    console.log('call useEffect!');
    document.title = `You have ${value} new messages!`;
  });

  console.log('render component');

  return <Fragment>
    <h1>{value}</h1>
    <button className='btn' onClick={() => setValue(value+1)}>Click me fast!</button>
  </Fragment>
};

export default UseEffectBasics;
