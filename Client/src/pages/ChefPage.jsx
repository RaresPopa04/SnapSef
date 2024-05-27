import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ChefImg from "../images/chef1.jpeg";
import RecipeCover from "../components/RecipeCover";
import "../styles/ChefPage.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ChefPage = () => {
    return (
        <div className="container">
            <Navbar/>
            <div className="circleTop">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,128L21.8,138.7C43.6,149,87,171,131,181.3C174.5,192,218,192,262,197.3C305.5,203,349,213,393,218.7C436.4,224,480,224,524,229.3C567.3,235,611,245,655,240C698.2,235,742,213,785,224C829.1,235,873,277,916,293.3C960,309,1004,299,1047,245.3C1090.9,192,1135,96,1178,90.7C1221.8,85,1265,171,1309,170.7C1352.7,171,1396,85,1418,42.7L1440,0L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"></path></svg>
            </div>
            <div className="topInfo">
                <div className="left">
                    <div className="chefImg">
                        <img src={ChefImg} alt="chef"/>
                    </div>
                </div>
                <div className="right">
                    <div className="chefName">
                        F. Dumitrescu
                    </div>
                    <div className="followBtn">
                        Urmărește
                    </div>
                    <div className="rating">
                        <div className="stars">
                            <FontAwesomeIcon icon = {faStar}/>
                            <FontAwesomeIcon icon = {faStar}/>
                            <FontAwesomeIcon icon = {faStar}/>
                            <FontAwesomeIcon icon = {faStar}/>
                            <FontAwesomeIcon icon = {faStar}/>
                        </div>
                        <div className="count">
                            (50)
                        </div>
                    </div>
                </div>
            </div>

            <div className="chefNumbers">
                <div className="recipes">
                    <div className="text">
                        Rețete
                    </div>
                    50
                </div>
                <div className="followers">
                    <div className="text">
                        Urmăritori
                    </div>
                    1000
                </div>
                <div className="likes">
                    <div className="text">
                        Aprecieri
                    </div>
                    10k
                </div>
            </div>

            <div className="description">
                <div className="title">
                    Despre mine
                </div>
                <div className="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac orci sit amet ipsum fermentum
                    fringilla. Donec auctor, nisl nec tincidunt luctus, libero mi ultricies nunc, eu ultricies nulla
                    purus nec justo. Sed nec odio at nunc aliquam tincidunt. Aenean sit amet turpis sed lorem
                    fermentum tincidunt. Sed nec odio at nunc aliquam tincidunt. Aenean sit amet turpis sed lorem
                    fermentum tincidunt.
                </div>
            </div>

            <div className="recipes">
                <div className="title">
                    Rețetele mele
                </div>
                <div className="recipeContainer">
                    
                    <RecipeCover nume = "Steak de vită cu cartofi prăjiți" rating = "4.6" timp = "40" calorii = "700" />
                    <RecipeCover nume = "Steak de vită cu cartofi prăjiți" rating = "4.6" timp = "40" calorii = "700" />
                    <RecipeCover nume = "Steak de vită cu cartofi prăjiți" rating = "4.6" timp = "40" calorii = "700" />
                    <RecipeCover nume = "Steak de vită cu cartofi prăjiți" rating = "4.6" timp = "40" calorii = "700" />
                    <RecipeCover nume = "Steak de vită cu cartofi prăjiți" rating = "4.6" timp = "40" calorii = "700" />
                </div>
            </div>

            <Footer/>
        </div>
    );
}

export default ChefPage;