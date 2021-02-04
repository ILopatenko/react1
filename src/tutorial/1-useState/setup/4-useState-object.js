import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({name: "Peter", age: 25, message: "WTF?!?"});
  console.log(person);
  const newMessage = 'Hey whatsup?!?';
  const changeMessage = () => {
    setPerson({...person, message : newMessage})
  };
  return <>
    <h3>Persone name is: {person.name}.</h3>
    <h3>Persone name is: {person.age}.</h3>
    <h3>Persone message is: {person.message}.</h3>

    <button className="btn" onClick={changeMessage}>Change persone message to {newMessage}</button>
  </>
};

export default UseStateObject;
