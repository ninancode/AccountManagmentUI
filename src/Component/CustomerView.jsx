import React, { useState } from "react";
import BankAccountDetails from "./BankAccountDetails";
import "../styling/customerViewStyles.css"

export default function CustomerView(props) {

    const [data, setData] = useState("");

    // useEffect(async() => {
    //     let res = await axios.get(`${request_url}/bankaccounts`);
    //     setData(res.data);
    // }, []);

    return (
        <div className="customerView">
        {/* {data.map((bankAccounts) => (
        <MyRequestDetails key={bankAccounts.accountId} bankAccounts={reqbankAccountsuest}/>
    ))} */}
            <BankAccountDetails/>
            <BankAccountDetails/>
            <BankAccountDetails/>
            <BankAccountDetails/>
            <BankAccountDetails/>
            <BankAccountDetails/>


        </div>
    )
}