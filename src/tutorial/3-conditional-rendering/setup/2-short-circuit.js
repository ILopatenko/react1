import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {

  const [text, setText] = useState('');

  /* const firstValue = text || 'hello world';
  const secondValue = text && 'hello world'; */

  return <>
    <h2>{text || 'hello'}</h2>
    {!text && <h2>hello world!</h2>}
  </>
};

export default ShortCircuit;
