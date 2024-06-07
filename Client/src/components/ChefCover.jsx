import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPeopleGroup, faStar, faThumbsUp, faUserPlus, faUtensils } from "@fortawesome/free-solid-svg-icons";
import "../styles/components/chefCover.css";
const ChefCover = (props) => {
    return (
        <div className = "chefCover">
            <div className = "chefImg">
                <img src = "images/chef1.jpeg" alt = "" />
            </div>
            <div className="chefDetails">
            <div className="chefName">F. Dumitrescu</div>
            <div className="lowerpart">
                <div className="elem">
                    4.6
                    <FontAwesomeIcon icon = {faStar}/>
                </div>
                <div className="elem">
                    70
                    <FontAwesomeIcon icon = {faUtensils} />
                </div>
                <div className="elem">
                    10k
                    <FontAwesomeIcon icon = {faThumbsUp}/>
                </div>
                <div className="elem">
                    100k
                    <FontAwesomeIcon icon = {faPeopleGroup}/>
                </div>
            </div>
            
            </div>
            <div className="followButton">
                <FontAwesomeIcon icon = {faUserPlus} style = {{fontSize: '1.1rem'}}/>
            </div>
        </div>
    )

};

export default ChefCover;