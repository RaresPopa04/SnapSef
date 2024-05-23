import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAppleWhole, faBell, faDrumstickBite, faDumbbell, faFire, faKitchenSet, faSearch, faSeedling, faSliders, faUser, faUtensils } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import UserImg from "../images/UserImg.svg";
import RecipeCover from "../components/RecipeCover";
import ChefCover from "../components/ChefCover";
import "../styles/homePage.css";
import Navbar from "../components/Navbar";

const HomePage = () => {
    return (
        <div className="container">
            <Navbar/>
            <div className="greeting">
                Bună ziua, <span>Vasile</span>!
            </div>
            <div className="heading">
                <h1>
                    Ce gătim <span>astăzi?</span>
                </h1>
            </div>
            <div className="searchContainer">
                <FontAwesomeIcon icon={faSearch} />
                <input type="text" placeholder="Caută rețete" />
                <div className="filter">
                    <FontAwesomeIcon icon={faSliders} />
                </div>
            </div>
            <div className="categories">
                <div className="category">
                    <FontAwesomeIcon icon={faDrumstickBite} />
                    <span>Carne</span>
                </div>
                <div className="category">
                    <FontAwesomeIcon icon={faSeedling} />
                    <span>De post</span>
                </div>
                <div className="category">
                    <FontAwesomeIcon icon={faAppleWhole} />
                    <span>Fresh</span>
                </div>
                <div className="category">
                    <FontAwesomeIcon icon={faFire} />
                    <span>Grătar</span>
                </div>

                <div className="category">
                    <FontAwesomeIcon icon={faDumbbell} />
                    <span>Multe proteine</span>
                </div>
            </div>
            <div className="heading">
                <h1>
                    Rețete <span>populare</span>
                </h1>
                <FontAwesomeIcon icon = {faUtensils}/>
            </div>
            <div className="recipes">
                <RecipeCover nume = "Steak de vită cu cartofi prăjiți" rating = "4.6" timp = "40" calorii = "700" />
                <RecipeCover nume = "Steak de vită cu cartofi prăjiți" rating = "4.6" timp = "40" calorii = "700" />
                <RecipeCover nume = "Steak de vită cu cartofi prăjiți" rating = "4.6" timp = "40" calorii = "700" />
            </div>

            <div className="heading">
                <h1>
                    Bucătari <span>de top</span>
                </h1>
                <FontAwesomeIcon icon = {faKitchenSet}/>
            </div>
            <div className="chefs">
                <ChefCover />
                <ChefCover />
                <ChefCover />
                <ChefCover />
                <ChefCover />
            </div>
        </div>
    );
}

export default HomePage;
