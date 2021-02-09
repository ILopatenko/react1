import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function
const reducer = (state, action) => {};

const defaultState = {
  people: data,
  isModuleOpen: true,
  modalContent: 'hello from modalContent',
};

const Index = () => {
  const [name, setName] = useState('');

  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
    } else {
    }
  };

  return (
    <>
      {state.isModuleOpen && <Modal modalContent={state.modalContent} />}
      <form onSubmit={handleSubmit} className='form'>
        <div>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type='submit' className='button'>
          Add an item to list
        </button>
      </form>
      {state.people.map((el) => {
        return (
          <div key={el.id}>
            <h4>{el.name}</h4>
          </div>
        );
      })}
    </>
  );
};

export default Index;
