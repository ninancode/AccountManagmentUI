import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";
import AccountCreation from "./AccountCreation";
import CustomerView from "./CustomerView";
import ManagerView from "./ManagerView";

export default function RoutingComponent() {
    return (
        <Router>
            <Switch>
                <Route path="/" component={Home}/>
                <Route path="/manager" component={ManagerView}/>
                <Route path="/createaccount" component={AccountCreation}/>
                <Route path="/customer" component={CustomerView}/>
            </Switch>
        </Router>
    )
}