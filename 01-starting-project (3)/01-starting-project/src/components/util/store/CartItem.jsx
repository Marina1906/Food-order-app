export default function CartItem ({name, quantity, price}) {
    return <li className="cart-item">
        <p>
            NAME - QTY x PRICE
        </p>
        <p className="cart-item-actions">
            
<button>-</button>
<span>QTY</span>
<button>+</button>
        </p>
    </li>
}