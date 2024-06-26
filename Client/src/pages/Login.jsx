import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/pages/LoginPage.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ()=>{
    const navigate = useNavigate();

    const [error,setError] = useState("");
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

        if(formData.username === "" || formData.password === ""){
            setError("Toate campurile sunt obligatorii");
            return;
        }

        axios.post("/profile/login",formData,{withCredentials:true}).then((res)=>{
            localStorage.setItem("username",formData.username);
            navigate("/");
            
        }).catch((err)=>{
            if(err === undefined){
                setError("Eroare la server");
                console.log(error)
            }else{
                console.log(err.response.data.error);
                setError(err.response.data.error);
            }
        })
    }

    return(
        <div>
            <Navbar login = {true}/>
            <div className="loginPage">
                <form className="loginForm" onSubmit={handleSubmit}>
                    <h1>Logare</h1>
                    {
                        error!=="" && <div className="errorContainer">{error}</div>
                    }
                    <input type="text" onChange={handleChange} value  = {formData.username} name = "username" placeholder="Username"/>
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