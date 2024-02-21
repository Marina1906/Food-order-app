import Cart from './components/util/store/Cart.jsx';
import Checkout from './components/util/store/Checkout.jsx';
import Header from './components/header.jsx';
import Meals from './components/Meals.jsx';
import { CartContextProvider } from './components/util/store/CartContext.jsx';
import { UserProgressContextProvider } from './components/util/store/UserProgressContext.jsx';

function App() {
  return (
    <UserProgressContextProvider>
    <CartContextProvider>
    <Header/>
  <Meals/>
  <Cart/>
  <Checkout/>
    </CartContextProvider>
    </UserProgressContextProvider>
  );
}
export default App;


