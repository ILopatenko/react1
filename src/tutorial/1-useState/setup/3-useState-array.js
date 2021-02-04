import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {

  //Set up an initial state as an array
  const [people, setPeople] = React.useState(data);

  return <>
    {
      people.map(person => {
        const {id, name} = person;
        const removeItem = id => {
          let newPeople = people.filter(person => person.id !== id)
          setPeople(newPeople);
        }
        return <div key={id} className="item">
  
          <h4>{name}</h4>
          <button className="btn" onClick={() => {removeItem(id)}}> Delete!  </button>
 
        </div>
      })

    }
    <button className="btn" onClick={() => setPeople([])}> {people.length === 0 ? 'All the items were already deleted' : 'CLEAR ALL THE ITEMS'} </button>
  </>
};

export default UseStateArray;
 