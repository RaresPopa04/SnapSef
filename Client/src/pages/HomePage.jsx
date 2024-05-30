import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAppleWhole, faArrowLeft, faArrowRight, faCheese, faCookie, faDrumstickBite, faDumbbell, faFire, faFish, faIceCream, faKitchenSet, faMedal, faMugHot, faPizzaSlice, faSeedling, faUtensils, faWineBottle } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import RecipeCover from "../components/RecipeCover";
import ChefCover from "../components/ChefCover";
import "../styles/pages/homePage.css";
import Navbar from "../components/Navbar";
import SearchBox from "../components/SearchBox";
import RecipeCategory from "../components/RecipeCategory";
import Footer from "../components/Footer";

const HomePage = () => {
    const moveRecipes = (direction) => {
        console.log("Moving recipes");
        const recipeList = document.querySelector(".recipeList");
        const directionValue = direction;
        console.log(directionValue);
        recipeList.scrollBy({
            left: 600 * directionValue,
            behavior: "smooth"
        })

    }
    const moveNewRecipes = (direction) => {
        console.log("Moving recipes");
        const recipeList = document.querySelector(".newRecipes .recipeList");
        const directionValue = direction;
        console.log(directionValue);
        recipeList.scrollBy({
            left: 600 * directionValue,
            behavior: "smooth"
        })

    }

    const moveChefs = (direction) => {
        const chefList = document.querySelector(".chefList");
        const directionValue = direction;
        chefList.scrollBy({
            left: 600 * directionValue,
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
            <div className="bestRatedRecipes scrollableContainer">
                <div className="heading">
                    <div>
                        Rețete populare
                    </div>
                    <FontAwesomeIcon className="icon" icon = {faMedal}/>
                </div>
                <div className="recipeContainer">
                    <FontAwesomeIcon className="icon" icon = {faArrowLeft} onClick={()=>moveRecipes(-1)}/>
                    <div className="list recipeList">
                        <div className="elements">
                            <RecipeCover nume = "Steak de vită cu cartofi prăjiți" rating = "4.6" timp = "40" calorii = "700" />
                            <RecipeCover nume = "Steak de vită cu cartofi prăjiți" rating = "4.6" timp = "40" calorii = "700" />
                            <RecipeCover nume = "Steak de vită cu cartofi prăjiți" rating = "4.6" timp = "40" calorii = "700" />
                            <RecipeCover nume = "Steak de vită cu cartofi prăjiți" rating = "4.6" timp = "40" calorii = "700" />
                            <RecipeCover nume = "Steak de vită cu cartofi prăjiți" rating = "4.6" timp = "40" calorii = "700" />
                            <RecipeCover nume = "Steak de vită cu cartofi prăjiți" rating = "4.6" timp = "40" calorii = "700" />
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
            <div className="newRecipes scrollableContainer">
                <div className="heading">
                    <div>
                        Rețete noi
                    </div>
                    <FontAwesomeIcon className="icon" icon = {faUtensils}/>
                </div>
                <div className="recipeContainer">
                    <FontAwesomeIcon className="icon" icon = {faArrowLeft} onClick={()=>moveNewRecipes(-1)}/>
                    <div className="list recipeList">
                        <div className="elements">
                            <RecipeCover nume = "Steak de vită cu cartofi prăjiți" rating = "4.6" timp = "40" calorii = "700" />
                            <RecipeCover nume = "Steak de vită cu cartofi prăjiți" rating = "4.6" timp = "40" calorii = "700" />
                            <RecipeCover nume = "Steak de vită cu cartofi prăjiți" rating = "4.6" timp = "40" calorii = "700" />
                            <RecipeCover nume = "Steak de vită cu cartofi prăjiți" rating = "4.6" timp = "40" calorii = "700" />
                            <RecipeCover nume = "Steak de vită cu cartofi prăjiți" rating = "4.6" timp = "40" calorii = "700" />
                            <RecipeCover nume = "Steak de vită cu cartofi prăjiți" rating = "4.6" timp = "40" calorii = "700" />
                            <RecipeCover nume = "Steak de vită cu cartofi prăjiți" rating = "4.6" timp = "40" calorii = "700" />
                            <RecipeCover nume = "Steak de vită cu cartofi prăjiți" rating = "4.6" timp = "40" calorii = "700" />
                            <RecipeCover nume = "Steak de vită cu cartofi prăjiți" rating = "4.6" timp = "40" calorii = "700" />
                            <RecipeCover nume = "Steak de vită cu cartofi prăjiți" rating = "4.6" timp = "40" calorii = "700" />
                            <RecipeCover nume = "Steak de vită cu cartofi prăjiți" rating = "4.6" timp = "40" calorii = "700" />
                        </div>
                    </div>
                    <FontAwesomeIcon className="icon" icon = {faArrowRight} onClick={()=>moveNewRecipes(1)}/>
                </div>
                
            </div>

            <div className="topChefs scrollableContainer">
                <div className="heading">
                    <div>
                        Bucătari <span>de top</span>
                    </div>
                    <FontAwesomeIcon className="icon" icon = {faKitchenSet}/>
                </div>
                <div className="recipeContainer">
                    <FontAwesomeIcon className="icon" icon = {faArrowLeft} onClick={()=>moveChefs(-1)}/>
                    <div className="list chefList">
                        <div className="elements">
                        <ChefCover />
                        <ChefCover />
                        <ChefCover />
                        <ChefCover />
                        <ChefCover />
                        <ChefCover />
                        <ChefCover />
                        <ChefCover />
                        <ChefCover />
                        </div>
                    </div>
                    <FontAwesomeIcon className="icon" icon = {faArrowRight} onClick={()=>moveChefs(1)}/>
                </div>
                
            </div>

            <Footer/>
            
        </div>
    );
}

export default HomePage;
