import React from "react";
import Navbar from "../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";

const RecipePage = () =>{
    return(
        <div className="container">
            <Navbar/>
            <div className="recipeDetails">
                <div className="recipeImg">
                    <img src="https://via.placeholder.com/150" alt="recipe"/>
                </div>
                <div className="recipeText">
                    <div className="detailsContainer">
                        <div className="cookTime">
                            <FontAwesomeIcon icon = {faClock}/>
                            <div className="cookTimeText">
                                30 min
                            </div>
                        </div>
                        <div className="rating">
                            <div className="stars">
                                <FontAwesomeIcon icon = {faStar}/>
                                <FontAwesomeIcon icon = {faStar}/>
                                <FontAwesomeIcon icon = {faStar}/>
                                <FontAwesomeIcon icon = {faStar}/>
                                <FontAwesomeIcon icon = {faStarHalf}/>
                            </div>
                            <div className="count">
                                (50)
                            </div>
                        </div>
                        <div className="chef">
                            <div className="chefImg">
                                <img src="https://via.placeholder.com/50" alt="chef"/>
                            </div>
                            <div className="chefName">
                                F. Dumitrescu
                            </div>
                        </div>
                    </div>

                    <div className="title">
                        Steak de vită cu cartofi prăjiți
                    </div>
                    <div className="tags">
                        <div className="tag">Carne</div>
                        <div className="tag">Fel principal</div>
                        <div className="tag">Sursă de proteină</div>
                        <div className="tag">Cină</div>
                        <div className="tag">Prânz</div>
                    </div>

                    <div className="description">
                        <div className="title">
                            Descriere
                        </div>
                        <div className="text">
                        Carnea de vită este apreciată pentru textura sa suculentă și gustul bogat, oferind o experiență culinară satisfăcătoare și plină de savoare. Steak-ul de vită poate fi preparat în diferite feluri, de la rare (sângeriu), medium-rare (puțin sângeriu în mijloc), medium (roz în mijloc) până la well-done (bine făcut), pentru a se potrivi preferințelor individuale ale fiecărui consumator. 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecipePage;