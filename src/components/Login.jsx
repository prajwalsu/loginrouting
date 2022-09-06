import React, { useState } from 'react'
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
    const [LoginData, setLoginData] = useState({
        email:"",
        password:"",
    });

    let Navigate = useNavigate();

    const handleChange = (e) => {
        setLoginData({
            ...LoginData,
        [e.target.name]: e.target.value,
    });
    console.log(LoginData);
};

const handleSubmit = (e) => {
    e.preventDefault();
    if(LoginData.email ==="" || LoginData.password==="") {
        alert("enter the data");
    }else{
    console.log(LoginData)
}
};

const redirect = () => {
    Navigate("/signup");
}

    return (
        <div className='container border mt-3'>

            <form onSubmit={handleSubmit} >
                <div className="mb-3">
                    <label htmlFor='#' className="form-label">Email address</label>
                    <input 
                    type="email" 
                    name="email" 
                    className="form-control"
                    onChange={handleChange}
                    value={LoginData.email}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor='#' className="form-label">Password</label>
                    <input 
                    type="password" 
                    name="password"
                    className="form-control"
                    onChange={handleChange}
                    value={LoginData.password}
                    />
                </div>

                <button type="Submit" className="btn btn-primary">Submit</button>

                <h4 style={{cursor:"pointer"}} onClick={redirect}>Dont have an account? Sign Up here!</h4>
            </form>
            
        </div>
    )
}

export default Login
