import React, { useState } from 'react';
import { data } from '../../../data';

// more components
// fix - context api, redux (for more complex cases)

//Main Component
const PropDrilling = () => {
  //UseState() hook for work with an object wich contains all the users
  const [people, setPeople] = useState(data);

  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };

  //Main return section of main component
  return (
    <section>
      <h3>Prop drilling</h3>
      <List people={people} removePerson={removePerson} />
    </section>
  );
};

const List = ({ people, removePerson }) => {
  return (
    <>
      {people.map((person) => (
        <SingleUser key={person.id} {...person} removePerson />
      ))}
    </>
  );
};

const SingleUser = ({ id, name, removePerson }) => {
  return (
    <div className='item'>
      <h4>
        Name is: {name} and ID is: {id}
      </h4>
      <button className='btn' onClick={() => removePerson(id)}>
        remove
      </button>
    </div>
  );
};

export default PropDrilling;
