import React from "react";
import '../styling/newCustomerStyling.css';

export default function NewCustomer() {
    return (
        <div className='newCustomerBody'>
            <div className="newCustomer">
                <form className="newCustomerForm">
                    <div className="">
                        <label className="formLabel">PAN: </label>
                        <input className="newCustomerInput" type="number" min="0"/>
                    </div>
                    <div className="">
                        <label className="formLabel">Full Name: </label>
                        <input className="newCustomerInput" type="text" />
                    </div>
                    <div className="">
                        <label className="formLabel">Date of Birth: </label>
                        <input className="newCustomerInput" type="date" />
                    </div>
                    <div className="">
                        <label className="formLabel">Citizen ID: </label>
                        <input className="newCustomerInput" type="number" min="0"/>
                    </div>
                    <div className="">
                        <label className="formLabel" >Zip Code: </label>
                        <input className="newCustomerInput" type="number" min="0"/>
                    </div>
                    <div className="offCeter">
                        <label className="formLabel">Email: </label>
                        <input className="newCustomerInput" type="email" />
                    </div>
                    <div className="">
                        <label className="formLabel">Proof: </label>
                        <input className="newCustomerInput" type="file" />
                    </div>
                </form>
                <div className="center">
                    <button className="submitBtn">SUBMIT</button>
                </div>

            </div>
        </div>
    )
}