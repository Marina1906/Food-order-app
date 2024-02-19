import {useContext} from 'react';

import Modal from './Modal';
import CartContext from './CartContext.jsx';

export default function Cart () {
  const cartCtx = useContext (CartContext);

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
      </Modal>
  );
        }
