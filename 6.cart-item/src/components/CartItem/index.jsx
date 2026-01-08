import React from "react";
import "./index.css";

const CartItem = ({ item }) => {
  const { imageUrl, name, quantity, price } = item;
  const totalPrice = quantity * price;

  return (
    <div className="cart-item">
      <img src={imageUrl} alt={name} className="product-image" />
      <p className="product-name">{name}</p>
      <p className="quantity">{quantity}</p>
      <p className="price">₹{price}</p>
      <p className="total-price">₹{totalPrice}</p>
    </div>
  );
};

export default CartItem;
