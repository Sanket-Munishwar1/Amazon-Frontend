import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Address from './components/Address';
import Payment from './components/Payment';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import AddProduct from './components/AddProduct';


const promise = loadStripe(
  "pk_test_51OdseBSDTSHdesnDVL5dRRo0fSn0de7ponjoMTvZkyYo1GrUxule6aV0GWk34ymqzzErvMRbLqOlpN1nUfoOTNq400fqlpjjq1"
)

function App() {


  return (
    <Router>
      <Container>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/address' element={<Address />}/>
          <Route path='/payment' element={<Elements stripe={promise}><Payment /></Elements>}/>
          <Route path='/addproduct' element={<AddProduct />}/>
        </Routes>

      </Container>
    </Router>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default App;
