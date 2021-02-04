import React, { useState } from 'react';
import { Fragment } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const decrease = () => setValue(value - 1);
  const increase = () => setValue (value + 1);


  const complexIncrease = () => {
    setTimeout(() => {
      //setValue(value + 1);
      setValue((currentState) => {
        return currentState + 1;
      });
    }, 2000);
  };


  return <Fragment>
    <section style={{margin: '4rem 0'}}>
      <h2>Regular counter</h2>
      <h1>{value}</h1>
      <button className='btn' onClick={increase}>+</button>
      <button className='btn' onClick={() => {setValue(0)}}>RESET to 0</button>
      <button className='btn' onClick={decrease}>-</button>
    </section>

    <section style={{margin: '4rem 0'}}>
      <h2>More complex counter</h2>
      <h1>{value}</h1>

      <button className='btn' onClick={complexIncrease}>increase</button>
     
    </section>
  </Fragment>
};

export default UseStateCounter;
