import React from "react";
import Navbar from "../components/Navbar";
import SearchBox from "../components/SearchBox";
import RecipeCover from "../components/RecipeCover";
import "../styles/pages/SavedRecipes.css";

const SavedRecipes = () => {
    return (
        <div className="container savedRecipes">
            <Navbar/>
            <SearchBox/>
            <div className="recipesListContainer">
                <div className="title">
                    Rețetele mele
                </div>
                <div className="recipeList">
                    <RecipeCover nume = "Steak de vită cu cartofi prăjiți" rating = "4.6" timp = "40" calorii = "700" />
                    <RecipeCover nume = "Steak de vită cu cartofi prăjiți" rating = "4.6" timp = "40" calorii = "700" />
                    <RecipeCover nume = "Steak de vită cu cartofi prăjiți" rating = "4.6" timp = "40" calorii = "700" />
                    <RecipeCover nume = "Steak de vită cu cartofi prăjiți" rating = "4.6" timp = "40" calorii = "700" />
                    <RecipeCover nume = "Steak de vită cu cartofi prăjiți" rating = "4.6" timp = "40" calorii = "700" />
                    <RecipeCover nume = "Steak de vită cu cartofi prăjiți" rating = "4.6" timp = "40" calorii = "700" />
                </div>
            </div>
           
        </div>
    );
};


export default SavedRecipes;