import { faBell, faBookmark, faFire, faHome, faUser, faUtensils } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LogoImg from "../images/logo-bar.png"
import React from "react";
import "../styles/Navbar.css";

const Navbar = () => {
    return (
        <div className = "navBar">
            <div className="logo">
                <img src={LogoImg}/>
            </div>
            <div className="links">
                <div className="home">
                    <FontAwesomeIcon icon = {faHome}/>
                    Acasă
                </div>
                <div className="cook">
                    <FontAwesomeIcon icon = {faUtensils}/>
                    Gătește
                </div>
                <div className="saved">
                    <FontAwesomeIcon icon = {faBookmark}/>
                    Salvate
                </div>
                <div className="calories">
                    <FontAwesomeIcon icon = {faFire}/>
                    Calorii
                </div>
                <div className="notifications">
                    <FontAwesomeIcon icon = {faBell}/>
                    Notificări
                </div>
            </div>
        </div>
    );
};

export default Navbar;