import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {

  const [text, setText] = useState('');
  const [isError, setIsError] = useState(false);

  
  return <>
    <h2>{text || 'hello'}</h2>
    <button className='btn' onClick={()=>{setIsError(!isError)}}>{isError ? 'Delete an error': 'Create an error'}</button>
    <h4>Current status of errors:</h4>
    {isError ? <p>!!!WE HAVE GOT A <h4>BIG FAT ERROR!!!</h4></p>: <p>ALL GREAT! No any errors!</p>}
  </>
};

export default ShortCircuit;
