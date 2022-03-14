import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import HomePage from './pages/HomePage';
import SingleProductPage from './pages/SingleProductPage';
import CartItemPage from './pages/CartItemPage';

import './App.css';
import AuthWrapper from './pages/AuthWrapper';
import { Footer, Navbar } from './components';
// import { Footer, Navbar } from './components';
// import { Banner, LearnMore, Popular, Products, Testimonials } from './container';

const App = () => (
  <AuthWrapper>
    <Router basename={"/medexnew"} >
      <Navbar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/SingleProductPage" component={SingleProductPage} />
        <Route exact path="/cart" component={CartItemPage} >
        </Route>
      </Switch>
      <Footer />
    </Router>
  </AuthWrapper>


  // <div className="App">
  //   <Routes  >
  //     <Route path="/" element={<HomePage />} />
  //     <Route path="/SingleProductPage" element={<SingleProductPage />} />
  //     <Route path="/CartItemPage" element={<CartItemPage />} />
  //   </Routes>
  // </div>
);

export default App;
