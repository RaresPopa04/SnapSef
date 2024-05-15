import React from 'react';
import "../styles/startPage.css"
import { useNavigate } from 'react-router-dom';
import logo from "../images/logo.png"

const StartPage = () => {

    const navigate = useNavigate();

    const redirectToHomePage= ()=>{
        navigate("/home");
    }

    return (
        <div className="container">
            <div className="logo-container">
               <img src={logo} alt="" />

            </div>
            <button onClick={redirectToHomePage} className='startButton'>
                Start
            </button>
        </div>
    );
}

export default StartPage;