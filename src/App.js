import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Homescreen from './screens/Homescreen.js';
import ProductScreen from './screens/ProductScreen';
import LoginScreen from './screens/LoginScreen';
import CartScreen from './screens/CartScreen';
import RegisterScreen from './screens/RegisterScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentMethod from './screens/PaymentMethod';
import PlaceOrderScreen from './screens/PlaceOrderScreen';

const App = () => {

  return (
    <Router>
      <Header />
      <Container>
        <main>
          <Route path="/" component={Homescreen} exact></Route>
          <Route path="/login" component={LoginScreen} ></Route>
          <Route path="/cart" component={CartScreen} ></Route>
          <Route path="/register" component={RegisterScreen} ></Route>
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/shipping" component={ShippingScreen}></Route>
          <Route path="/payment" component={PaymentMethod}></Route>
          <Route path="/placeOrder" component={PlaceOrderScreen}></Route>
        </main>
      </Container>
      <Footer />

    </Router>
  );
}

export default App;
