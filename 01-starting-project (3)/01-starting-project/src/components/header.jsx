import { useContext } from 'react';
import Button from './util/Button.jsx';
import logoImg from './../assets/logo.jpg';
import CartContext from './util/store/CartContext.jsx';

export default function Header() {
  const cartCtx = useContext(CartContext);

  // Check if cartCtx.items exists before reducing
  const totalCartItems = cartCtx.items ? cartCtx.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0) : 0;

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="A restaurant" />
        <h1>ReactFood</h1>
      </div>
      <nav>
        <Button textOnly>Cart ({totalCartItems})</Button>
      </nav>
    </header>
  );
}

