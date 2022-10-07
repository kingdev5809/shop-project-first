import {
  faMinus,
  faPlus,
  faTrash,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import BasketItem from "./BasketItem";

function BasketList(props) {
  const { order, handleBasketShow = Function.prototype ,removeFromBasket,decrementQuantity,incrementQuantity} = props;

  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price * el.quantity;
  },0);

  return (
    <div className="basket">
      <div className="basket-title">
        <h3>Basket </h3>
        <i className="close-btn" onClick={handleBasketShow}>
          {" "}
          <FontAwesomeIcon icon={faX} />
        </i>
      </div>
      <ul className="items">
        {order.length ? (
          order.map((item) => {
            return <BasketItem removeFromBasket={removeFromBasket} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity} key={item.id} {...item} />;
          })
        ) : (
          <li className="alert-basket">Basket Is empty</li>
        )}

        {order.length ? (
          <div className="basket-total">
            <h3>Total {totalPrice}$</h3>
            <button className="btn btn-secondary">Checkout</button>
          </div>
        ) : (
          ""
        )}
      </ul>
    </div>
  );
}

export default BasketList;
