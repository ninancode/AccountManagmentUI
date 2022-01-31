import axios from "axios";
import React, { useEffect } from "react";
import '../styling/bankAccountDetailsStyles.css';

export default function BankAccountDetails() {


    return(
        // <div className="account" >
            <div className="account">
                <div className="accountInfo">
                    <div class="accountInfoCol">
                        <h6 className='valueTitle'>Account #</h6>
                        {/* <p className="card-text">{props.request.accountId}</p> */}
                        <p className="accountText">123545</p>

                    </div>
                    <div class="accountInfoCol">
                        <h6 className='valueTitle'>Balance</h6>
                        {/* <p className="card-text">{props.request.currBalance}</p> */}
                        <p className="balanceText">123.00</p>

                    </div>
                </div>
                <div>
                        
                </div>
            </div>
        // </div>
    )
    
}