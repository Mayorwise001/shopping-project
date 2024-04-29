import Home from "./homepage";
import NavBar from "./nav";
import ProductApp from "./cartpage";
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom' 
import { CartProvider } from './CartContext';
import Displaycart from "./displaycart";
import Checkout from "./checkout";

function App() {
  return (
    <CartProvider> {/* Wraps the app in the CartProvider */}
    <Router>
    <div className="App">

      <div className="nav-items">
      <NavBar />
      </div>
      <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route exact path="/products/">
          <ProductApp/>
        </Route>
        <Route exact path="/cart/">
          <Displaycart/>
        </Route>
        <Route exact path="/checkout">
          <Checkout/>
        </Route>
      </Switch>



    </div>
    </Router>
    </CartProvider>
  );
}

export default App;
