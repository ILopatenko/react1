import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { reducer } from './reducer';

//Setup a default state - !OBJECT! - for useReducer() hook
const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: '',
};

const Index = () => {
  //useState() hook for create a new user (text input field at form in the main page)
  const [name, setName] = useState('');

  //useReducer() hook. state is a value of state for this hook. dispatch is a function to work with the state of this hook.
  //pass to useReduser() hook reducer function and default state - !OBJECT!
  //(default state can be setup as inline state or as a direct link to an outer state - !OBJECT! -
  //wich will contain all the properties wich we will use to work with data and app)
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();
    //Check if name exists and not an empty string
    if (name && name.trim() !== '') {
      //Logic block for case when name exists and not an empty string
      //Create an object with data from text input (name) and generate an unique ID with new Date().getTime().toString()
      const newClient = {
        id: new Date().getTime().toString(),
        name,
      };
      //Call dispatch with an object as a parameter (dispatch state). Object should contain ACTION TYPE! and can contain a payload
      dispatch({ type: 'ADD_ITEM', payload: newClient });
      setName('');
    }

    if (name.trim() === '') {
      dispatch({ type: 'NO_VALUE' });
      setName('');
    }
  };

  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  };

  return (
    <>
      {/* Just a text note for future users */}
      <div>
        <h3>Enter a name of a new client and hit the button</h3>
      </div>
      {/* Check if isModalOpen is TRUE and module MODAL is exists */}
      {state.isModalOpen && (
        <Modal modalContent={state.modalContent} closeModal={closeModal} />
      )}
      <form onSubmit={handleSubmit} className='form'>
        <div>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type='submit' className='btn'>
          Add a new client
        </button>
      </form>
      {/* Form for output to page all information about users from database (object with information) */}
      <form className='form'>
        <h3>List of all the clients:</h3>
        {state.people.map((el) => (
          <div key={el.id} className='item'>
            Client name is {el.name.toUpperCase()} and an unique ID is {el.id}
            <button
              className='btn'
              onClick={() => {
                dispatch({ type: 'DELETE_CLIENT', payload: el.id });
              }}
            >
              Delete
            </button>
          </div>
        ))}

        {/* Just a text note for future users */}
        <div>
          <h4>
            For this moment we have got {state.people.length} clients in our
            database!
          </h4>
        </div>
      </form>
    </>
  );
};
export default Index;

//summary: DISPATCH describes WHAT TO DO in different cases - check logic and choses a case.
//REDUSER contains ALL THE LOGIC for each possible case.
