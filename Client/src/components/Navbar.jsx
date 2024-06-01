import { faBell, faBookmark, faFire, faHome, faUser, faUtensils } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LogoImg from "../images/logo-bar.png"
import React, { useEffect, useState } from "react";
import "../styles/components/Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = (props) => {
    const navigate = useNavigate();
    const [username,setUsername] = useState("");
    const goTo = (route)=>{
        navigate(route);
    }


    useEffect(()=>{
        const username = localStorage.getItem("username");
        console.log(localStorage);
        if(username)
            setUsername(username);
    },[])


    return (
        <div className = "navBar">
           <div className="logo" style={{textAlign: props.login ? "center" : "left"}} onClick={()=>goTo("/")}>
                <img src={LogoImg}/>
            </div>
            {props.login == null && <div className="links">
                <div className="home" onClick={()=>goTo("/")}>
                    <FontAwesomeIcon icon = {faHome}/>
                    Acasă
                </div>
                <div className="cook">
                    <FontAwesomeIcon icon = {faUtensils}/>
                    Gătește
                </div>
                <div className="saved" onClick={()=>goTo("/salvate")}>
                    <FontAwesomeIcon icon = {faBookmark}/>
                    Salvate
                </div>
                <div className="calories" onClick={()=>goTo("/calorii")}>
                    <FontAwesomeIcon icon = {faFire}/>
                    Calorii
                </div>
                {
                    username == "" && <div className="login" onClick={()=>goTo("/login")}>
                        <FontAwesomeIcon icon = {faUser}/>
                        Login
                    </div>
                }
                {

                    username != "" && <div className="profile" onClick={()=>goTo("/profil")}>
                        <FontAwesomeIcon icon = {faUser}/>
                        Profil
                    </div>
                
                }
            </div>}
        </div>
    );
};

export default Navbar;