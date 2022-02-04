import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import NewCustomer from "./NewCustomer";
import LookUp from "./LookUp";
import Accounts from "./Accounts";
import Login from "./Login";
import Nav from "./Nav";
import Transaction from "./Transaction";

export default function RoutingComponent() {
    const [id, setId] = useState("");

    const getId = (loginID) => {
        setId(loginID);
    }

    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Login getId={getId}/>} />
                <Route exact path="/lookup"
                    element={
                        <div>
                            <Nav role={1} />
                            <LookUp />
                        </div>
                    }
                />
                <Route exact path="/newcustomer"
                    element={
                        <div>
                            <Nav role={1} />
                            <NewCustomer />
                        </div>
                    }
                />
                <Route exact path="/accounts"
                    element={
                        <div>
                            <Nav role={2} />
                            <Accounts id={id}/>
                        </div>
                    }
                />
                <Route exact path="/transaction"
                    element={
                        <div>
                            <Nav role={2} />
                            <Transaction id={id}/>
                        </div>
                    }
                />
            </Routes>
        </Router>
    )
}