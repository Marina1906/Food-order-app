import {useContext} from 'react';

import Modal from './Modal';
import CartContext from './CartContext.jsx';

export default function Cart () {
  useContext (CartContext);

  return (
    <Modal className="cart">
      <h2>Your Cart</h2>
      <ul />
    </Modal>
  );
}
