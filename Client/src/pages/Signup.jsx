import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/pages/SignupPage.css";
import axios from "axios";

const Signup = () => {

    const [formData, setFormData] = useState({
        username: "",
        lastName: "",
        firstName: "",
        email: "",
        password: "",
        password1: ""
    
    })

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(formData)
        axios.post("/profile/signup",formData).then((res)=>{
            console.log(res);
        }).catch((err)=>{
            console.log(err);
        })
    }

    const handleChange = (e)=>{
       const {name,value} = e.target;
       setFormData({
           ...formData,
           [name]:value
       })
    }

    return (
        <div >
            <Navbar/>

            <div className="signupPage">
                <form className="signupForm" onSubmit={handleSubmit}>
                    <h1>Înregistrare</h1>
                    <input onChange={handleChange} value = {formData.username} name ="username" type="text" placeholder="Username"/>
                    <input onChange={handleChange} value = {formData.lastName} name ="lastName" type="text" placeholder="Nume"/>
                    <input onChange={handleChange} value = {formData.firstName} name ="firstName" type="text" placeholder="Prenume"/>
                    <input onChange={handleChange} value = {formData.email} name ="email" type="text" placeholder="Email"/>
                    <input onChange={handleChange} value = {formData.password} name ="password" type="password" placeholder="Parolă"/>
                    <input onChange={handleChange} value = {formData.password1} name ="password1" type="password" placeholder="Confirmare parolă"/>
                    <input type = "submit" value ="Înregistrare"/>
                    <div className="login">
                        <p>Ai cont? <a href="/login">Logare</a></p>
                    </div>
                </form>
            </div>
            

        </div>
    );
}

export default Signup;