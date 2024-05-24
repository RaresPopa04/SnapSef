import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAppleWhole, faArrowLeft, faArrowRight, faCheese, faCookie, faDrumstickBite, faDumbbell, faFire, faFish, faIceCream, faKitchenSet, faMugHot, faPizzaSlice, faSeedling, faUtensils, faWineBottle } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import RecipeCover from "../components/RecipeCover";
import ChefCover from "../components/ChefCover";
import "../styles/homePage.css";
import Navbar from "../components/Navbar";
import SearchBox from "../components/SearchBox";
import RecipeCategory from "../components/RecipeCategory";

const HomePage = () => {
    const moveRecipes = (direction) => {
        console.log("Moving recipes");
        const recipeList = document.querySelector(".recipeList");
        const directionValue = direction;
        console.log(directionValue);
        recipeList.scrollBy({
            left: 300 * directionValue,
            behavior: "smooth"
        })

    }
    return (
        <div className="container">
            <Navbar/>
            <div className="heading">
                    <div>Ce gătim </div>
                    <div>astăzi?</div>
            </div>
            <SearchBox/>
            <div className="categories">                
                <RecipeCategory icon = {faDrumstickBite} name = "Carne"/>
                <RecipeCategory icon = {faSeedling} name = "De post"/>
                <RecipeCategory icon = {faAppleWhole} name = "Fresh"/>
                <RecipeCategory icon = {faDumbbell} name = "Multe proteine"/>
                <RecipeCategory icon={faFish} name="Pește" />
                <RecipeCategory icon={faIceCream} name="Desert" />
                <RecipeCategory icon={faMugHot} name="Mic Dejun" />
                <RecipeCategory icon={faPizzaSlice} name="Pizza" />
                <RecipeCategory icon={faCookie} name="Gustări" />
            </div>
            <div className="bestRatedRecipes">
                <div className="heading">
                    <div>
                        Rețete populare
                    </div>
                    <FontAwesomeIcon className="icon" icon = {faUtensils}/>
                </div>
                <div className="recipeContainer">
                    <FontAwesomeIcon className="icon" icon = {faArrowLeft} onClick={()=>moveRecipes(-1)}/>
                    <div className="recipeList">
                        <div className="recipes">
                            <RecipeCover nume = "Steak de vită cu cartofi prăjiți" rating = "4.6" timp = "40" calorii = "700" />
                            <RecipeCover nume = "Steak de vită cu cartofi prăjiți" rating = "4.6" timp = "40" calorii = "700" />
                            <RecipeCover nume = "Steak de vită cu cartofi prăjiți" rating = "4.6" timp = "40" calorii = "700" />
                            <RecipeCover nume = "Steak de vită cu cartofi prăjiți" rating = "4.6" timp = "40" calorii = "700" />
                            <RecipeCover nume = "Steak de vită cu cartofi prăjiți" rating = "4.6" timp = "40" calorii = "700" />
                            <RecipeCover nume = "Steak de vită cu cartofi prăjiți" rating = "4.6" timp = "40" calorii = "700" />
                            <RecipeCover nume = "Steak de vită cu cartofi prăjiți" rating = "4.6" timp = "40" calorii = "700" />
                        </div>
                    </div>
                    <FontAwesomeIcon className="icon" icon = {faArrowRight} onClick={()=>moveRecipes(1)}/>
                </div>
                
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
