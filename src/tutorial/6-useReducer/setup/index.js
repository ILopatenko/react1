import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';

//What is reducer function?
//It gets a specific state and an action to do (ACTION TYPE). Action describes what needs to do with a state (how to modify it).
//It should return a STATE
const reducer = (state, action) => {
  /*  console.log('state is: ');
  console.log(state);
  console.log('action is: ');
  console.log(action); */

  if (action.type === 'ADD_ITEM') {
    const allClients = [...state.people, action.payload];
    return {
      ...state,
      people: allClients,
      isModalOpen: true,
      modalContent: 'Item was added',
    };
  }
  if (action.type === 'NO_VALUE') {
    return {
      ...state,
      isModalOpen: true,
      modalContent: 'Name is empty',
    };
  } else {
    throw new Error('Try again!');
  }
};

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
  return (
    <>
      {/* Just a text note for future users */}
      <div>
        <h3>Enter a name of a new client and hit the button</h3>
      </div>
      {/* Check if isModalOpen is TRUE and module MODAL is exists */}
      {state.isModalOpen && <Modal modalContent={state.modalContent} />}
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
          <div key={el.id}>
            Client name is {el.name.toUpperCase()} and an unique ID is {el.id}
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
