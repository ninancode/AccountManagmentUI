import axios from "axios";
import React, { useEffect, useState } from "react";
import "../styling/bankAccountDetailsStyles.css";
// import Collapsible from "./Collapsible";
import AccountTransaction from "./AccountTransaction";

export default function BankAccountDetails() {
    const [transactionList, setTransactionList] = useState("");
    const [open, setOpen] = useState(false);


    return(
        // <div className="account" >
        <div onClick={()=> setOpen(!open)}>
            <div className="account">
                <div className="accountInfo">
                    <div class="accountInfoCol">
                        <h6 className="valueTitle">Account #</h6>
                        {/* <p className="card-text">{props.request.accountId}</p> */}
                        <p className="accountText">123545</p>

                    </div>
                    <div className="accountInfoCol">
                        <h6 className="valueTitle">Balance</h6>
                        {/* <p className="card-text">{props.request.currBalance}</p> */}
                        <p className="balanceText">123.00</p>

                    </div>
                </div>

                {open? 
                <div className="">

                    <AccountTransaction/>
                    <AccountTransaction/>
                    </div>
                    : 
                    <></>
                }

                <div>
                    <div className='spacing'>

                    </div>
                        
                </div>
            </div>
        </div>

    )
    
}