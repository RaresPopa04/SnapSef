import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ChefImg from "../images/chef1.jpeg";
import RecipeCover from "../components/RecipeCover";

const ChefPage = () => {
    return (
        <div className="container">
            <div className="circleTop"></div>
            <div className="topInfo">
                <div className="left">
                    <div className="chefImg">
                        <img src={ChefImg} alt="chef"/>
                    </div>
                    <div className="chefName">
                        F. Dumitrescu
                    </div>
                </div>
                <div className="right">
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
                    <div className="recipesText">
                        Rețete
                    </div>
                    50
                </div>
                <div className="followers">
                    <div className="followersText">
                        Urmăritori
                    </div>
                    1000
                </div>
                <div className="likes">
                    <div className="likeText">
                        Aprecieri
                    </div>
                    10k
                </div>
            </div>

            <div className="description">
                <div className="descriptionTitle">
                    Despre mine
                </div>
                <div className="descriptionText">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac orci sit amet ipsum fermentum
                    fringilla. Donec auctor, nisl nec tincidunt luctus, libero mi ultricies nunc, eu ultricies nulla
                    purus nec justo. Sed nec odio at nunc aliquam tincidunt. Aenean sit amet turpis sed lorem
                    fermentum tincidunt. Sed nec odio at nunc aliquam tincidunt. Aenean sit amet turpis sed lorem
                    fermentum tincidunt.
                </div>
            </div>

            <div className="recipes">
                <div className="recipesTitle">
                    Rețetele mele
                </div>
                <RecipeCover nume = "Steak de vită cu cartofi prăjiți" rating = "4.6" timp = "40" calorii = "700" />
                <RecipeCover nume = "Steak de vită cu cartofi prăjiți" rating = "4.6" timp = "40" calorii = "700" />
                <RecipeCover nume = "Steak de vită cu cartofi prăjiți" rating = "4.6" timp = "40" calorii = "700" />
                <RecipeCover nume = "Steak de vită cu cartofi prăjiți" rating = "4.6" timp = "40" calorii = "700" />
                <RecipeCover nume = "Steak de vită cu cartofi prăjiți" rating = "4.6" timp = "40" calorii = "700" />
            </div>
        </div>
    );
}

export default ChefPage;