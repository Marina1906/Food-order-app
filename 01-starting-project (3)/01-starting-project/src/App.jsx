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
    </CartContextProvider>
    </UserProgressContextProvider>
  );
}
export default App;


