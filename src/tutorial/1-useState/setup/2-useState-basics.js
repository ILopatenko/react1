import React, { useState } from 'react';

const UseStateBasics = () => {

  /* console.log(useState('ae!'));

  const value = useState('f..ck you!')[0];
  console.log(value);

  const handler = useState('f..ck you!')[1];
  console.log(value, handler); */


  const initialTitle = 'initial title as an example';
  const newTitle = 'ABSOLUTELY NEW TITLE';
  const [text, setText] = useState(initialTitle);
  const handleClick = () => {
    text !== initialTitle ? setText(initialTitle) : setText(newTitle);
  };
  
  return <React.Fragment>
    <h1>{text}</h1>
    <button className="btn" onClick={handleClick}> Let's try to change the title</button>
    </React.Fragment>
};

export default UseStateBasics;
