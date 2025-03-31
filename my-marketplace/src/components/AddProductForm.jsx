import React, { useState } from 'react';

const AddProductForm = ({ addProduct }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = { name, description, price, image };
    addProduct(newProduct);
    setName('');
    setDescription('');
    setPrice('');
    setImage(null);
  };

  return (
    <form onSubmit={handleSubmit} className="add-product-form">
      <h2>Add a Product</h2>
      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        placeholder="Product Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="file"
        onChange={handleImageChange}
      />
      {image && <img src={image} alt="Preview" style={{ width: '100%', marginTop: '10px' }} />}
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProductForm;
