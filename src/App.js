import './App.css';
import Home from './Component/Home';
import Login from './Component/Login';
import ManagerView from './Component/ManagerView';
import TopBar from './Component/TopBar';
import React from 'react';
import Collapsible from './Component/Collapsible';
import BankAccountDetails from './Component/BankAccountDetails';
import CustomerView from './Component/CustomerView';

function App() {
  return (
    <div>
      <header className="App-header">
        <Home/>
        <ManagerView/>
        {/* <Collapsible/> */}
        {/* <BankAccountDetails/> */}
        <CustomerView/>
        
      </header>
    </div>
  );
}

export default App;
