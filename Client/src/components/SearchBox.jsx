import { faSearch, faSliders } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "../styles/components/SearchBox.css";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {

    const navigate = useNavigate();
    const [search,setSearch] = useState("");

    const changeSearchText = (e)=>{
        setSearch(e.target.value);
    }

    const handleSubmit = ()=>{
        navigate(`/retete?titlu=${search}`);
    }

    return(
        <div className="searchContainer">
                <div className="searchBox">
                    <div className="iconContainer">
                        <FontAwesomeIcon className="icon" icon={faSearch} />

                    </div>
                    <input type="text" value = {search} onChange={changeSearchText} placeholder="Caută rețete" />


                </div>
                
                <div className="submitBtn" onClick={handleSubmit}>
                        Caută
                    </div>
                <div className="filter">
                    <FontAwesomeIcon icon={faSliders} />
                </div>
            </div>
    )
};

export default SearchBox;