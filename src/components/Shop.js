import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import BasketList from "./BasketList";
import Cart from "./Cart";
import GoodList from "./GoodList";

import Loader from "./Loader";

function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isBasketshow, setIsBasketshow] = useState(false);

  const addToBasket = (item) => {
    const itemIndex = order.findIndex((orderItem) => orderItem.id === item.id);

    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      };
      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          };
        } else {
          return orderItem;
        }
      });

      setOrder(newOrder);
    }
    toast.success('Goods added to basket successfully')
  };
  const handleBasketShow = () => {
    setIsBasketshow(!isBasketshow);
  };
  const removeFromBasket = (itemID) => {
    const newOrder = order.filter((item) => item.id !== itemID);
    setOrder(newOrder);
    toast.error('Goods remove from basket successfully')
    
  };
  const incrementQuantity = (itemId) => {
    const newOrder = order.map((el) => {
      if (el.id === itemId) {
        const newQuantity = el.quantity + 1;
        return {
          ...el,
          quantity: newQuantity,
        };
      } else {
        return el;
      }
    });
    setOrder(newOrder)
  };

  const decrementQuantity = (itemId) => {
    const newOrder = order.map((el) => {
      if (el.id === itemId) {
        const newQuantity = el.quantity - 1;
        return {
          ...el,
          quantity: newQuantity >= 0 ? newQuantity : 0
        };
      } else {
        return el;
      }
    });
    setOrder(newOrder)
   
  };

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products?offset=11&limit=12")
      .then((res) => res.json())
      .then((data) => {
        setGoods(data);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {isBasketshow ? (
        <BasketList
          order={order}
          handleBasketShow={handleBasketShow}
          removeFromBasket={removeFromBasket}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}

        />
      ) : null}
      <Cart handleBasketShow={handleBasketShow} quantity={order.length} />
      {loading ? (
        <Loader />
      ) : (
        <GoodList goods={goods} addToBasket={addToBasket} />
      )}
    </div>
  );
}

export default Shop;
