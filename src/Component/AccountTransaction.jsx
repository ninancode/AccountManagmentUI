import React, {useState} from "react";
import '../styling/accountTransactionStyles.css';
export default function AccountTransaction(){
// export default function AccountTransaction(accountnUmber){

    return (
        <div className="accountTransactionBody">
            <div>
                <h6 className="valueTitle">Type</h6>
                    {/* <p className="card-text">{props.request.accountId}</p> */}
                <p className="accountText">Cash</p>
            </div>
            <div>
                <h6 className="valueTitle">Amount</h6>
                    {/* <p className="card-text">{props.request.accountId}</p> */}
                <p className="accountText">123.00</p>
            </div>
            <div>
                <h6 className="valueTitle">Date</h6>
                    {/* <p className="card-text">{props.request.accountId}</p> */}
                <p className="accountText">11/2/21</p>
            </div>

        </div>
    )
}