import React from "react";
import Navbar from "../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faFire, faHand, faPlateWheat, faStar, faStarHalf, faUtensilSpoon, faUtensils } from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer.jsx";
import "../styles/pages/RecipePage.css";


const RecipePage = () =>{
    return(
        <div className="container recipePage">
            <Navbar/>
            <div className="recipeDetails">
                <div className="recipeImg">
                    <img src="images/vita.jpg"alt="recipe"/>
                </div>
                <div className="recipeText">
                    <div className="detailsContainer">
                        <div className="quickInfo">
                            <div className="cookTime">
                                <FontAwesomeIcon icon = {faClock}/>
                                <div className="cookTimeText">
                                    30 min
                                </div>
                            </div>
                            <div className="difficulty">
                                <FontAwesomeIcon icon = {faUtensils}/>
                                <div className="difficultyText">
                                    Ușor
                                </div>
                            </div>
                            <div className="servings">
                                <FontAwesomeIcon icon = {faUtensilSpoon}/>
                                <div className="servingsText">
                                    4 porții
                                </div>
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
                                <img src="images/chef1.jpeg" alt="chef"/>
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

                    <div className="valoriNutitionale">
                        <div className="title">
                            Valori nutriționale per porție
                        </div>
                        <div className="list">
                            <div className="calories">
                                <div className="name">
                                    Calorii
                                </div>
                                <div className="value">
                                    300
                                </div>
                            </div>
                            <div className="protein">
                                <div className="name">
                                    Proteine
                                </div>
                                <div className="value">
                                    30
                                </div>
                            </div>
                            <div className="carbs">
                                <div className="name">
                                    Carbohidrați
                                </div>
                                <div className="value">
                                    20
                                </div>
                            </div>
                            <div className="fat">
                                <div className="name">
                                    Grăsimi
                                </div>
                                <div className="value">
                                    15
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ingredients">
                        <div className="title">
                            Ingrediente
                        </div>
                            <div className="list">
                                <div className="ingredient">
                                    <div className="ingredientText">
                                        4 bucăți de steak de vită
                                    </div>
                                </div>
                                <div className="ingredient">
                                    <div className="ingredientText">
                                        4 cartofi
                                    </div>
                                </div>
                                <div className="ingredient">
                                    <div className="ingredientText">
                                        2 linguri de ulei de măsline
                                    </div>
                                </div>
                                <div className="ingredient">
                                    <div className="ingredientText">
                                        1 linguriță de sare
                                    </div>
                                </div>
                                <div className="ingredient">
                                    <div className="ingredientText">
                                        1 linguriță de piper
                                    </div>
                                </div>
                            </div>
                        </div>
                    <div className="description">
                        <div className="title">
                            Descriere
                        </div>
                        
                        <div className="text">
                        Prima dată am întins bucata de aluat (eu am tăiat o fâșie de aproximativ 2.7 cm lățime dintr-o porție întreagă de foitaj cu unt) într-o fâșie de aproximativ 37 cm, lată de 10 cm și groasă de 2-3 mm. Am decupat cu ajutorul unei forme de stică 4 cercuri, le-am pus pe o bucată de foaie de copt, le-am înțepat de câteva ori cu o furculiță, le-am acoperit cu altă bucată de foaie de copt și le-am pus în frigider până am pregătit restul lucrurilor. Am uns pereții laterali ai formelor cu puțin unt și le-am lăsat deoparte.

Pentru caramel, am pus cele 100 g zahăr în cratița pregătită și am pus-o pe foc mic până zahărul s-a topit și s-a transformat într-un lichid maroniu, vâscos și fin (am mișcat de cratița de câteva ori pentru ca zahărul să se topească uniform) – durează cam 10-15 minute acest proces.

Cât s-a format caramelul, am curățat merele de coajă, le-am pus în accesoriul de tăiere felii de la robot și am tăiat merele fâșii.

Am feliat mai întâi primul mar și, din foaia obținută, am făcut o rolă – practic, am rulat fâșia de măr până am reconstruit din ea mărul. Am făcut la fel cu al doilea măr.

Am feliat și al treilea măr, dar pe ăsta nu l-am rulat individuală, ci l-am adăugat la relele obținute din primele 2 mere, jumi-juma la fiecară- – ca să obțin practic 2 role groase cât forma mea de copt. „Rola” trebuie să fie puțin mai subțire decât circumferința formelor de sticlă termorezinstentă folosite.

Am tăiat fiecare „rolă” de măr obținută în două și le-am pus deoparte.


                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default RecipePage;