import React from "react";
import './App.css';
import './fonts/fonts.css';
import Logo from './assets/Logo.svg';
import Fondo from './assets/fondo.png'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Products, Cart } from './components';
import { CartProvider } from './context/Store';
import { cartState, cartReducer } from './context/CartReducer';
import styled from 'styled-components'



const Header = styled.header`
  background:linear-gradient(180deg, rgba(0, 0, 0, 0.76) 0%, rgba(0, 0, 0, 0) 73.31%), url(${Fondo});
  background-size:cover;
`

const localCart = JSON.parse(window.localStorage.getItem('cart'))
const initialState = { ...cartState, products: localCart || [] }
function App() {
  return (
    <Router>
      <CartProvider initialState={initialState} reducer={cartReducer}>
        <div className="App">
          <Header className="App-header">
            <nav className="navListContainer">
              <div>
                <img src={Logo} alt="Burguer" />
              </div>
              {/* <ul >
                <li>
                  <Link to="/products">Products</Link>
                </li>
                <li>
                  <Link to="/">Home</Link>
                </li>
              </ul> */}
              <Cart />
            </nav>
          </Header>
          <main className="mainContainer">
            <Switch>

              <Route path="/">
                <Products></Products>
              </Route>
            </Switch>

          </main>
          <footer className="footer"><img src={Logo} alt="Burguer" /></footer>
        </div>

      </CartProvider>
    </Router>
  );
}

export default App;
