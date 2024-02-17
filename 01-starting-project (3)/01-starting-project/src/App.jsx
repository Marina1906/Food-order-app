import Header from './components/header.jsx';
import Meals from './components/Meals.jsx';
import { CartContextProvider } from './components/util/store/CartContext.jsx';
function App() {
  return (
    <CartContextProvider>
    <Header/>
  <Meals/>
    </CartContextProvider>
  );
}
export default App;
