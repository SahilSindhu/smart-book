import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Home from './container/Home/Home'
import Products from './container/Products/Products'
import SecondaryFooter from './container/Home/components/Footer/Secondaryfooter/SecondaryFooter';
import Mainfooter from './container/Home/components/Footer/Mainfooter/Mainfooter';
import './App.scss';

class App extends Component {
  render() {
    return (
      <>
        <Route exact path="/" component={Home}/>
        <Route path="/products" component={Products}/>
        <SecondaryFooter/> 
        <Mainfooter/>
      </>
    );
  }
}

export default App;
