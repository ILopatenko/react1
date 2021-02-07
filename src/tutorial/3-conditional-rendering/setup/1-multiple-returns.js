import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users/QuincyLarson';


const MultipleReturns = () => {
  const [loading, setLoading] = useState(true);
  
  return <>
  <button type='button' className='btn' onClick={()=>setLoading(!loading)}>change loading</button>
    {loading === true ? <h2>Current loading is TRUE</h2> : <h2>Current loading is FALSE</h2>}
  </>
  
};

export default MultipleReturns;
