import React from "react";
import Navbar from "../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCookie, faStar, faUtensils } from "@fortawesome/free-solid-svg-icons";

import "../styles/pages/AllRecipes.css";

import VitaImg from "../images/vita.jpg";
import Footer from "../components/Footer";
import RecipeSimple from "../components/RecipeSimple";

const AllRecipes = () => {
    return (
        <div className="container">
            <Navbar/>
            <div className="foundRecipes">
                <div className="titleContainer">
                    <div className="title">
                        Rețete găsite
                    </div>
                    <FontAwesomeIcon icon ={faUtensils} className="icon"/>
                </div>

                <div className="recipes">
                    <RecipeSimple recipe={
                        {
                            title:"Banana Bread",
                            chefName:"Florin Dumitrescu"
                        }
                    }/>
                </div>

            </div>

            <div className="relatedRecipes">
                <div className="titleContainer">
                    <div className="title">
                        Rețete similare
                    </div>
                    <FontAwesomeIcon icon ={faCookie} className="icon"/>
                </div>
                <div className="recipes">
                    <div className="recipeSimple">
                        <div className="recipeImage">
                            <img src={VitaImg} alt="banana bread"/>
                        </div>
                        <div className="recipeTitle">
                            Banana Bread
                        </div>
                        <div className="lowerPart">
                            <div className="recipeChefName">
                            Florin Dumitrescu
                            </div>

                            <div className="rating">
                                <div className="ratingStars">
                                    <FontAwesomeIcon icon ={faStar}/>
                                    <FontAwesomeIcon icon ={faStar}/>
                                    <FontAwesomeIcon icon ={faStar}/>
                                    <FontAwesomeIcon icon ={faStar}/>
                                    <FontAwesomeIcon icon ={faStar}/>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="moreRecipes">
                <div className="titleContainer">
                    <div className="title">
                        Mai multe rețete
                    </div>
                    <FontAwesomeIcon icon ={faUtensils} className="icon"/>
                </div>
                <div className="recipes">
                    <div className="recipeSimple">
                        <div className="recipeImage">
                            <img src={VitaImg} alt="banana bread"/>
                        </div>
                        <div className="recipeTitle">
                            Banana Bread
                        </div>
                        <div className="lowerPart">
                            <div className="recipeChefName">
                            Florin Dumitrescu
                            </div>

                            <div className="rating">
                                <div className="ratingStars">
                                    <FontAwesomeIcon icon ={faStar}/>
                                    <FontAwesomeIcon icon ={faStar}/>
                                    <FontAwesomeIcon icon ={faStar}/>
                                    <FontAwesomeIcon icon ={faStar}/>
                                    <FontAwesomeIcon icon ={faStar}/>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    )

};

export default AllRecipes;