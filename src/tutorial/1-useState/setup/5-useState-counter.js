import React, { useState } from 'react';
import { Fragment } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(5);
  const decrease = () => {setValue(value - 1)};
  const increase = () => {setValue (value + 1)};
  return <Fragment>
    <section style={{margin: '4rem 0'}}>
      <h2>regular counter</h2>
      <h1>{value}</h1>
      <button className='btn' onClick={increase}>+</button>
      <button className='btn' onClick={() => {setValue(0)}}>RESET</button>
      <button className='btn' onClick={decrease}>-</button>
    </section>
  </Fragment>
};

export default UseStateCounter;
