import React, { useEffect, useState } from "react";
import '../styling/loginStyles.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login(props) {
    const [id, setId] = useState("");
    const [password,setPassword] = useState("");
    const [fail, setFail] = useState(false);
    const navigate = useNavigate();

    const handleLoginSubmit = async()=> {
        try{
            const user = await axios.get(`http://localhost:8080/api/users/${id}`).then(res => res.data);
            if(password !== user.password) {
                setFail(true);
            } else {
                if(user.roleId == 1) {
                    navigate("/lookup");
                } else {
                    props.getId(id);
                    navigate("/accounts");
                }
            }
        } catch (err) {
            setFail(true);
        }
    }
    return (
        <div>
        <form className="form">
            <div className="formSection">
                <label className="formLabel">ID: </label>
                <input 
                    className="formInput"
                    type="text" 
                    name="id"
                    onChange={value =>{setId(value.target.value); setFail(false)}}
                />
            </div>
            <div className="formSection">
                <label className="formLabel">Password: </label>
                <input 
                    className="formInput"
                    type="password" 
                    name="password"
                    onChange={value => {setPassword(value.target.value); setFail(false)}}
                />
            </div>
            
        </form>
        {fail? 
            <div className='center'>
                <p className='error'>Invalid credentials</p>
            </div>
        : 
            <></>
        }
        <div className="center">
            <button className="submitBtn" onClick={handleLoginSubmit}>LOGIN</button>
        </div>
        </div>
    )
}
