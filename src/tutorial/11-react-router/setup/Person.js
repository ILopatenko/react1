import React, { useState, useEffect } from 'react';
import { data } from '../../../data';
import { Link, useParams } from 'react-router-dom';
const Person = () => {
  const { id } = useParams();
  const [name, setName] = useState('default name');

  useEffect(() => {
    const newPerson = data.find((el) => el.id === parseInt(id));
    setName(newPerson.name);
  }, []);

  return (
    <div>
      <h2>Name is: {name}</h2>
      <p>ID is: {id}</p>
      <Link to='/people' className='btn'>
        Back to people page
      </Link>
    </div>
  );
};

export default Person;
