import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';

const Index = () => {
  const [name, setName] = useState('');
  const [people, setPeople] = useState(data);
  const [showModal, setShowModal] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      setShowModal(true);
      setPeople([...people, { id: new Date().getTime().toString(), name }]);
      setName('');
    } else {
      setShowModal(true);
    }
  };

  return (
    <>
      <div>
        <h3>Enter a name of a new client and hit the button</h3>
      </div>
      {showModal && <Modal />}
      <form onSubmit={handleSubmit} className='form'>
        <div>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type='submit' className='btn'>
          Add a new user
        </button>
      </form>

      <form className='form'>
        <h3>List of all the clients:</h3>
        {people.map((el) => (
          <div key={el.id}>
            Client name is {el.name.toUpperCase()} and his unique ID is {el.id}
          </div>
        ))}
      </form>
    </>
  );
};

export default Index;
