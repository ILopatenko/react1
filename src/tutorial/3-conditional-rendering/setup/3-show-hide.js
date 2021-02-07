import React, { useState, useEffect } from 'react';

const ShowHide = () => {

  const [showBlock, setShowBlock] = useState(true);


  return <>
    <button className='btn' onClick={()=>setShowBlock(!showBlock)}>{!showBlock?'SHOW the BLOCK':'HIDE the BLOCK'}</button>
    {showBlock && <Item />}
  </>
};


const Item = () => {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  };


  useEffect(()=>{
    window.addEventListener('resize', checkSize);
    return ()=>{
      window.removeEventListener('resize', checkSize)
    }
  }, []);
  return <section style={{marginTop:'2rem'}}>
    <h1>window</h1>
    <h2>size: {size}</h2>
  </section>
};



export default ShowHide;
