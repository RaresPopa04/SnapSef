import React from "react";
import "../styles/components/recipeCover.css";
import "../styles/root.css"
import vitaImg from "../images/vita.jpg"
import chefImg from "../images/chef1.jpeg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookBookmark, faClock, faFire, faStar } from "@fortawesome/free-solid-svg-icons";
const RecipeCover = (props) => {
    return (
        <div className="recipeCover">
            <div className="recipeImg">
                <img src={vitaImg} alt="" />
            </div>
            <div className="recipeDetails">
                <div className="recipeName">{props.nume}</div>
                <div className="lowerPart">
                    <div className="recipeInfo">
                            {props.rating}
                            <FontAwesomeIcon icon={faStar}/>
                            {props.timp}
                            <FontAwesomeIcon icon = {faClock}/>
                            {props.calorii}
                            <FontAwesomeIcon icon = {faFire}/>
                    </div>
                    <div className="chefSection">
                        <img src={chefImg} alt="" />
                    </div>
                    <div className="saveButton">
                        <FontAwesomeIcon icon = {faBookBookmark} style={{fontSize:'1.3rem'}}/>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default RecipeCover;

