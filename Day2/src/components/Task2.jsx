import React, { useState } from "react";

function App() {
  const [search, setSearch] = useState("");

  const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mobile", price: 20000 },
    { id: 3, name: "Headphones", price: 2000 },
    { id: 4, name: "Smart Watch", price: 5000 },
    { id: 5, name: "Keyboard", price: 1500 },
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Product Search System</h2>

      <input
        type="text"
        placeholder="Search Product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div style={{ marginTop: "20px" }}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              
            >
              <h3>{product.name}</h3>
              <p>Price: ₹{product.price}</p>
            </div>
          ))
        ) : (
          <h3>No Products Found</h3>
        )}
      </div>
    </div>
  );
}

export default App;