import { useContext } from "react";

import Modal from "./Modal.jsx";
import CartContext from "./CartContext.jsx";
import { currencyFormatter } from "../formatting.js";
import input from "./Input.jsx";

export default function Checkout () {
 const cartCtx = useContext (CartContext);

 const cartTotal = cartCtx.items.reduce (
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );
    return <Modal>
        <form action="">
            <h2>Checkout</h2>
            <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>

            <Input label = "Full Name" type = "text" id = "full-name"/>
            <Input label = "E-Mail Address" type ="email" id ="email"/>
        </form>
    </Modal>
}