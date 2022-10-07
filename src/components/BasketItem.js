import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function BasketItem(props) {
  const { id, title, price, images, quantity, removeFromBasket,decrementQuantity,incrementQuantity } = props;
  return (
    <div>
      <li className="grid_4 item">
        <a style={{cursor:"pointer"}}  className="btn-remove" onClick={() => removeFromBasket(id)}>
          <i className="far fa-trash-alt"  >
            {" "}
            <FontAwesomeIcon icon={faTrash} />
          </i>
        </a>
        <div className="preview">
          <img src={images[2]} />
        </div>
        <div className="details" data-price="15.50">
          <h3>{title}</h3>
          {/* <p></p> */}
        </div>
        <div className="inner_container">
          <div className="col_1of2 align-center picker">
            <p>
              <a onClick={() => incrementQuantity(id)} href="#" className="btn-quantity plus">
                <i className="fas fa-plus">
                  {" "}
                  <FontAwesomeIcon icon={faPlus} />
                </i>
              </a>
              <div className="col_1of2 quantity-text">
                <p>
                  <span className="current_quantity">{quantity}</span> @ {price * quantity}
                  $
                </p>
              </div>
              <a onClick={()=> decrementQuantity(id)} href="#" className="btn-quantity minus">
                <i className="fas fa-minus">
                  {" "}
                  <FontAwesomeIcon icon={faMinus} />
                </i>
              </a>
            </p>
          </div>
        </div>
      </li>
    </div>
  );
}

export default BasketItem;
