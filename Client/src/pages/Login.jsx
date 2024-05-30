import React from "react";
import Navbar from "../components/Navbar";
import "../styles/pages/LoginPage.css";

const Login = ()=>{
    return(
        <div>
            <Navbar login = {true}/>
            <div className="loginPage">
                <div className="loginForm">
                    <h1>Logare</h1>
                    <input type="text" placeholder="Email"/>
                    <input type="password" placeholder="Parolă"/>
                    <button>Logare</button>
                    <div className="register">
                        <p>Nu ai cont? <a href="/register">Înregistrează-te</a></p>
                    </div>
                </div>
            </div>
        </div>
       
    );
}

export default Login;