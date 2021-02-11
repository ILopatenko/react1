import React, { useState, useEffect } from 'react';
import { useFetch as somethingUnclear } from './2-useFetch';

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const apiUrl = 'https://course-api.com/javascript-store-products';

const Example = () => {
  const { loading, products } = somethingUnclear(apiUrl);

  return (
    <div>
      <h2>{loading ? 'loading...' : 'data'}</h2>

      {products.map((el) => (
        <div className='container'>
          <h2>Item name is: {el.fields.name}</h2>
          <h3>Item ID is: {el.id}</h3>
        </div>
      ))}
    </div>
  );
};

export default Example;
