import React from "react";

function GoodItem(props) {
  const { id, title, price, description, images,addToBasket} = props;
  return (

    <div className="card" style={{ width: "95%",margin:'0 auto'}}>
      <img src={images[2]} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>

        <button  onClick={() => addToBasket({id,title,price,images})} className="card-btn btn btn-primary">
          Buy
        </button>
        <span  className="price float-right">{price}$</span>
      </div>
    </div>
  );
}

export default GoodItem;
