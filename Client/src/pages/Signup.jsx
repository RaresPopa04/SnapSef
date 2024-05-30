import React from "react";
import Navbar from "../components/Navbar";
import "../styles/pages/SignupPage.css";

const Signup = () => {
    return (
        <div >
            <Navbar/>

            <div className="signupPage">
                <div className="signupForm">
                    <h1>Înregistrare</h1>
                    <input type="text" placeholder="Nume"/>
                    <input type="text" placeholder="Prenume"/>
                    <input type="text" placeholder="Email"/>
                    <input type="password" placeholder="Parolă"/>
                    <input type="password" placeholder="Confirmare parolă"/>
                    <button>Înregistrare</button>
                    <div className="login">
                        <p>Ai cont? <a href="/login">Logare</a></p>
                    </div>
                </div>
            </div>
            

        </div>
    );
}

export default Signup;