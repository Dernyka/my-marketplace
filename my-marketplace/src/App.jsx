import React, { useState } from 'react';
import ProductList from './components/ProductList';
import AddProductForm from './components/AddProductForm';
import ChatWindow from './components/ChatWindow';

function App() {
  const [products, setProducts] = useState([
    { name: 'Bicycle', description: 'A great mountain bike.', price: 250, image: '', seller: 'John' },
    { name: 'Laptop', description: 'Gaming laptop with high specs.', price: 1200, image: '', seller: 'Jane' }
  ]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const handleContactClick = (product) => {
    setSelectedProduct(product);
  };

  const closeChat = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="App">
      <header>
        <h1>My Marketplace</h1>
      </header>
      <main>
        {!selectedProduct ? (
          <>
            <AddProductForm addProduct={addProduct} />
            <ProductList products={products} onContactClick={handleContactClick} />
          </>
        ) : (
          <ChatWindow
            productName={selectedProduct.name}
            sellerName={selectedProduct.seller}
            closeChat={closeChat}
          />
        )}
      </main>
    </div>
  );
}

export default App;
