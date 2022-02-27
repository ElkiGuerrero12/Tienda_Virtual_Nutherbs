import logo from './logo.svg';
import './App.css';
import NavBar from './components/header/NavBar';
import ItemListContainer from './components/main/ItemListContainer';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemDetailContainer from './components/main/ItemDetailContainer';
import Cart from './components/header/Cart';
import CartProvider from './context/CartProvider';
import TerminarCompra from './components/header/TerminarCompra';
import Footer from './components/footer/Footer';



function App() {
  return (
   <CartProvider>

<BrowserRouter>
  <p>
    <NavBar />
    <Switch>
          <Route exact path="/">
            <ItemListContainer />
          </Route>
          <Route path="/detalle/:itemId">
            <ItemDetailContainer />
          </Route>
          <Route path="/category/:categoryId">
            <ItemListContainer />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/terminarcompra">
            <TerminarCompra />
          </Route>
        </Switch>
        <Footer />
    
  </p> 
  </BrowserRouter>

   </CartProvider> 
  
  );
}

export default App;
