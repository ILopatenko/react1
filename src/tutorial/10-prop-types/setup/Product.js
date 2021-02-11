import React from 'react';
import PropTypes from 'prop-types';
import defIm from '../../../assets/default-image.jpeg';

const Product = ({ id, name, price, image }) => {
  const isUrl = image && image.url;
  return (
    <article className='product'>
      {/*Custom check
      {image ? <img src={image.url} alt={name} /> : 'No image'} 
      */}
      <img src={isUrl || defIm} alt={name || 'NaMe'} />

      <h4>{name}</h4>

      <p>{id}</p>

      {/*Custom check
      <p>{price ? `price is: $${price}` : 'Price upon request!'}</p> 
      */}

      <p>${price || 999}</p>
    </article>
  );
};

Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

/* Product.defaultProps = {
  image: defIm,
  name: 'Name is missing ...',
  price: '$-0',
  id: 'ID is missing ...',
}; */

export default Product;
