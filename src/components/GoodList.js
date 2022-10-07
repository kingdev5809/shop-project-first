import React from "react";
import GoodItem from "./GoodItem";

export default function GoodList(props) {
  const { goods = [],addToBasket } = props;



  return (
    <div className="goods container">
      {goods.length ? (
        goods.map((item) => <GoodItem key={item.id} {...item}  addToBasket={addToBasket} />)
      ) : (
        <h4 className="found-alert">Nothing found</h4>
      )}
    </div>
  );
}


