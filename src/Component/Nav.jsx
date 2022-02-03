import React from "react";
import { NavLink } from "react-router-dom";
import "../styling/navStyling.css";

export default function Nav(props) {
    return (
        <nav className="nav">
            {props.role == 1 ? 
            <div className="navContainer">
                <NavLink to="/lookup" 
                    className={({ isActive }) => (isActive ? "active" : "inactive")}>
                        Lookup PAN
                </NavLink>
                <NavLink to="/newcustomer"
                    className={({ isActive }) => (isActive ? "active" : "inactive")}>
                        Create Account
                    </NavLink>
                <NavLink to="/" className="inactive">Logout</NavLink>
            </div>
            :
            <div className="navContainer">
                <NavLink to="/accounts"
                    className={({ isActive }) => (isActive ? "active" : "inactive")}>
                        View Accounts
                    </NavLink>
                <NavLink to="/transaction"
                    className={({ isActive }) => (isActive ? "active" : "inactive")}>
                    Start Transaction
                </NavLink>
                <NavLink to="/" className="inactive">Logout</NavLink>
            </div>
        }
        </nav>
    )
}