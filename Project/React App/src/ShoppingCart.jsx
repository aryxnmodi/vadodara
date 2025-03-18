import React, { useState, useMemo } from "react";

const products = [
  { id: 1, name: "Laptop", price: 35000 },
  { id: 2, name: "Phone", price: 15000 },
  { id: 3, name: "Tablet", price: 4999 },
];

export default function ShoppingCart() {
  const [cart, setCart] = useState([]);


  const addToCart = (product) => {
    setCart([...cart, product]);
  };


  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };


  const totalPrice = useMemo(() => {
    console.log("Calculating total price..."); 
    return cart.reduce((total, item) => total + item.price, 0);
  }, [cart]); 

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h1 className="text-xl font-bold mb-4">🛒 Shopping Cart</h1>

      {/* Product List */}
      <div className="border p-4 rounded-lg">
        <h2 className="font-semibold">Products</h2>
        {products.map((product) => (
          <div key={product.id} className="flex justify-between items-center p-2 border-b">
            <span>{product.name} - ${product.price}</span>
            <button 
              onClick={() => addToCart(product)} 
              className="bg-blue-500 text-white px-3 py-1 rounded">
              Add
            </button>
          </div>
        ))}
      </div>

      {/* Cart Section */}
      <div className="border p-4 rounded-lg mt-4">
        <h2 className="font-semibold">Cart</h2>
        {cart.length === 0 ? (
          <p className="text-gray-500">Cart is empty</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center p-2 border-b">
              <span>{item.name} - ${item.price}</span>
              <button 
                onClick={() => removeFromCart(item.id)} 
                className="bg-red-500 text-white px-3 py-1 rounded">
                Remove
              </button>
            </div>
          ))
        )}
        <h3 className="font-bold mt-4">Total: ${totalPrice}</h3>
      </div>
    </div>
  );
}