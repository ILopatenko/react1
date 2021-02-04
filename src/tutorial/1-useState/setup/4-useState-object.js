import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({name: "Peter", age: 25, message: "WTF?!?"});

  const newMessage = 'Hey whatsup?!?';

  const [name, setName] = useState('Peter');
  const [age, setage] = useState(25);
  const [message, setMessage] = useState('hey guys!');

  const changeMessage = () => {
    setMessage('hello world!!!')
  };
  return <>
    <h3>Persone name is: {name}.</h3>
    <h3>Persone name is: {age}.</h3>
    <h3>Persone message is: {message}.</h3>

    <button className="btn" onClick={changeMessage}>Change persone message </button>
  </>
};

export default UseStateObject;
