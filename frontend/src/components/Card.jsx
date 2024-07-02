import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../context/CartContext';

function Card({ name, price, img, link, src }) {
  const { cartItems, addItemToCart, updateItemQty } = useContext(CartContext);

  const existingItem = cartItems.find(item => item.name === name);
  const initialQty = existingItem ? existingItem.qty : 0;

  const [qty, setQty] = useState(initialQty);
  const [addedToCart, setAddedToCart] = useState(initialQty > 0);

  useEffect(() => {
    setAddedToCart(initialQty > 0);
  }, [initialQty]);

  const addItem = () => {
    setQty(qty + 1);
    updateItemQty(name, 1);
  };

  const subItem = () => {
    if (qty > 1) {
      setQty(qty - 1);
      updateItemQty(name, -1);
    }
  };

  const addToCart = () => {
    if (qty > 0) {
      const newItem = { name, img, price, src, link, qty };
      addItemToCart(newItem);
      setAddedToCart(true);
    }
  };

  return (
    <div className="bg-white w-[320px] text-[18px] pt-[13px] m-[20px] rounded-[35px] relative min-h-[480px] flex flex-col justify-between">
      <div className="flex justify-center items-center">
        <img src={img} alt={name} className="text-center h-[200px] m-5" />
      </div>
      <div className="flex flex-col items-center">
        <div className="text-center text-black">{name}</div>
        <div className="text-center mt-2">Price- <span className="text-red-500">{price}</span></div>
      </div>
      <div className="flex justify-evenly items-center mt-2">
        <div onClick={addItem} className="w-[70px] h-[35px] flex justify-center items-center bg-blue-800 text-white p-2 rounded hover:bg-[#0c2d5c] cursor-pointer">+</div>
        <div className="bg-[#b5d6fb] w-[140px] h-[35px] flex justify-center items-center rounded-md">{qty}</div>
        <div onClick={subItem} className="w-[70px] h-[35px] flex justify-center items-center bg-blue-800 text-white p-2 rounded hover:bg-[#0c2d5c] cursor-pointer">-</div>
      </div>
      <div className="w-[250px] mx-auto flex justify-center items-center mt-2">
        <div onClick={addToCart} className={`bg-${addedToCart ? '[#038D04]' : 'blue-800 hover:bg-[#0c2d5c]'} text-white w-[200px] h-[38px] py-2 rounded text-center cursor-pointer`}>
          {addedToCart ? 'Added to Cart' : 'Add to Cart'}
        </div>
      </div>
      <div className="cardSource text-center mt-2">
        Source: <span><a href={link} target="_blank" rel="noopener noreferrer" className="link text-green-600">{src}</a></span>
      </div>
    </div>
  );
}

export default Card;
