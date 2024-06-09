import React from "react";
import Navbar from "../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCookie, faStar, faUtensils } from "@fortawesome/free-solid-svg-icons";

import "../styles/pages/AllRecipes.css";

import Footer from "../components/Footer";
import RecipeSimple from "../components/RecipeSimple";
import SearchBox from "../components/SearchBox";

const AllRecipes = () => {
    return (
        <div className="container">
            <Navbar/>
            <SearchBox/>
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
                    <RecipeSimple recipe={
                        {
                            title:"Banana Bread",
                            chefName:"Florin Dumitrescu"
                        }
                    }/>
                    <RecipeSimple recipe={
                        {
                            title:"Banana Bread",
                            chefName:"Florin Dumitrescu"
                        }
                    }/>
                    <RecipeSimple recipe={
                        {
                            title:"Banana Bread",
                            chefName:"Florin Dumitrescu"
                        }
                    }/>
                    <RecipeSimple recipe={
                        {
                            title:"Banana Bread",
                            chefName:"Florin Dumitrescu"
                        }
                    }/>
                    <RecipeSimple recipe={
                        {
                            title:"Banana Bread",
                            chefName:"Florin Dumitrescu"
                        }
                    }/>
                    <RecipeSimple recipe={
                        {
                            title:"Banana Bread",
                            chefName:"Florin Dumitrescu"
                        }
                    }/>
                    <RecipeSimple recipe={
                        {
                            title:"Banana Bread",
                            chefName:"Florin Dumitrescu"
                        }
                    }/>
                </div>

                <div className="moreButton">
                    <div>Mai multe ...</div>
                </div>

            </div>

            <div className="relatedRecipes">
                <div className="titleContainer">
                    <div className="title">
                        Rețete similare
                    </div>
                    <FontAwesomeIcon icon ={faCookie} className="icon"/>
                </div>
                <div className="scrollableContainer">
                    <div className="recipeContainer">
                        <div className="recipes horizontalContainer">
                            <div className="elements">
                                <RecipeSimple recipe={
                                    {
                                        title:"Banana Bread",
                                        chefName:"Florin Dumitrescu"
                                    }
                                }/>
                                <RecipeSimple recipe={
                                    {
                                        title:"Banana Bread",
                                        chefName:"Florin Dumitrescu"
                                    }
                                }/>
                                <RecipeSimple recipe={
                                    {
                                        title:"Banana Bread",
                                        chefName:"Florin Dumitrescu"
                                    }
                                }/>
                                <RecipeSimple recipe={
                                    {
                                        title:"Banana Bread",
                                        chefName:"Florin Dumitrescu"
                                    }
                                }/>
                                <RecipeSimple recipe={
                                    {
                                        title:"Banana Bread",
                                        chefName:"Florin Dumitrescu"
                                    }
                                }/>
                                <RecipeSimple recipe={
                                    {
                                        title:"Banana Bread",
                                        chefName:"Florin Dumitrescu"
                                    }
                                }/>
                                <RecipeSimple recipe={
                                    {
                                        title:"Banana Bread",
                                        chefName:"Florin Dumitrescu"
                                    }
                                }/>
                                <RecipeSimple recipe={
                                    {
                                        title:"Banana Bread",
                                        chefName:"Florin Dumitrescu"
                                    }
                                }/>
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
                    <RecipeSimple recipe={
                        {
                            title:"Banana Bread",
                            chefName:"Florin Dumitrescu"
                        }
                    }/>
                </div>
            </div>

            <Footer/>
        </div>
    )

};

export default AllRecipes;