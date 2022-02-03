import './App.css';
import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
// import AccountCreation from "./Component/AccountCreation";
// import CustomerView from "./Component/CustomerView";
// import Login from "./Component/Login";
// import ManagerView from "./Component/ManagerView";
// import Nav from "./Component/Nav"
import RoutingComponent from './Component/RoutingComponent';
import Logo from './logo.png';

function App() {
  const[user,setUser] = useState("");

  return (
    <div className='app'>
      <div className='appHeader'>
        <img className='logo' src={Logo}/>
        <h1>Piggy Banking</h1>
      </div>
      <div className='appBar'></div>
      <header className="appBody">
        <RoutingComponent/>
        {/* <Router>
          <Routes>
            <Route exact path='/' element={<Login/>}/>
            <Route exact path='/lookup' 
              element={ 
                <div>
                  <Nav role={1}/>
                  <ManagerView />
                </div>
              }
            />
            <Route exact path='/newcustomer' 
              element={ 
                <div>
                  <Nav role={1}/>
                  <AccountCreation />
                </div>
              }
            />
            <Route exact path='/accounts' 
              element={ 
                <div>
                  <Nav role={2}/>
                  <CustomerView />
                </div>
              }
            />
            <Route exact path='/transaction' 
              element={ 
                <div>
                  <Nav role={2}/>
                  <CustomerView />
                </div>
              }
            />
          </Routes>
        </Router> */}
      </header>
      </div>
  );
}

export default App;
