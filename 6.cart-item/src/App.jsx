import React from "react";
import CartItem from "./components/CartItem";
import "./App.css";

const cartItems = [
  {
    id: 1,
    imageUrl: "https://next-media.elkjop.com/image/dv_web_D180001351658/998785/ipad-pro-13-m5-1tb-wifi-solv.jpg",
    name: "Ipad Pro",
    quantity: 1,
    price: 35000,
  },
  {
    id: 2,
    imageUrl: "https://cdn1.smartprix.com/rx-iqHBj7Gcl-w1200-h1200/boat-airdopes-121-tr.jpg",
    name: "Air Dopes",
    quantity: 1,
    price: 1200,
  },
  {
    id: 3,
    imageUrl: "https://m.media-amazon.com/images/I/71L64It8hIL._AC_SL1500_.jpg",
    name: "Smart Band",
    quantity: 3,
    price: 1500,
  },
  {
    id: 4,
    imageUrl: "https://wallpapercave.com/wp/wp3182445.jpg",
    name: "Shoes",
    quantity: 2,
    price: 2400,
  },
];

function App() {
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  return (
    <div className="app-container">
      <h1 className="heading">Shopping Cart</h1>
      <div className="cart-container">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <hr className="line" />
      <h2 className="total">Total: ₹{totalAmount}</h2>
    </div>
  );
}

export default App;
