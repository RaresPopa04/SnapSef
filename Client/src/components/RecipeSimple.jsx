import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import VitaImg from "../images/vita.jpg";

const RecipeSimple = ({recipe}) => {
    return (
        <div className="recipeSimple">
            <div className="recipeImage">
                <img src="images/vita.jpg"/>
            </div>
            <div className="recipeTitle">
                {recipe.title}
            </div>
            <div className="lowerPart">
                <div className="recipeChefName">
                {recipe.chefName}
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
    )
    
};

export default RecipeSimple;