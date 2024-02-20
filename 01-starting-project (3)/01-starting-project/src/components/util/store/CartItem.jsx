import {currencyFormatter} from '../formatting.js';

export default function CartItem({
  name,
  quantity,
  price,
  onIncreasee,
  onDecrease,
}) {
  return (
    <li className="cart-item">
      <p>
        {name} - {quantity} x {currencyFormatter.format (price)}
      </p>
      <p className="cart-item-actions">

        <button onClick ={onDecrease}>-</button>
        <span>{quantity}</span>
        <button onClick= {onIncreasee}>+</button>
      </p>
    </li>
  );
}
