import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/pages/LoginPage.css";
import axios from "axios";

const Login = ()=>{

    
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    
    })

    const handleChange = (e)=>{
        const {name,value} = e.target;
        setFormData({
            ...formData,
            [name]:value
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.post("/profile/login",formData).then((res)=>{
            localStorage.setItem("token",res.data.token);
            localStorage.setItem("username",formData.username);
            window.location.href = "/";
        }).catch((err)=>{
            console.log(err);
        })
    }

    return(
        <div>
            <Navbar login = {true}/>
            <div className="loginPage">
                <form className="loginForm" onSubmit={handleSubmit}>
                    <h1>Logare</h1>
                    <input type="text" onChange={handleChange} value  = {formData.email} name = "email" placeholder="Email"/>
                    <input type="password" onChange = {handleChange} value  = {formData.password} name = "password" placeholder="Parolă"/>
                    <input type = "submit" value = "Logare"/>
                    <div className="register">
                        <p>Nu ai cont? <a href="/signup">Înregistrează-te</a></p>
                    </div>
                </form>
            </div>
        </div>
       
    );
}

export default Login;