import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function Cart(props) {
    const {quantity = 0, handleBasketShow= Function.prototype } = props
    return (
        <div className='cart' onClick={handleBasketShow}>
            <i className="bx bxs-cart icon-single">
                  <FontAwesomeIcon icon={faCartShopping} />
                </i>
                {quantity  ? <span className="badge badge-danger">{quantity}</span> : <span className="badge badge-danger">0</span>}
        </div>
    );
}

export default Cart;