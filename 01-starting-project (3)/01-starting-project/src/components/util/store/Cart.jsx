import {useContext} from 'react';

import Modal from './Modal';
import CartContext from './CartContext.jsx';
import { currencyFormatter } from '../formatting.js';

export default function Cart () {
  const cartCtx = useContext (CartContext);

  const cartTotal = cartCtx.items.reduce (
    (totalPrice, item )=> totalPrice + item.quantity * item.price, 
    0
    );

  return (
    <Modal className="cart">
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.Ctx.items.map ((item) => (
        <li key= {item.id}>
            {item.name} - {item.quantity}
        </li>
        ))}
      </ul>
      <p className='cart-total'>{currencyFormatter}</p>
      </Modal>
  );
        }
