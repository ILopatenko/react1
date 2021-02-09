import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

const ControlledInputs = () => {
  const [people, setPeople] = useState([]);

  const [user, setUser] = useState({ firstName: '', email: '', age: '' });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.firstName && user.email && user.age) {
      const newUser = { ...user, id: new Date().getTime().toString() };
      setPeople([...people, newUser]);
      setUser({ firstName: '', email: '', age: '' });
    }
  };

  return (
    <>
      <article>
        <form className='form'>
          <div className='form-control'>
            <label htmlFor='firstName'>Name : </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={user.firstName}
              onChange={handleChange}
            />
          </div>

          <div className='form-control'>
            <label htmlFor='email'>Email : </label>
            <input
              type='email'
              id='email'
              name='email'
              value={user.email}
              onChange={handleChange}
            />
          </div>

          <div className='form-control'>
            <label htmlFor='age'>Age : </label>
            <input
              type='text'
              id='age'
              name='age'
              value={user.age}
              onChange={handleChange}
            />
          </div>

          <button type='submit' onClick={handleSubmit}>
            add person
          </button>
        </form>
        {people.map((person, index) => {
          const { id, firstName, email } = person;
          return (
            <div className='item' key={id}>
              <h4>{person.firstName}</h4>
              <p>{person.email}</p>
              <p>{person.age}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
