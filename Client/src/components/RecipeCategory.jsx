import { faAppleWhole } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../styles/components/RecipeCategory.css";

const RecipeCategory = (props) => {

    const setActive = (e)=>{
        const element = e.target;
        const parent = element.parentElement;
        const children = Array.from(parent.children);
        children.forEach((elem)=>{
            if(elem.classList.contains("active")){
                elem.classList.remove("active");
            }
        })
        element.classList.add("active");
        
    }
    return (
        <div className="category" onClick={(e)=>setActive(e)}>
            <div className="icon"> 
                    <FontAwesomeIcon icon={props.icon} />
            </div>
            <div>{props.name}</div>
        </div>
    );
}

export default RecipeCategory;