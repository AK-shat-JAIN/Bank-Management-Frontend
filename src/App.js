import React from 'react';
import {BrowserRouter , Routes, Route} from 'react-router-dom';
import './App.css';
import LoginPage from './components/LoginPage';
import CustomerLogin from './components/CustomerLogin.js';
import EmployeeLogin from './components/EmployeeLogin';
import EmployeeControl from './components/EmployeeControl';
import PostEmployee from './components/AdminEmployee';
import PostCustomer from './components/AdminCustomer';
import CustomerControl from './components/CustomerControl';
import PostBranch from './components/AdminBranch';
import Transaction from './components/Transaction';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element = { <LoginPage/> }/>
        <Route path='/customer/login' exact element = { <CustomerLogin/> } />
        <Route path='/employee/login' exact element = { <EmployeeLogin/> } />
        <Route path='/employee' exact element = { <EmployeeControl/> } />
        <Route path='/admin/employee' exact element = { <PostEmployee/> } />
        <Route path='/admin/customer' exact element = { <PostCustomer/> } />
        <Route path='/admin/branch' exact element = { <PostBranch/> } />
        <Route path='/customer' exact element = { <CustomerControl/> }/>
        <Route path='/customer/transaction' exact element = { <Transaction/> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
