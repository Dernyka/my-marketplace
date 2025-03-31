import React from 'react';

const ProductList = ({ products, onContactClick }) => {
  return (
    <div className="product-list">
      <h2>Available Products</h2>
      <div className="product-grid">
        {products.map((product, index) => (
          <div key={index} className="product-item">
            {product.image && <img src={product.image} alt={product.name} style={{ width: '100%', borderRadius: '8px' }} />}
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <span>${product.price}</span>
            <button onClick={() => onContactClick(product)}>Contact Seller</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
